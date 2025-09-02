import type { Metadata } from "next"
import "./global-clean.css"

export const metadata: Metadata = {
  title: 'Thisara Senadeera - Portfolio',
  description: 'Full-stack developer and cybersecurity enthusiast',
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
        {children}
      </body>
    </html>
  )
}