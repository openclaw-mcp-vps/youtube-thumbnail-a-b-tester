import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThumbnailAB — A/B Test YouTube Thumbnails Automatically',
  description: 'Rotate thumbnails on a schedule and track which drives more clicks, views, and engagement. Built for YouTubers who want data-driven growth.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0de3ef41-93d8-40d5-ace7-bdadee5954df"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
