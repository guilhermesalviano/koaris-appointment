import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, username } = await req.json()

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return NextResponse.json(
      {
        error: 'User already exists',
      },
      {
        status: 400,
      },
    )
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  const response = NextResponse.json({ user }, { status: 201 })

  response.cookies.set({
    name: '@koaris-appointment:userId',
    value: user.id,
    maxAge: 60 * 60 * 24 * 7, // 7 days
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
  })

  return response
}
