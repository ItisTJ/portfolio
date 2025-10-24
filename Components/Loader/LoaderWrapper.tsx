// Components/Loader/LoaderWrapper.tsx
"use client"

import { useEffect, useState } from "react"
import Loader from "."

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hideLoader = () => setLoading(false)

    // Wait until all assets are loaded
    if (document.readyState === "complete") {
      hideLoader()
    } else {
      window.addEventListener("load", hideLoader)
    }

    // Fallback 4s timeout
    const maxTimeout = setTimeout(hideLoader, 4000)

    return () => {
      window.removeEventListener("load", hideLoader)
      clearTimeout(maxTimeout)
    }
  }, [])

  return <>{loading ? <Loader /> : children}</>
}
