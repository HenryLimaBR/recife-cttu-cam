import type { Metadata } from 'next'
import './globals.css'
import { PointsProvider } from '@/contexts/PointsProvider'

export const metadata: Metadata = {
  title: 'Mapa de Câmeras do Recife',
  description: 'Exibe as câmeras disponibilizadas pela CTTU.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <PointsProvider>
          {children}
        </PointsProvider>
      </body>
    </html>
  )
}
