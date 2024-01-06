import { Form, Button, TextInput, Text } from '@koaris/bloom-ui'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { GrLinkNext } from 'react-icons/gr'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Mínimo 3 letras.' })
    .max(20)
    .regex(/^[a-z\\-]+$/i, {
      message: 'Apenas letras e hífens permitidos.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form
        className="flex md:flex-row gap-2 flex-colmt-4 bg-neutral-100 text-neutral-800 border-2 border-s-neutral-200"
        onSubmit={
          handleSubmit(handleClaimUsername) as SubmitHandler<FieldValues>
        }
      >
        <TextInput
          prefix="koaris.com/"
          placeholder="seu-usuário"
          error={false}
          type={'text'}
          {...register('username')}
        />
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
      <div className="annotation mt-2">
        <Text color="neutral-300" size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome de usuário que deseja.'}
        </Text>
      </div>
    </>
  )
}
