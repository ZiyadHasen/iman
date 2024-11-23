'use client'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  ScrollArea,
  Select,
  Text,
} from '@radix-ui/themes'

const PickOperatorForm = () => {
  return (
    <div className='rounded-lg bg-gray-100 p-6 shadow-md'>
      <div className='flex items-center gap-6'>
        <div className='flex flex-1 flex-col'>
          <Text className='text-sm font-medium' size='3'>
            Year
          </Text>
          <Select.Root size='3'>
            <Select.Trigger placeholder='Select Year' />
            <Select.Content>
              <Select.Item value='apple'>2023</Select.Item>
              <Select.Item value='orange'>2024</Select.Item>
              <Select.Item value='orange'>2025</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
        <div className='flex flex-1 flex-col'>
          <Text className='text-sm font-medium' size='3'>
            Month
          </Text>
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
        <div className='flex flex-1 flex-col'>
          <Text className='text-sm font-medium' size='3'>
            Day
          </Text>
          <Select.Root size='3'>
            <Select.Trigger placeholder='Select ' />
            <Select.Content>
              {Array.from({ length: 30 }, (_, i) => (
                <Select.Item key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
      </div>
      <div className='mt-8 flex justify-between'>
        <div className='flex items-center gap-2'>
          <div>Selected Users :</div>
          <div className='font-medium text-blue-600'>100</div>
        </div>
        {/* the select operator field  */}
        <div className='mx-6'>
          <Select.Root size='3'>
            <Select.Trigger placeholder='Select the operator ...' />
            <Select.Content>
              <Select.Item value='apple'>2023</Select.Item>
              <Select.Item value='orange'>2024</Select.Item>
              <Select.Item value='orange'>2025</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div className='my-2'>
        <ScrollArea type='always' scrollbars='vertical' style={{ height: 250 }}>
          <Box p='2' pr='8'>
            <Heading size='4' mb='4' trim='start'>
              Assign the following user to the selected operator
            </Heading>

            <div className='grid grid-cols-4 gap-4'>
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
  )
}

export default PickOperatorForm
