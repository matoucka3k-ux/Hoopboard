import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hoop Board - Gestion de clubs de basketball',
  description: 'Table de marque en temps réel, stats automatiques, profils gamifiés',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
