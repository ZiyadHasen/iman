import { Select, TextField } from '@radix-ui/themes'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchAndFilter = () => {
  return (
    <div className='my-6 grid grid-cols-5 gap-6'>
      <TextField.Root
        className='col-span-2'
        size='3'
        placeholder='Search By Name ...'
      >
        <TextField.Slot>
          <CiSearch />
        </TextField.Slot>
      </TextField.Root>

      <Select.Root size='3'>
        <Select.Trigger placeholder='Select Year' />
        <Select.Content>
          <Select.Item value='apple'>2023</Select.Item>
          <Select.Item value='orange'>2024</Select.Item>
          <Select.Item value='orange'>2025</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size='3'>
        <Select.Trigger placeholder='Select Month' />
        <Select.Content>
          <Select.Item value='january'>January</Select.Item>
          <Select.Item value='february'>February</Select.Item>
          <Select.Item value='march'>March</Select.Item>
          <Select.Item value='april'>April</Select.Item>
          <Select.Item value='may'>May</Select.Item>
          <Select.Item value='june'>June</Select.Item>
          <Select.Item value='july'>July</Select.Item>
          <Select.Item value='august'>August</Select.Item>
          <Select.Item value='september'>September</Select.Item>
          <Select.Item value='october'>October</Select.Item>
          <Select.Item value='november'>November</Select.Item>
          <Select.Item value='december'>December</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

export default SearchAndFilter
