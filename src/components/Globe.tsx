"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const isVisibleRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let animFrameId: number | null = null;
    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio,
      width: width * devicePixelRatio,
      height: width * devicePixelRatio,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [0.15, 0.18, 0.28],
      markerColor: [0.65, 0.35, 0.95],
      glowColor: [0.12, 0.1, 0.25],
      markers: [
        // Salta, Argentina coordinates
        { location: [-24.7821, -65.4232], size: 0.08 },
      ],
    });

    const stopAnimation = () => {
      if (animFrameId !== null) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    };

    const animate = () => {
      if (!isVisibleRef.current || prefersReducedMotionRef.current) {
        animFrameId = null;
        return;
      }

      if (pointerInteracting.current === null) {
        phi += 0.004;
      }
      globe.update({
        phi: phi + pointerInteractionMovement.current,
        width: width * devicePixelRatio,
        height: width * devicePixelRatio,
      });
      animFrameId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animFrameId === null && isVisibleRef.current && !prefersReducedMotionRef.current) {
        animFrameId = requestAnimationFrame(animate);
      }
    };

    const renderStaticFrame = () => {
      globe.update({
        phi: phi + pointerInteractionMovement.current,
        width: width * devicePixelRatio,
        height: width * devicePixelRatio,
      });
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches;
      if (prefersReducedMotionRef.current) {
        stopAnimation();
        renderStaticFrame();
      } else {
        startAnimation();
      }
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          renderStaticFrame();
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(canvasRef.current);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      stopAnimation();
      globe.destroy();
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateMotionPreference);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full aspect-square max-w-[450px] mx-auto relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.01;
          }
        }}
        className="w-full h-full opacity-0 transition-opacity duration-1000 cursor-grab touch-none"
      />
      {/* Location badge overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-md text-xs font-semibold text-white flex items-center gap-2 shadow-lg pointer-events-none">
        <span className="w-2.5 h-2.5 rounded-full bg-purple-500 motion-safe:animate-ping" />
        <span>Salta, Argentina</span>
      </div>
    </div>
  );
}
