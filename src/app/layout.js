import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flix Harbor",
  description: "A movie and tv shows collection website",
};

// const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        {/* <QueryClientProvider client={queryClient}></QueryClientProvider> */}
        {children}
      </body>
    </html>
  );
}
