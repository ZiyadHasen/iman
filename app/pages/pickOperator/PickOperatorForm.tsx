'use client'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  ScrollArea,
  Select as SelectRadix,
  Text,
  TextField,
} from '@radix-ui/themes'
import Select, { SingleValue } from 'react-select'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react'

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

const PickOperatorForm = () => {
  // Type the state to accept a UserOption or null
  const [selectedUser, setSelectedUser] = useState<UserOption | null>(null)

  // Handler for selecting user
  const handleUserChange = (selectedOption: SingleValue<UserOption>) => {
    setSelectedUser(selectedOption)
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-3xl rounded-lg bg-gray-100 p-6 shadow-md'>
        <Heading className='mb-8 text-center'>Pick Operator </Heading>
        <div className='flex items-center gap-6'>
          <div className='flex-1'>
            <Text className='text-sm font-medium' size='3'>
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
          <div className='flex flex-1 flex-col'>
            <Text className='text-sm font-medium' size='3'>
              Role
            </Text>
            <SelectRadix.Root size='3'>
              <SelectRadix.Trigger placeholder='SelectRadix Role' id='role' />
              <SelectRadix.Content>
                <SelectRadix.Item value='apple'>Apple</SelectRadix.Item>
                <SelectRadix.Item value='orange'>Orange</SelectRadix.Item>
                <SelectRadix.Item value='banana'>Banana</SelectRadix.Item>
              </SelectRadix.Content>
            </SelectRadix.Root>
          </div>
        </div>
        <div className='my-6 w-3/4'>
          <TextField.Root
            className='col-span-2'
            size='3'
            placeholder='Search By Name ...'
          >
            <TextField.Slot>
              <CiSearch />
            </TextField.Slot>
          </TextField.Root>
        </div>
        <div className='mt-12 flex items-center gap-2'>
          <div>Selected Operator :</div>
          <div className='font-medium text-blue-600'>100</div>
        </div>

        <div className='my-6'>
          <ScrollArea
            type='always'
            scrollbars='vertical'
            style={{ height: 300 }}
          >
            <Box p='2' pr='8'>
              <Heading size='4' mb='4' trim='start'>
                Assign the following user to the selected operator
              </Heading>

              <div className='grid grid-cols-3 gap-4'>
                {Array.from({ length: 30 }, (_, index) => (
                  <Text as='label' size='2' key={index}>
                    <Flex gap='2'>
                      <Checkbox size='3' />
                      Ziyad Hasen {index + 1}
                    </Flex>
                  </Text>
                ))}
              </div>
            </Box>
          </ScrollArea>
        </div>
        <div className='mt-12 flex items-center justify-center'>
          <Button style={{ width: '40%' }} size='3'>
            Submit The Assignment
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PickOperatorForm
