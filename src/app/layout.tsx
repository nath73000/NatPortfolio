import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nathan Claret | Portfolio",
  description:
    "Personal portfolio with home, experience, education, and projects sorted by date.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="site-shell">
          <Navbar />
          <main className="site-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
