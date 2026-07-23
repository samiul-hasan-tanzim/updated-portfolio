import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Vega — Elite Software Engineer",
  description: "Portfolio of Nova Vega, an elite software engineer building extraordinary interfaces from the future.",
  openGraph: {
    title: "Nova Vega — Elite Software Engineer",
    description: "Portfolio of Nova Vega, an elite software engineer building extraordinary interfaces from the future.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
