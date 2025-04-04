import type React from "react"
import "@/app/globals.css"
import { ThemeProviderCustom } from "@/components/theme-provider-custom"
import { ThemeProvider } from "@/components/theme-provider"
import { CyclePhase } from "@/types/cycle-phases"
import { Chatbot } from "@/components/chatbot"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ThemeProviderCustom defaultPhase={CyclePhase.MENSTRUAL}>
            {children}
            <Chatbot />
          </ThemeProviderCustom>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
