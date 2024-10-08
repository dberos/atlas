import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/providers/auth-provider";
import CookiesConsent from "@/components/cookies-consent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ΑΤΛΑΣ",
  description: "Internship Search Website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <AuthProvider>
          <NavBar />
          {children}
          <Toaster />
          <Footer />
          <CookiesConsent />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
