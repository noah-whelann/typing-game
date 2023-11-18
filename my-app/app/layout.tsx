import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="nord" lang="en">
      <body className={inter.className}>
        <Provider>
          {/* gives us access to the provider anywhere within the app , specfically for nextauth w/ the app directory*/}
          {children}
        </Provider>
      </body>
    </html>
  );
}
