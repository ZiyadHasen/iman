import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { RegisterUserSchema } from '@/app/validationSchema'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validation = RegisterUserSchema.safeParse(body)
    if (!validation.success) {
      const errors = validation.error.errors.map((err) => ({
        field: err.path[0],
        message: err.message,
      }))
      return NextResponse.json({ errors }, { status: 400 })
    }

    // Destructure the body
    const {
      email,
      name,
      phoneNumber1,
      phoneNumber2,
      location,
      payingStyle,
      pledgedAmount,
    } = body

    // Check if user already exists
    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 },
      )
    }

    // Hash password (uncomment when needed)
    // const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        // password: hashedPassword, // Uncomment and use when ready
        name,
        phoneNumber1,
        phoneNumber2,
        location,
        payingStyle,
        pledgedAmount,
      },
    })

    return NextResponse.json({ message: 'User registered successfully' })
  } catch (error) {
    console.error('Error in user registration:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
