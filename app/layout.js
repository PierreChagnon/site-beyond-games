import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Beyond Games - Gamification for Behavioral Sciences",
  description:
    "We transform experimental tasks into engaging experiences, helping researchers collect better data while maintaining scientific rigor.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
