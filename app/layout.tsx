import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-geist-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Snehal S. Dikhale | Robotics Researcher",
  description: "Bridging the Sim-to-Real gap for tactile perception and architecting Vision-Language Models for dexterous manipulation. Research in embodied AI and multimodal learning.",
  keywords: ["Embodied AI", "Robotics", "VLM", "Vision-Language Models", "Tactile Perception", "Sim-to-Real", "Multimodal Learning", "Graph Neural Networks", "Action-Conditioned Models"],
  authors: [{ name: "Snehal S. Dikhale" }],
  openGraph: {
    title: "Snehal S. Dikhale | Robotics Researcher",
    description: "Bridging the Sim-to-Real gap for tactile perception and architecting Vision-Language Models for dexterous manipulation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
