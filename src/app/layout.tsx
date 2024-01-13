import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import Provider from '@/app/context/client-provider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import '../assets/styles/globals.css'

const openSans = OpenSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koaris Appointment',
  description: 'Makes and follow yours appointments.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt-BR">
      <body className={`${openSans.className} flex justify-center`}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  )
}
