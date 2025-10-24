import type { Metadata } from "next"
import "./global-clean.css"
import { useEffect, useState } from "react"
import Loader from "../Components/Loader/Loader"

export const metadata: Metadata = {
  title: 'Thilina Jayasingha - Portfolio',
  description: 'Full-stack developer and cybersecurity enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const [loading, setLoading] = useState(true)

  useEffect(() => {
    let maxTimeout

    // 1. Function to hide loader
    const hideLoader = () => setLoading(false)

    // 2. Wait for all assets to load
    if (document.readyState === "complete") {
      hideLoader()
    } else {
      window.addEventListener("load", hideLoader)
    }

    // 3. Ensure loader disappears after 4 seconds no matter what
    maxTimeout = setTimeout(hideLoader, 4000)

    return () => {
      window.removeEventListener("load", hideLoader)
      clearTimeout(maxTimeout)
    }
  }, [])


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {loading ? <Loader /> : <main>{children}</main>}
      </body>
    </html>
  )
}