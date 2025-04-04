import type React from "react"
import "@/app/globals.css"
import { ThemeProviderCustom } from "@/components/theme-provider-custom"
import { ThemeProvider } from "../components/theme-provider-custom"
import { CyclePhase } from "@/types/cycle-phases"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ThemeProviderCustom defaultPhase={CyclePhase.MENSTRUAL}>{children}</ThemeProviderCustom>
        </ThemeProvider>
      </body>
    </html>
  )
}

