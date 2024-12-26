import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SmoothScrollProvider } from "@/providers/smooth-scroll"
import { ScrollAnimations } from "@/components/scroll-animations"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ubytování Na Věčnosti",
  description: "Objevte klidné ubytování v malebné lokalitě Biskupic.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className={cn("min-h-screen bg-background antialiased", inter.className)}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
