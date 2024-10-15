import {
  Container,
  Heading,
  Text,
  TextField,
  Button,
  Select,
} from '@radix-ui/themes'
import React from 'react'

const AddUserForm = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-3xl rounded-lg bg-gray-100 p-6 shadow-md'>
        <Heading className='mb-8 text-center'>Add New Member</Heading>
        <form className='space-y-4'>
          <div>
            <Text className='mb-2' size='2'>
              Full Name
            </Text>
            <TextField.Root placeholder='name' radius='large'>
              <TextField.Slot />
            </TextField.Root>
          </div>

          <div className='flex gap-5'>
            <div className='flex flex-grow flex-col'>
              <Text className='mb-2' size='2'>
                Primary Phone Number
              </Text>
              <TextField.Root placeholder='phoneNumber' radius='large'>
                <TextField.Slot />
              </TextField.Root>
            </div>
            <div className='flex flex-grow flex-col'>
              <Text className='mb-2' size='2'>
                Secondary Phone Number
              </Text>
              <TextField.Root placeholder='phoneNumber' radius='large'>
                <TextField.Slot />
              </TextField.Root>
            </div>
          </div>

          <div className='flex gap-5'>
            <div className='flex flex-grow flex-col'>
              <Text className='mb-2' size='2'>
                Email
              </Text>
              <TextField.Root placeholder='email' radius='large'>
                <TextField.Slot />
              </TextField.Root>
            </div>
            <div className='flex flex-grow flex-col'>
              <Text className='mb-2' size='2'>
                Password
              </Text>
              <TextField.Root placeholder='password' radius='large'>
                <TextField.Slot />
              </TextField.Root>
            </div>
          </div>

          <div className='mb-8 flex gap-5'>
            {/* Role Selection */}
            <div className='flex flex-grow flex-col'>
              <label className='mb-2 text-sm font-medium' htmlFor='role'>
                Role
              </label>
              <Select.Root>
                <Select.Trigger placeholder='Select Role' id='role' />
                <Select.Content>
                  <Select.Item value='apple'>Apple</Select.Item>
                  <Select.Item value='orange'>Orange</Select.Item>
                  <Select.Item value='banana'>Banana</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>

            {/* Paying Style Selection */}
            <div className='flex flex-grow flex-col'>
              <label className='mb-2 text-sm font-medium' htmlFor='payingStyle'>
                Paying Style
              </label>
              <Select.Root>
                <Select.Trigger placeholder='Paying Style' id='payingStyle' />
                <Select.Content>
                  <Select.Item value='apple'>Apple</Select.Item>
                  <Select.Item value='orange'>Orange</Select.Item>
                  <Select.Item value='banana'>Banana</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
          </div>

          <Button className='mt-12'>Submit The New User</Button>
        </form>
      </div>
    </div>
  )
}

export default AddUserForm
