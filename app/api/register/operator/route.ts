import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { RegisterOperatorSchema } from '@/app/validationSchema'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validation = RegisterOperatorSchema.safeParse(body)
    if (!validation.success) {
      const errors = validation.error.errors.map((err) => ({
        field: err.path[0],
        message: err.message,
      }))
      return NextResponse.json({ errors }, { status: 400 })
    }

    // Destructure the body
    const { email, password, name } = body

    // Check for missing fields
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'All fields (email, password, name) are required.' },
        { status: 400 },
      )
    }

    // Check if operator already exists
    const operatorExists = await prisma.operator.findUnique({
      where: { email },
    })
    if (operatorExists) {
      return NextResponse.json(
        { error: 'Operator already exists' },
        { status: 400 },
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const newOperator = await prisma.operator.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    return NextResponse.json({ message: 'Operator registered successfully' })
  } catch (error) {
    console.error('Error in operator registration:', error)
    return NextResponse.json(
      { error: 'Failed to register operator. Please try again later.' },
      { status: 500 },
    )
  }
}
