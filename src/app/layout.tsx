import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles/globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hey, home! Technical Test',
  description: 'A mortgage calculator built with Next.js and Shadcn library.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
