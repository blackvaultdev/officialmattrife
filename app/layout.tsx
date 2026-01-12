import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'Matt Rife Official | Comedy, Tour Dates & Live Shows',
  description:
    'Discover Matt Rife’s live shows, tour schedule, and newest comedy content. Official updates, tickets, and more from the world’s fastest‑rising stand‑up star.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
