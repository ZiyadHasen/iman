import React from 'react'
import { Container, Heading } from '@radix-ui/themes'

import SearchAndFilter from './SearchAndFilter'
import UserPaymentTable from './UserPaymentTable'

const UserPaymentPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Container className='my-4 flex-grow rounded-sm bg-gray-200 p-6 shadow-md'>
        <h3 className='text-center text-2xl font-bold'>Payment Table</h3>
        <SearchAndFilter />
        <UserPaymentTable />
      </Container>
    </div>
  )
}

export default UserPaymentPage
