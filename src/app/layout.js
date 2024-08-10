import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import GA from "@/components/GA"
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zipzy - Free Unlimited File Converter",
  description: `Introducing Zipzy, the ultimate multimedia conversion powerhouse that
        empowers you to transform images, audio files, and videos with
        unprecedented freedom, all at absolutely no cost! Say goodbye to
        limitations and hello to limitless file conversions.`,
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/Zipzy.ico" sizes="any" />
      </head>
      <GA GA_MEASUREMENT_ID="G-JDY8F4XDDX" />
      <meta
        name="google-site-verification"
        content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU"
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
        >
          <Navbar />
          <Toaster />
          <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
