import { Metadata } from 'next'
import { App } from '.'
import './globals.css'

export const metadata: Metadata = {
  title: "Aloento's Blog",
  description: "Aloento's Blog",
  keywords: ["Aloento", "Blog"],
  themeColor: "#40526c",
  manifest: "/site.webmanifest",
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <App>{children}</App>
    </html>
  )
}
