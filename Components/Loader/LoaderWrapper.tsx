// Components/Loader/LoaderWrapper.tsx
"use client"

import { useEffect, useState } from "react"
import Loader from "."

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Always show loader for 4 seconds
    const timer = setTimeout(() => setLoading(false), 5000)

    return () => clearTimeout(timer)
  }, [])

  return <>{loading ? <Loader /> : children}</>
}
