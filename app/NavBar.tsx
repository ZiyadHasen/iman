'use client'
import { links } from '@/assets/NavLinks'
import { Box, DropdownMenu, Heading, Text } from '@radix-ui/themes'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const currentPath = usePathname()
  const { status, data: session } = useSession()

  // if (session) {
  //   console.log(session.user.role)
  // }

  // Handle loading state
  if (status === 'loading') {
    return <div>Loading...</div> // Render a loading indicator or placeholder
  }

  let userRole = 'ADMIN' // Default role if session is not available

  if (session && session.user && session.user.role) {
    userRole = session.user.role
  }

  const filteredLinks = links.filter((link) => link.roles.includes(userRole))

  return (
    <div className='flex h-full flex-col'>
      <Heading className='flex justify-center border-b py-6 text-center'>
        Admin <br />
        Dashboard
      </Heading>
      <div className='mb-[5rem] mt-4 flex flex-col'>
        {filteredLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classNames(
              'flex w-full items-center justify-start px-6 py-3 transition-colors duration-300',
              'border-b-2',
              {
                'border-gray-400 bg-gray-100 text-zinc-900':
                  link.href === currentPath,
                'border-transparent text-zinc-500 hover:bg-gray-200 hover:text-zinc-800':
                  link.href !== currentPath,
              },
            )}
            aria-label={`Navigate to ${link.label}`}
          >
            <div className='flex items-center justify-center gap-2'>
              <span className='text-2xl'>{link.icon}</span>
              {link.label}
            </div>
          </Link>
        ))}
      </div>
      <div className='mb-auto flex w-full items-center justify-center rounded-md bg-[#29A383] px-4 py-2 text-white shadow-sm transition duration-200 hover:bg-[#008059] focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:ring-offset-2'>
        {status === 'unauthenticated' ? (
          <Link href='/api/auth/signin'>Login</Link>
        ) : (
          <Box>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className='text-xl font-bold text-white'>
                <Text size='2'>{session?.user?.name || 'Loading...'}</Text>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>
                  <Text className='text-gray-500' size='2'>
                    {session?.user?.email || 'Email'}
                  </Text>
                </DropdownMenu.Label>
                <DropdownMenu.Item asChild>
                  <Link href='/api/auth/signout'>Logout</Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Box>
        )}
      </div>
    </div>
  )
}

export default NavBar
