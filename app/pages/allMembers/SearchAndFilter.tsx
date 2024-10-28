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
        <Select.Trigger placeholder='All Statuses' />
        <Select.Content>
          <Select.Item value='apple'>Apple</Select.Item>
          <Select.Item value='orange'>Orange</Select.Item>
          <Select.Item value='orange'>Banana</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size='3'>
        <Select.Trigger placeholder='All Roles' />
        <Select.Content>
          <Select.Item value='apple'>Apple</Select.Item>
          <Select.Item value='orange'>Orange</Select.Item>
          <Select.Item value='orange'>Banana</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size='3'>
        <Select.Trigger placeholder='All Paying Style' />
        <Select.Content>
          <Select.Item value='apple'>Apple</Select.Item>
          <Select.Item value='orange'>Orange</Select.Item>
          <Select.Item value='orange'>Banana</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  )
}

export default SearchAndFilter
