import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Wave Wellness - Biohacking & Wellness Technology Reviews",
  description: "Discover the latest biohacking technologies and wellness products. Expert reviews of Oura Ring, WHOOP, Eight Sleep, Muse, and more to optimize your health and performance.",
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
