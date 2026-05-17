import type { Metadata } from "next";
import "./globals.css";

const title = "A7 Fitness Studio Unisex Gym | Best Gym in Erragadda, Hyderabad";
const description =
  "A7 Fitness Studio Unisex Gym in Erragadda, Hyderabad is a premium transformation-focused fitness studio with certified trainers, modern equipment, hygiene-first facilities, spacious workout areas, and flexible timings.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Best gym in Erragadda",
    "Gym near Sanath Nagar",
    "Fitness studio Hyderabad",
    "Personal training Hyderabad",
    "Unisex gym Erragadda",
    "A7 Fitness Studio Unisex Gym",
    "Gym in Vikaspuri Erragadda",
    "Weight loss programs Hyderabad",
    "Strength training Hyderabad"
  ],
  alternates: {
    canonical: "https://a7fitnessstudio.com"
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "A7 Fitness Studio Unisex Gym"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
