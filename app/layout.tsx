import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["cyrillic"],
  // subsets: [
  //   "cyrillic" |
  //     "cyrillic-ext" |
  //     "greek" |
  //     "greek-ext" |
  //     "latin" |
  //     "latin-ext" |
  //     "vietnamese",
  // ],
});

export const metadata: Metadata = {
  title: "FanFam",
  description: "The FanFam Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
