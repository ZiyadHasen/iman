import React from 'react'
import PickOperatorForm from './PickOperatorForm'
import { Heading } from '@radix-ui/themes'

const ScheduleCallPage = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-grow rounded-sm bg-gray-200 p-8 shadow-md'>
        <Heading className='mb-8 text-center'>Assignment Area</Heading>
        <PickOperatorForm />
      </div>
    </div>
  )
}

export default ScheduleCallPage
