import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import '../styles/globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koaris Appointment',
  description: 'Makes and follow yours appointments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
