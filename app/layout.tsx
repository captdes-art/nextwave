import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Wave Wellness - Biohacking & Wellness Technologies",
  description: "Discover cutting-edge health and longevity technologies designed to optimize your body and mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
