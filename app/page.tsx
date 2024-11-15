import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div className='m-10 p-4 text-5xl font-bold text-black'>
      hello {session && <span>{session.user!.name}</span>}
    </div>
  )
}
