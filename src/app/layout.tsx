import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang=location.pathname.split('/')[1]==='es'?'es':'en'`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a101e] text-[#e2e8f0] relative">
        {children}
        <Toaster
          position="bottom-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#090d16",
              color: "#ffffff",
              border: "1px solid #1e293b",
              borderRadius: "16px",
              padding: "14px 18px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)",
            },
          }}
        />
      </body>
    </html>
  );
}
