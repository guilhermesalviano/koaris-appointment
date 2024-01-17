'use client'
import { Heading, Box, Text, MultiStep, Button } from '@koaris/bloom-ui'
import { signIn, useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { GrCheckmark, GrLinkNext } from 'react-icons/gr'

export default function ConnectCalendar() {
  const session = useSession()

  const hasAuthError = !!useSearchParams().get('error')
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

  return (
    <main className="w-96 my-20 mx-4">
      <header className="flex flex-col gap-2 px-4">
        <Heading className="font-bold" size="lg">
          Conecte-se sua agenda!
        </Heading>
        <Text>
          Conecte seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </header>
      <Box
        variant="secondary"
        className="flex flex-col bg-neutral-100 border-neutral-200 mt-6 gap-4"
      >
        <Box variant="primary" className="flex items-center gap-5">
          <Text>Google Calendar</Text>
          {isSignedIn ? (
            <Button
              variant="secondary"
              className="float-left w-32"
              disabled={true}
              onClick={() => signIn('google')}
            >
              <>
                <span style={{ paddingRight: '1rem' }}>Conectado</span>
                <GrCheckmark />
              </>
            </Button>
          ) : (
            <Button
              variant="secondary"
              className="float-left w-32"
              onClick={handleConnectCalendar}
            >
              <>
                <span style={{ paddingRight: '1rem' }}>Conectar</span>
                <GrLinkNext className="border-orange-500" />
              </>
            </Button>
          )}
        </Box>

        {hasAuthError && (
          <Text size="sm" color="red-500">
            Erro ao se conectar com o Google Calendar
          </Text>
        )}
        <Button size="sm" type="submit" className="w-42" disabled={!isSignedIn}>
          <>
            <span style={{ paddingRight: '1rem' }}>Próximo passo</span>
            <GrLinkNext />
          </>
        </Button>
      </Box>
    </main>
  )
}
