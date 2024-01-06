import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import '../assets/styles/globals.css'

const openSans = OpenSans({ subsets: ['latin'] })

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
      <body className={`${openSans.className} flex justify-center`}>
        {children}
      </body>
    </html>
  )
}
