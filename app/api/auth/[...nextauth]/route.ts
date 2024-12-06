import prisma from '@/prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials' // Correct import
import bcrypt from 'bcryptjs' // Import bcrypt for password hashing
import { Role } from '@/types/next-auth'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password ..',
        },
      },
      async authorize(credentials, req) {
        // Validate email and password input
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        // If user not found, return null
        if (!user) {
          return null
        }

        // Compare the provided password with the stored hashed password
        const isValid = await bcrypt.compare(
          credentials.password,
          user.password!,
        )

        // Return user object if valid, else null
        return isValid ? user : null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt', // Use JWT-based sessions
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role // Add role to JWT
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string // Add user ID
      session.user.role = token.role as Role // Add role
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
