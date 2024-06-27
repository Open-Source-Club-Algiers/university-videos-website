import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "university of algiers 1 videos",
  description:
    "university of algiers 1  faculty of science videos containing descriptions and links for all the majors", //TODO: complete metadata and opengraph
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
