import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Resumes",
  description: "MOdern Ai Resume Builder ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
      </html>
      </ClerkProvider>
  );
}
