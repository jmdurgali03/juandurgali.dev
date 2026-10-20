import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101312",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://juandurgali.dev"),
  title: {
    default: "Juan Martín Durgali | Full Stack Developer",
    template: "%s | Juan Martín Durgali",
  },
  description: "Portfolio de Juan Martín Durgali, desarrollador Full Stack especializado en aplicaciones web, automatización e inteligencia artificial.",
  openGraph: {
    type: "website",
    siteName: "Juan Martín Durgali",
    title: "Juan Martín Durgali | Full Stack Developer",
    description: "Desarrollo de aplicaciones web, automatización e inteligencia artificial.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Martín Durgali | Full Stack Developer",
    description: "Desarrollo de aplicaciones web, automatización e inteligencia artificial.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=location.pathname.split('/')[1]==='es'?'es':'en'`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090d16] text-[#e2e8f0] relative">
        {children}
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0c1120",
              color: "#f1f5f9",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              padding: "14px 18px",
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.6)",
            },
          }}
        />
      </body>
    </html>
  );
}
