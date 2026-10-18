import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "A personal website with an ambient Game of Life background.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
