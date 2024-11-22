import { Heading } from '@radix-ui/themes'
import React from 'react'
import AssignedCalls from './AssignedCalls'

const AssignedUser = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-grow rounded-sm bg-gray-200 p-8 shadow-md'>
        <Heading className='mb-8 text-center'>Assignment Area</Heading>
        <AssignedCalls />
      </div>
    </div>
  )
}

export default AssignedUser
