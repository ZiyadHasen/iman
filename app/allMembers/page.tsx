import { Container, Heading } from '@radix-ui/themes'
import React from 'react'
import SearchAndFilter from './SearchAndFilter'
import UsersTable from './usersTable'

const AllMemberPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Heading className='mx-2 mb-6 mt-4'>Hello Admin</Heading>

      <Container className='flex-grow rounded-sm bg-gray-200 p-6 shadow-md'>
        <Heading>All Members</Heading>
        <SearchAndFilter />
        <UsersTable />
      </Container>
    </div>
  )
}

export default AllMemberPage
