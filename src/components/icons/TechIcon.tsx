import React from 'react'

interface TechIconProps {
  name: string
  className?: string
  size?: number
}

export default function TechIcon({ name, className = 'w-6 h-6', size }: TechIconProps) {
  const style = size ? { width: `${size}px`, height: `${size}px` } : {}
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '')

  switch (normalized) {
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
          <path d="M67.312 103.935c3.25 5.623 8.001 9.25 15.877 9.25 6.75 0 11.127-3.376 11.127-7.999 0-5.5-4.376-7.625-11.751-10.875l-4.126-1.75c-11.876-5.125-19.752-11.5-19.752-25.127 0-12.126 9.376-21.377 23.877-21.377 10.376 0 17.752 3.75 23.377 13.5l-10.126 6.5c-3.125-5.5-6.5-7.625-13.251-7.625-5.875 0-9.751 3.625-9.751 7.875 0 5.375 3.875 7.5 11.376 10.75l4.125 1.75c14.252 6.125 20.377 12.126 20.377 25.877 0 14.751-11.626 22.877-27.752 22.877-15.501 0-24.877-7.875-29.377-17.25l10.127-6.376zM15.25 104.435c2.75 4.876 6.876 8.5 13.376 8.5 6.25 0 10.251-2.5 10.251-12v-51h14.126v51.251c0 17.501-10.251 24.377-24.377 24.377-12.751 0-20.752-6.5-24.252-14.751l10.876-6.377z"/>
        </svg>
      )
    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#3178C6" d="M0 0h128v128H0z"/>
          <path fill="#FFF" d="M72.635 103.542c3.55 5.25 8.7 8.35 16.55 8.35 6.9 0 11.45-3.1 11.45-7.55 0-5.05-4.45-7.05-12.05-10.05l-4.2-1.65c-12.15-4.75-20.2-10.65-20.2-23.25 0-11.2 9.55-19.75 24.4-19.75 10.6 0 18.15 3.45 23.9 12.45l-10.35 6.6c-3.2-4.9-6.65-6.9-13.55-6.9-6 0-9.95 3.3-9.95 7.25 0 4.95 3.95 6.9 11.65 9.9l4.2 1.65c14.6 5.75 20.85 11.2 20.85 23.9 0 13.6-11.95 21.1-28.35 21.1-15.85 0-25.45-7.25-30.1-15.85l10.8-6.65zm-57.38-52.542h44.4v13.5h-14.7v59.7h-15v-59.7h-14.7v-13.5z"/>
        </svg>
      )
    case 'react':
    case 'reactjs':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} style={style}>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    case 'nextjs':
    case 'next':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <circle cx="64" cy="64" r="64" fill="#000"/>
          <path fill="url(#next_grad)" d="M109.684 103.541 46.126 24H34v80h13.263V44.208l52.158 67.579a63.784 63.784 0 0 0 10.263-8.246z"/>
          <path fill="#FFF" d="M81.053 36h13.263v56h-13.263z"/>
          <defs>
            <linearGradient id="next_grad" x1="77" y1="67.5" x2="105.5" y2="108" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF"/>
              <stop offset="1" stopColor="#FFF" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    case 'redux':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#764ABC" d="M57.6 15.6c-7.9 3.5-12.7 10.9-12 18.5.5 5.5 3.7 10 9 12.8 4.4 2.3 8.1 2.8 17.6 2.3 9-.5 10.8-.3 15.1 1.7 8.3 3.9 11.2 12.2 6.7 19.3-3 4.7-8 7.3-15.6 8-11.8 1.1-23.7-4.1-28.7-12.5-2.2-3.8-2.6-4.1-4.7-4.1-3 0-5 2.1-5 5.2 0 2.3.5 3.3 3.1 7.2 8.3 12.4 23.4 18.7 39.4 16.4 13.9-2 23.8-10.4 25-21.2.7-6.2-1.3-12.6-5.3-16.7-5-5.2-11.1-7.2-22.7-7.4-10.9-.2-12.2-.4-16.7-2.6-7-3.5-9.2-10-5.1-15.8 2.8-3.9 7.8-6.1 14.7-6.5 9-.4 17 2.4 22 7.7 2.1 2.2 3.1 2.8 5.1 2.8 3.1 0 5.1-2 5.1-5.1 0-2.5-.9-4-3.6-6.9-8.4-9-21.9-12.7-34.9-9.7z"/>
          <path fill="#764ABC" d="M29.6 42.1c-13.6 7.4-20 23.4-15 37.4 3.9 10.9 13.3 17.6 24.8 17.6 8 0 14.8-3.1 20-9.2 3.9-4.5 4.3-5.6 3-8.1-1.3-2.6-3.8-3.6-6.8-2.6-2.1.7-4.2 3.2-6.5 7.6-5.4 10.3-17.6 14.2-27.7 8.8-9.4-5-13-16.6-8.2-26.6 2.7-5.5 7.6-9.1 14.5-10.7 2.6-.6 3.8-1.5 4.5-3.5 1.1-3.2-.2-5.7-3.5-6.8-1.8-.7-6.6-.1-9.1.9z"/>
          <path fill="#764ABC" d="M96 61.1c-2.8.5-4.8 2.3-5.2 4.6-.3 1.9.4 3.4 3 7 7.7 10.8 5 25.2-6.1 32.5-9.6 6.3-22.3 4.1-29.2-5.1-2.9-3.9-4-4.6-6.6-4.2-3.1.5-4.8 2.7-4.4 5.7.3 2.1 1.3 3.6 4.7 7.6 11.2 13 30.6 15 44.2 4.5 12.3-9.5 15.6-26.8 7.5-40-2.4-3.9-4.8-6.9-5.5-7.3-1.1-.6-1.6-.7-2.4-.3z"/>
        </svg>
      )
    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#06B6D4" d="M64 24c-16 0-26.7 8-32 24 6.4-9.6 14.4-12.8 24-9.6 5.5 1.8 9.4 5.8 13.8 10.2C76.9 56 86.8 66 106.7 66c16 0 26.7-8 32-24-6.4 9.6-14.4 12.8-24 9.6-5.5-1.8-9.4-5.8-13.8-10.2C93.8 34 83.9 24 64 24zm-32 42c-16 0-26.7 8-32 24 6.4-9.6 14.4-12.8 24-9.6 5.5 1.8 9.4 5.8 13.8 10.2C44.9 98 54.8 108 74.7 108c16 0 26.7-8 32-24-6.4 9.6-14.4 12.8-24 9.6-5.5-1.8-9.4-5.8-13.8-10.2C61.8 76 51.9 66 32 66z" transform="scale(0.8) translate(16, 16)"/>
        </svg>
      )
    case 'gsap':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="24" fill="#88CE02"/>
          <text x="64" y="80" fill="#000" fontSize="52" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">GSAP</text>
        </svg>
      )
    case 'framermotion':
    case 'framer':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#0055FF" d="M0 0h64v64H0zM64 0h64v64H64zM0 64h64v64H0z"/>
          <path fill="#0055FF" d="M64 64l64 64H64z"/>
        </svg>
      )
    case 'sass':
    case 'scss':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#CC6699" d="M64.004 0C28.654 0 0 28.653 0 64.004 0 99.346 28.654 128 64.004 128c35.343 0 63.996-28.654 63.996-63.996C128 28.653 99.347 0 64.004 0zm38.163 76.544c-.792 5.093-6.953 8.358-12.784 5.922-10.575-4.417-20.985 7.42-32.222 2.686-5.83-2.458-3.003-8.817 2.05-8.91 7.234-.131 16.31 4.542 20.999 1.157 4.093-2.955-4.636-9.61-9.97-10.428-10.584-1.624-17.65 7.288-25.076 1.488-4.664-3.642 1.637-9.59 7.747-8.16 6.046 1.417 12.012 5.05 17.585.838 4.298-3.25-3.098-8.258-8.243-7.85-8.775.696-12.35 11.233-21.57 6.438-4.673-2.433-.314-7.556 4.793-7.391 7.026.227 10.354-6.425 1.543-9.544-7.616-2.695-15.534 3.73-19.34 9.978-5.328 8.747-3.79 20.356 2.894 27.697 7.054 7.749 18.98 9.537 28.272 5.073 6.09-2.924 10.155.073 14.544 2.87 6.136 3.91 13.916 2.378 18.067-3.056 4.67-6.113 4.418-13.887-2.113-16.788z"/>
        </svg>
      )
    case 'bootstrap':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#7952B3" d="M16 0h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V16C0 7.2 7.2 0 16 0z"/>
          <path fill="#FFF" d="M37.5 28.5h27.4c10.4 0 16.9 4.9 16.9 12.9 0 5.4-3.1 9.9-8.4 11.7v.3c6.8 1.4 11.1 6.5 11.1 13.4 0 9.4-7.6 14.7-18.8 14.7H37.5V28.5zm14 20.7h11.9c4.4 0 7.2-1.9 7.2-5.1 0-3.3-2.8-5-7.2-5H51.5v10.1zm0 21.9h13.2c4.8 0 7.9-2.1 7.9-5.6 0-3.5-3.1-5.4-7.9-5.4H51.5v11z"/>
        </svg>
      )
    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#5FA04E" d="M64 8.6L14 37.5v57.8l50 28.9 50-28.9V37.5L64 8.6zm37.3 80.7L64 109.8 26.7 89.3V48.3L64 27.8l37.3 20.5v41z"/>
          <path fill="#5FA04E" d="M64 45.4c-12 0-14.8 5.6-14.8 10.6 0 9.8 18.5 7.1 18.5 17.5 0 4.2-3.2 6.8-8.2 6.8-7.4 0-11.2-4.1-11.9-9.6l-8.4 2.1c1.5 10 9.1 14.8 20.3 14.8 11.5 0 16.6-5.8 16.6-14.1 0-10.7-18.4-8-18.4-16.7 0-3.5 2.8-5.7 7.2-5.7 5.7 0 9.4 2.8 10.4 7.6l8.3-2.1c-1.8-8.5-8.5-11.2-19.6-11.2z"/>
        </svg>
      )
    case 'nestjs':
    case 'nest':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#EA284E" d="M116.5 35.1c-1.7-1.3-4.1-.8-5.3.8L93.7 59.4c-1.1 1.5-3.3 1.8-4.7.7L71.4 46.2c-1.4-1.1-1.6-3.1-.5-4.5l14.4-18.8c1.2-1.6.9-3.9-.7-5.1-1.6-1.2-3.9-.9-5.1.7L65 37.5c-1.1 1.5-3.3 1.8-4.7.7L42.7 24.3c-1.4-1.1-1.6-3.1-.5-4.5L56.7 1c1.2-1.6.9-3.9-.7-5.1S52.1-5 50.9-3.4L33.3 19.5c-1.1 1.5-3.3 1.8-4.7.7L11.5 6.3C9.9 5.1 7.6 5.4 6.4 7S5.5 10.9 7.1 12.1l17.1 14.1c1.4 1.1 1.6 3.1.5 4.5L7.2 53.6c-1.2 1.6-.9 3.9.7 5.1 1.6 1.2 3.9.9 5.1-.7l14.4-18.8c1.1-1.5 3.3-1.8 4.7-.7l17.6 13.9c1.4 1.1 1.6 3.1.5 4.5L32.7 79.8c-1.2 1.6-.9 3.9.7 5.1 1.6 1.2 3.9.9 5.1-.7L56 61.3c1.1-1.5 3.3-1.8 4.7-.7l17.6 13.9c1.4 1.1 1.6 3.1.5 4.5L61.3 102c-1.2 1.6-.9 3.9.7 5.1 1.6 1.2 3.9.9 5.1-.7l20.4-26.6c1.1-1.5 3.3-1.8 4.7-.7l17.6 13.9c1.4 1.1 1.6 3.1.5 4.5L92.8 121c-1.2 1.6-.9 3.9.7 5.1 1.6 1.2 3.9.9 5.1-.7l20.4-26.6c1.1-1.5 3.3-1.8 4.7-.7l17.6 13.9c1.6 1.2 3.9.9 5.1-.7 1.2-1.6.9-3.9-.7-5.1l-29.2-23.1z" transform="scale(0.85) translate(10, 10)"/>
        </svg>
      )
    case 'expressjs':
    case 'express':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="20" fill="#259D96"/>
          <text x="64" y="78" fill="#FFF" fontSize="38" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ex</text>
        </svg>
      )
    case 'mysql':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#00618A" d="M62.6 30.6c-4.9.4-12.7 2.6-14.7 9.8-2 7.1.6 12 4 14.1 3.4 2.1 7.2 2.3 9.4 1 2.2-1.3 3.6-3.8 3.4-6.8-.2-3-2.1-5.1-4.8-5.3-2.7-.2-5.3 1.5-5.9 3.9l-4.7-1.1c1.2-4.5 5.5-7.4 10.7-7.1 5.2.3 9.1 3.8 9.5 9.1.4 5.3-2.1 9.8-6.1 12.1-4 2.3-9.5 1.9-14.2-.9-4.7-2.8-8-8.9-5.5-17.7 2.5-8.8 11-13.8 19.8-14.5l-1 4.4z"/>
          <path fill="#E48E00" d="M112.5 70.3c-2.4 15.6-13.5 28.1-28.7 32.3-15.2 4.2-31.2-.5-41.2-12.1 10.7 2.8 22.4.3 30.8-6.8 8.4-7.1 12.1-18.3 9.8-29.1 14 3.7 24 14.8 29.3 15.7z"/>
          <path fill="#00618A" d="M43.7 91.5C31.5 83.9 24.3 70 25.8 55.7c1.5-14.3 10.9-26.3 24.4-30.9-1.9 10.9 2 22.1 10 29.3 8 7.2 19.5 9.4 29.7 5.8-5.2 14.4-17.4 24.8-32.4 27.6-4.5.8-9.1.8-13.8-2z"/>
        </svg>
      )
    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#336791" d="M64 7C35.3 7 18 20.6 18 43.3c0 10.4 3.7 19.2 10.7 25.5-1.4 7.5-1 17.6 5.3 27.6 4.8 7.5 12.4 13.2 21.5 15.9l3.4-10.8c-6.4-2-11.6-5.8-14.6-10.5-2.8-4.4-3.9-9.1-3.8-13.3 5.7 2.2 12.2 3.4 19.4 3.6l-.4 15.2c-.1 3.2 2.4 5.8 5.5 5.9h.2c3 0 5.6-2.4 5.7-5.5l.4-15.8c3.8-.4 7.3-1.1 10.6-2.2 2.4 7.5 8.8 12.3 17.8 12.3 4.8 0 9.1-1.3 12.9-3.8l-6.3-9.5c-1.9 1.3-4.1 1.9-6.6 1.9-4.8 0-7.1-2.4-7.7-7.5 11.4-7 18-17.2 18-29C110 20.6 92.7 7 64 7Zm18 59.2c-5.4 2.6-12 3.9-19.6 3.9-20.7 0-33-10-33-26.8 0-16.2 12.6-24.9 34.6-24.9 22 0 34.6 8.7 34.6 24.9 0 7.1-2.6 13.3-7.5 18.1-1.8-6.2-5.5-10.3-10.4-10.3-5.6 0-9.5 4.5-9.5 10.8 0 4.5 2.1 8.1 5.7 9.8l5.1-5.5Zm-1.3-5.8c1.1 0 2.1 1.7 2.7 4.6-1.4.5-2.8.9-4.3 1.3-1.3-.8-2-2.2-2-4.3 0-1 .3-1.6.6-1.6h3Z"/>
        </svg>
      )
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#3776AB" d="M63 8c-27 0-25.3 11.7-25.3 11.7V32h25.8v4H27.4S10 34 10 61.5 25.2 88 25.2 88h9V75.4s-.5-15.2 15-15.2h25.6s14.4.2 14.4-14V22.5S91.4 8 63 8Zm-14.2 8.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Z"/>
          <path fill="#FFD43B" d="M65 120c27 0 25.3-11.7 25.3-11.7V96H64.5v-4h36.1S118 94 118 66.5 102.8 40 102.8 40h-9v12.6s.5 15.2-15 15.2H53.2s-14.4-.2-14.4 14v23.7S36.6 120 65 120Zm14.2-8.2a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6Z"/>
        </svg>
      )
    case 'gemini':
    case 'googlegemini':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <defs><linearGradient id="gemini-gradient" x1="16" y1="112" x2="112" y2="16" gradientUnits="userSpaceOnUse"><stop stopColor="#1C7DFF"/><stop offset=".48" stopColor="#9B72FF"/><stop offset="1" stopColor="#D96570"/></linearGradient></defs>
          <path fill="url(#gemini-gradient)" d="M64 8c4.3 30.2 25.8 51.7 56 56-30.2 4.3-51.7 25.8-56 56-4.3-30.2-25.8-51.7-56-56 30.2-4.3 51.7-25.8 56-56Z"/>
        </svg>
      )
    case 'convex':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <circle cx="64" cy="64" r="60" fill="#F3B01C"/>
          <path fill="#EE342F" d="M61 22c18 0 33.6 10.7 40.5 26.1L78.8 61.2A19 19 0 0 0 61 49.2c-10.5 0-19 8.5-19 19S50.5 87 61 87c7.7 0 14.4-4.6 17.3-11.3l23 13.3A45 45 0 1 1 61 22Z"/>
          <path fill="#8D2676" d="m78.8 61.2 22.7-13.1a45.3 45.3 0 0 1-.2 40.9l-23-13.3a19 19 0 0 0 .5-14.5Z"/>
        </svg>
      )
    case 'supabase':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <defs><linearGradient id="supabase-gradient" x1="72" y1="10" x2="72" y2="118" gradientUnits="userSpaceOnUse"><stop stopColor="#3ECF8E"/><stop offset="1" stopColor="#3ECF8E" stopOpacity=".45"/></linearGradient></defs>
          <path fill="url(#supabase-gradient)" d="M70.6 8.8c2.2-3.7 7.9-2.2 7.9 2.1v43.5h35.2c4 0 6 4.8 3.2 7.6l-57.7 57.2c-3.1 3.1-8.4.2-7.4-4.1l9.7-41.5H24.3c-3.9 0-6-4.4-3.7-7.5l50-57.3Z"/>
        </svg>
      )
    case 'threejs':
    case 'three':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path d="M17 13 111 37 43 112 17 13Z" fill="none" stroke="#FFF" strokeWidth="7" strokeLinejoin="round"/>
          <path d="m40 45 47 12-34 38-13-50Zm0 0 14 50m33-38L54 95M40 45l47 12" fill="none" stroke="#FFF" strokeWidth="6" strokeLinejoin="round"/>
        </svg>
      )
    case 'mongodb':
    case 'mongo':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#47A248" d="M64 4c-2.8 0-5.1 2.3-5.1 5.1v15.2C40.6 28.5 26 44.5 26 64c0 19.5 14.6 35.5 32.9 39.7v15.2c0 2.8 2.3 5.1 5.1 5.1s5.1-2.3 5.1-5.1v-15.2C87.4 99.5 102 83.5 102 64c0-19.5-14.6-35.5-32.9-39.7V9.1C69.1 6.3 66.8 4 64 4zm0 20.3c14.1 0 25.5 17.8 25.5 39.7S78.1 103.7 64 103.7 38.5 85.9 38.5 64 49.9 24.3 64 24.3z"/>
          <path fill="#47A248" d="M64 36c-2.2 0-4 1.8-4 4v48c0 2.2 1.8 4 4 4s4-1.8 4-4V40c0-2.2-1.8-4-4-4z"/>
        </svg>
      )
    case 'prisma':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#2D3748" d="M102.5 98.3L67.1 18.2c-1.4-3.2-5.9-3.2-7.3 0L24.4 98.3c-1.5 3.3 1.5 6.9 5 5.8l34-10.7 34.1 10.7c3.5 1.1 6.5-2.5 5-5.8zM63.5 82.2L39.8 89.6l23.7-53.6v46.2z"/>
        </svg>
      )
    case 'typeorm':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="20" fill="#E53535"/>
          <path fill="#FFF" d="M30 40h68v14H71v44H57V54H30V40z"/>
        </svg>
      )
    case 'vite':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <defs>
            <linearGradient id="vite_grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vite_grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFEA83" />
              <stop offset="8%" stopColor="#FFDD35" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>
          </defs>
          <path fill="url(#vite_grad1)" d="M122.9 19.3L67.7 118.8c-.8 1.4-2.7 1.4-3.5 0L8.9 19.3c-.9-1.6.5-3.5 2.3-3.1l52.6 10.6c.4.1.8.1 1.2 0l55.6-10.6c1.8-.4 3.2 1.5 2.3 3.1z"/>
          <path fill="url(#vite_grad2)" d="M84.7 7.7L46.9 23.3c-.4.2-.7.6-.7 1l-3.3 54.4c-.1 1.3 1.3 2.1 2.3 1.3l12.4-9.8c.4-.3.9-.4 1.4-.2l11 4.7c1.1.5 2.4-.4 2.2-1.7l-4.5-23.7 18.2-12.7c1.1-.8.8-2.6-.5-2.9L73 31.8c-.4-.1-.8-.4-.9-.8L84.7 7.7z"/>
        </svg>
      )
    case 'shadcn':
    case 'shadcnui':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="24" fill="#09090B"/>
          <path d="M38 90L90 38" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" />
          <path d="M38 38L64 38L38 64Z" fill="#FFFFFF"/>
        </svg>
      )
    case 'responsivedesign':
    case 'responsive':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="24" fill="#0F172A"/>
          <rect x="20" y="28" width="56" height="42" rx="4" fill="none" stroke="#38BDF8" strokeWidth="6"/>
          <path d="M48 70v16M36 86h24" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round"/>
          <rect x="76" y="44" width="32" height="56" rx="6" fill="#1E293B" stroke="#38BDF8" strokeWidth="6"/>
          <circle cx="92" cy="92" r="3" fill="#38BDF8"/>
        </svg>
      )
    case 'uxui':
    case 'uiux':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="24" fill="#4F46E5"/>
          <rect x="24" y="24" width="36" height="36" rx="8" stroke="#FFF" strokeWidth="6" fill="none"/>
          <rect x="68" y="24" width="36" height="36" rx="8" fill="#818CF8"/>
          <circle cx="42" cy="86" r="18" stroke="#FFF" strokeWidth="6" fill="none"/>
          <path d="M68 86h36M86 68v36" stroke="#818CF8" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      )
    case 'postman':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <circle cx="64" cy="64" r="64" fill="#FF6C37"/>
          <path fill="#FFF" d="M92.2 40.8c-1.4-1.4-3.7-1.4-5.1 0L59.3 68.6l-13.4-13.4c-1.4-1.4-3.7-1.4-5.1 0s-1.4 3.7 0 5.1l15.9 15.9c1.4 1.4 3.7 1.4 5.1 0l30.4-30.3c1.4-1.4 1.4-3.7 0-5.1z"/>
          <path fill="#FFF" d="M64 24c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 72c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"/>
        </svg>
      )
    case 'gitgithub':
    case 'github':
    case 'git':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#F05032" d="M122.7 57.3L70.7 5.3c-3-3-8-3-11 0L47.3 17.7l14.8 14.8c3.3-1.1 7.1-.4 9.7 2.2 2.7 2.7 3.3 6.6 2.1 9.9l14.2 14.2c3.3-1.2 7.2-.5 9.9 2.1 3.7 3.7 3.7 9.8 0 13.5-3.7 3.7-9.8 3.7-13.5 0-2.8-2.8-3.4-6.9-2-10.2L68.8 50.5v28.8c.8.4 1.5 1 2.1 1.7 3.7 3.7 3.7 9.8 0 13.5-3.7 3.7-9.8 3.7-13.5 0-3.7-3.7-3.7-9.8 0-13.5.8-.8 1.8-1.4 2.8-1.8V49.9c-1-.4-2-.9-2.8-1.8-2.7-2.7-3.4-6.6-2.1-9.9L40.4 24.6 5.3 59.7c-3 3-3 8 0 11l52 52c3 3 8 3 11 0l54.4-54.4c3-3 3-8 0-11z"/>
        </svg>
      )
    case 'docker':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#2496ED" d="M123.6 53.6c-2.8-1.9-8.4-2.8-14-1.2-1.9-5-5.9-8.7-10.9-10.5L96.3 41v12.3h-9.9V41H76.5v12.3h-9.9V41H56.7v12.3h-9.9V41H36.9v12.3H27V41h-9.9v12.3H7.2V41H0v26.7C0 89.2 17.5 107 39.1 107c33 0 60.1-20.7 65.6-49 6.4.7 13.9-.9 18.9-4.4z"/>
        </svg>
      )
    case 'aws':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#FF9900" d="M98.6 90.9c-15.6 11.5-38.4 17.6-58.1 17.6-27.7 0-52.6-10.3-71.3-27.6-1.5-1.4-.2-3.3 1.6-2.2 20.3 11.9 44.5 19 69.7 19 17.5 0 38.3-4.7 56.4-13.6 2.7-1.3 4.9 1.9 1.7 6.8z"/>
          <path fill="#FF9900" d="M104.9 83.3c-1.9-2.5-12.7-3-19.1-.8-1.9.7-2.2-1.2-.5-2.4 11-7.7 28.5-5.5 30.6-2.8 2.1 2.7-2 20.6-12.5 29.2-1.7 1.4-3.3.6-2.5-1.3 2.6-6.1 5.9-19.4 4-21.9z"/>
          <path fill="#FFF" d="M37.7 41.5c0-4.1.8-6.9 2.5-8.5 1.7-1.6 4.4-2.4 8.2-2.4 4.5 0 8.1.9 10.7 2.8 2.6 1.9 4.1 4.7 4.5 8.5l-6.8.5c-.3-2.3-1.1-3.9-2.3-4.8-1.2-.9-3.2-1.4-5.9-1.4-2.5 0-4.4.5-5.6 1.4-1.2.9-1.8 2.2-1.8 3.9 0 1.5.5 2.6 1.6 3.4 1.1.8 3.2 1.5 6.4 2.1l4.8 1c4.5.9 7.7 2.2 9.7 4 2 1.8 3 4.4 3 7.8 0 4.4-1.5 7.7-4.4 9.9-2.9 2.2-7.2 3.3-12.8 3.3-4.9 0-8.9-1-11.9-3.1-3-2.1-4.7-5.3-5.1-9.7l7.2-.6c.4 2.8 1.4 4.8 3 6 1.6 1.2 4 1.8 7.1 1.8 2.8 0 4.8-.5 6.1-1.5 1.3-1 1.9-2.3 1.9-4.1 0-1.6-.6-2.8-1.8-3.7-1.2-.9-3.3-1.6-6.4-2.2l-4.7-1c-4.4-.9-7.5-2.2-9.4-3.9-1.9-1.8-2.9-4.3-2.9-7.6z"/>
        </svg>
      )
    case 'html5':
    case 'html':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#E44D26" d="M18.6 114.9L8 0h112l-10.6 114.9L63.9 128z"/>
          <path fill="#F16529" d="M64 117.9l36.7-10.2 9.2-100.1H64z"/>
          <path fill="#EBEBEB" d="M64 52.8H45.2l-1.3-14.7H64V24H27.3l4 43.6H64zM64 91.6l-.2.1-15.5-4.2-1-11.2H32.5l1.9 21.7 29.4 8.2.2.1z"/>
          <path fill="#FFF" d="M63.9 52.8h18.7l-1.8 19.6-16.9 4.6v14.4l29.4-8.1 3.4-38.3H63.9zM63.9 24v14.1h38.7l1.3-14.1z"/>
        </svg>
      )
    case 'css3':
    case 'css':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#264DE4" d="M18.6 114.9L8 0h112l-10.6 114.9L63.9 128z"/>
          <path fill="#2965F1" d="M64 117.9l36.7-10.2 9.2-100.1H64z"/>
          <path fill="#EBEBEB" d="M64 52.8H45.2l-1.3-14.7H64V24H27.3l4 43.6H64zM64 91.6l-.2.1-15.5-4.2-1-11.2H32.5l1.9 21.7 29.4 8.2.2.1z"/>
          <path fill="#FFF" d="M63.9 52.8h18.7l-1.8 19.6-16.9 4.6v14.4l29.4-8.1 3.4-38.3H63.9zM63.9 24v14.1h38.7l1.3-14.1z"/>
        </svg>
      )
    case 'n8n':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="24" fill="#EA4B71"/>
          <circle cx="40" cy="64" r="14" fill="#FFF"/>
          <circle cx="88" cy="40" r="14" fill="#FFF"/>
          <circle cx="88" cy="88" r="14" fill="#FFF"/>
          <path d="M40 64L88 40M40 64L88 88" stroke="#FFF" strokeWidth="8" strokeLinecap="round"/>
        </svg>
      )
    case 'langchainlanggraph':
    case 'langchain':
    case 'langgraph':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="24" fill="#1C3C3C"/>
          <circle cx="40" cy="44" r="12" fill="#10B981"/>
          <circle cx="88" cy="44" r="12" fill="#34D399"/>
          <circle cx="64" cy="84" r="12" fill="#059669"/>
          <path d="M40 44L88 44L64 84Z" stroke="#34D399" strokeWidth="6" fill="none" strokeLinejoin="round"/>
        </svg>
      )
    case 'apirestrestfulapis':
    case 'apirest':
    case 'restfulapis':
    case 'apirestfulapis':
    case 'restapis':
    case 'restapi':
    case 'rest':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="20" fill="#0EA5E9"/>
          <text x="64" y="78" fill="#FFF" fontSize="34" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">REST</text>
        </svg>
      )
    case 'graphql':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#E10098" d="M64 6.8L14 35.7v57.8l50 28.9 50-28.9V35.7L64 6.8zm37.3 80.7L64 108 26.7 87.5V46.5L64 26l37.3 20.5v41z"/>
          <circle cx="64" cy="26" r="10" fill="#E10098"/>
          <circle cx="26.7" cy="46.5" r="10" fill="#E10098"/>
          <circle cx="101.3" cy="46.5" r="10" fill="#E10098"/>
          <circle cx="26.7" cy="87.5" r="10" fill="#E10098"/>
          <circle cx="101.3" cy="87.5" r="10" fill="#E10098"/>
          <circle cx="64" cy="108" r="10" fill="#E10098"/>
        </svg>
      )
    case 'figma':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#F24E1E" d="M42 128c11.6 0 21-9.4 21-21V86H42c-11.6 0-21 9.4-21 21s9.4 21 21 21z"/>
          <path fill="#A259FF" d="M21 64c0-11.6 9.4-21 21-21h21v42H42c-11.6 0-21-9.4-21-21z"/>
          <path fill="#F24E1E" d="M21 21c0-11.6 9.4-21 21-21h21v42H42c-11.6 0-21-9.4-21-21z"/>
          <path fill="#FF7262" d="M64 0h21c11.6 0 21 9.4 21 21s-9.4 21-21 21H64V0z"/>
          <path fill="#1ABCFE" d="M106 64c0 11.6-9.4 21-21 21S64 75.6 64 64s9.4-21 21-21 21 9.4 21 21z"/>
        </svg>
      )
    case 'vercel':
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <path fill="#FFF" d="M64 16.5L124.5 111.5H3.5L64 16.5z"/>
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 128 128" className={className} style={style}>
          <rect width="128" height="128" rx="20" fill="#8B5CF6"/>
          <text x="64" y="78" fill="#FFF" fontSize="36" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            {name.substring(0, 2).toUpperCase()}
          </text>
        </svg>
      )
  }
}
