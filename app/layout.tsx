// app/layout.tsx
import type { Metadata } from "next"
import "./global-clean.css"
import LoaderWrapper from "../Components/Loader/LoaderWrapper" // client-side wrapper

export const metadata: Metadata = {
  title: "Thilina Jayasingha - Portfolio",
  description: "Full-stack developer and cybersecurity enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <LoaderWrapper>{children}</LoaderWrapper>
      </body>
    </html>
  )
}
