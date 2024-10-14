'use client'
import { Button, Heading } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classNames from 'classnames'
import { IoIosPeople } from 'react-icons/io'
import { RiUserAddFill } from 'react-icons/ri'
import { IoMdHome } from 'react-icons/io'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { IoPersonCircle } from 'react-icons/io5'
import { IoCall } from 'react-icons/io5'
import { FaCommentDollar } from 'react-icons/fa6'
import { MdVerified } from 'react-icons/md'

const NavBar = () => {
  const currentPath = usePathname()
  const links = [
    { label: 'Dashboard', href: '/', icon: <IoMdHome /> },
    { label: 'All Members', href: '/allMembers', icon: <IoIosPeople /> },
    { label: 'Add User', href: '/addUser', icon: <RiUserAddFill /> },
    {
      label: 'Create Pledge',
      href: '/createPledge',
      icon: <FaHandHoldingDollar />,
    },
    { label: 'Pick Operator', href: '/pickOperator', icon: <IoPersonCircle /> },
    { label: 'Schedule Call', href: '/scheduleCall', icon: <IoCall /> },
    { label: 'User Payment', href: '/userPayment', icon: <FaCommentDollar /> },
    { label: 'Approve Payment', href: '/approvePayment', icon: <MdVerified /> },
  ]

  return (
    <nav className='flex h-full flex-col'>
      <Heading className='flex justify-center border-b py-6 text-center'>
        Admin <br />
        Dashboard
      </Heading>
      <div className='mb-[5rem] mt-4 flex flex-col'>
        {' '}
        {/* Make this take remaining space */}
        {links.map((link) => (
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
      <Button className='mt-auto w-full'>
        <Link href='/login'>Login</Link>
      </Button>
    </nav>
  )
}

export default NavBar
