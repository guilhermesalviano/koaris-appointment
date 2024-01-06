'use client'
import { Heading, Text } from '@koaris/bloom-ui'
import Image from 'next/image'
import previewImage from '../../assets/images/calendar.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <div className="container flex items-center justify-center gap-2 h-screen">
      <div className="hero px-4">
        <Heading tag="h1" size="6xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl" className="py-2">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </div>
      <div className="preview">
        <Image
          src={previewImage}
          alt="Calendário"
          height={400}
          quality={100}
          priority
        />
      </div>
    </div>
  )
}
