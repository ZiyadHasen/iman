'use client'
import { Button, Heading, Text, TextField } from '@radix-ui/themes'
import { useState } from 'react'
import Select, { SingleValue } from 'react-select'
import DatePicker from 'react-datepicker'

// Define the user type
interface UserOption {
  value: string
  label: string
}

// User options array
const users: UserOption[] = [
  { value: '1', label: 'John Doe' },
  { value: '2', label: 'Jane Smith' },
  { value: '3', label: 'Alice Johnson' },
  // Add more users as needed
]

const CreateNiyaForm = () => {
  // Type the state to accept a UserOption or null
  const [selectedUser, setSelectedUser] = useState<UserOption | null>(null)
  const [year, setYear] = useState('')

  // Handler for selecting user
  const handleUserChange = (selectedOption: SingleValue<UserOption>) => {
    setSelectedUser(selectedOption)
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-3xl rounded-lg bg-gray-100 p-6 shadow-md'>
        <Heading className='mb-8 text-center'>Create New Niya</Heading>
        <form className='space-y-4'>
          <div>
            <Text className='mb-2' size='2'>
              Select User
            </Text>
            <Select
              placeholder='Search and Select User'
              value={selectedUser}
              onChange={handleUserChange}
              options={users}
              isSearchable={true}
            />
          </div>

          {/* Year Selection */}
          {/* Year Input */}
          <div>
            <Text className='mb-2' size='2'>
              Year
            </Text>
            <TextField.Root
              placeholder='Enter year'
              radius='large'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <TextField.Slot />
            </TextField.Root>
          </div>

          {/* Pledged Amount */}
          <div>
            <Text className='mb-2' size='2'>
              Pledged Amount
            </Text>
            <TextField.Root placeholder='Enter pledged amount' radius='large'>
              <TextField.Slot />
            </TextField.Root>
          </div>

          <Button className='mt-12'>Create The Pledge</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateNiyaForm
