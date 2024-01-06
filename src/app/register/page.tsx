'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Heading,
  Form,
  Text,
  MultiStep,
  TextInput,
  Input,
  Button,
} from '@koaris/bloom-ui'
import { useForm } from 'react-hook-form'
import { GrLinkNext } from 'react-icons/gr'
import { z } from 'zod'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O username precisa possuir pelo menos 3 letras.' })
    .max(20)
    .regex(/^[a-z\\-]+$/i, {
      message: 'Apenas letras e hífens permitidos.',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa possuir pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormData) {
    console.log(data);
  }

  return (
    <main className="w-96 my-20 mx-4">
      <header className="flex flex-col gap-2 px-4">
        <Heading className="font-bold" size="lg">
          Bem-vindo(a) ao Koaris Appointment!
        </Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </header>
      <Form className="flex flex-col bg-neutral-100 border-neutral-200 mt-6 gap-4" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            prefix="koaris.com/"
            placeholder="seu-usuário"
            type="text"
            error={false}
            {...register('username')}
          />
          {errors.username && (
            <Text className='text-red-500' size='sm'>
                {errors.username?.message}
            </Text>
          )}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <Input
            placeholder="Seu nome"
            type="text"
            error={false}
            className="text-neutral-800"
            {...register('name')}
          />
          {errors.name && (
            <Text className='text-red-500' size='sm'>
                {errors.name?.message}
            </Text>
          )}
        </label>

        <Button
          size="sm"
          type="submit"
          className="w-42"
          disabled={isSubmitting}
        >
          <>
            <span style={{ paddingRight: '1rem' }}>Próximo</span>
            <GrLinkNext />
          </>
        </Button>
      </Form>
      
    </main>
  )
}
