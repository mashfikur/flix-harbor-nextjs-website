import { Inter } from "next/font/google";
import "./globals.css";

import QueryProvider from "./QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flix Harbor",
  description: "A movie and tv shows collection website",
};

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      <html lang="en" data-theme="light">
        <body className={inter.className}>{children}</body>
      </html>
    </QueryProvider>
  );
}
