import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

// Extend the User object to include the role field
declare module 'next-auth' {
  interface Session {
    user: {
      id: string // Add user id to session
      role: Role // Add role to session
      name?: string
      email?: string
    }
  }

  interface User extends DefaultUser {
    role: Role // Add role to User type
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string // Add user id to token
    role: Role // Add role to token
  }
}

type Role = 'USER' | 'ADMIN' | 'OPERATOR' // Define possible roles
