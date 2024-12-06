'use client'
import { Avatar, Box, Card, Flex, Select, Text } from '@radix-ui/themes'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation' // Import navigation styles
import 'swiper/css/pagination' // Import pagination styles
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const names = [
  'Ahmed Ali',
  'Fatima Hassan',
  'Omar Khalid',
  'Ayesha Noor',
  'Hassan Tariq',
  'Maryam Zafar',
  'Zaid Ahmed',
  'Sana Rahman',
  'Ibrahim Saeed',
  'Nadia Farooq',
  'Yusuf Kareem',
  'Amna Yasin',
  'Bilal Shaikh',
  'Zara Asif',
  'Hamza Siddiq',
  'Layla Hassan',
  'Adil Qureshi',
  'Mariam Jameel',
  'Rashid Khan',
  'Hiba Fawad',
]

const AssignedCalls = () => {
  return (
    <div className='rounded-lg bg-gray-100 p-6 shadow-md'>
      {/* Filters */}
      <div className='flex items-center gap-6'>
        <div className='flex flex-1 flex-col'>
          <Text className='text-sm font-medium' size='3'>
            Filter By Year
          </Text>
          <Select.Root size='3'>
            <Select.Trigger placeholder='Select Year' />
            <Select.Content>
              <Select.Item value='2023'>2023</Select.Item>
              <Select.Item value='2024'>2024</Select.Item>
              <Select.Item value='2025'>2025</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
        <div className='flex flex-1 flex-col'>
          <Text className='text-sm font-medium' size='3'>
            Filter By Month
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
            Filter By Day
          </Text>
          <Select.Root size='3'>
            <Select.Trigger placeholder='Select Day' />
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

      {/* Swiper */}
      <div className='my-12'>
        <Swiper
          spaceBetween={20}
          slidesPerView={2} // Show 2 slides at once
          className='h-[500px] w-[1000px]' // Adjust height
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 5000, // Delay between slides (in ms)
            disableOnInteraction: false, // Keeps autoplay active after manual interaction
          }}
          navigation // Enables "next" and "previous" arrows
          pagination={{ clickable: true }} // Enables pagination dots
        >
          {/* Slides */}
          <SwiperSlide>
            <Card className='h-full'>
              <Text as='div' size='3' weight='bold'>
                Operator: Teodros Girmay
              </Text>
              <Text as='div' size='2' color='gray' className='my-2'>
                <span className='font-bold text-black'>Date</span>:
                2024-November-1
              </Text>
              <Text as='div' size='3' weight='bold' className='my-5'>
                Assigned users
              </Text>
              {/* Dynamic Two-Column Numbered List */}
              <div className='grid grid-cols-2 gap-4'>
                {names.map((task, index) => (
                  <Text as='div' size='2' color='gray' key={index}>
                    {index + 1}. {task}
                  </Text>
                ))}
              </div>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <div className='flex h-full items-center justify-center rounded-md bg-green-100'>
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full items-center justify-center rounded-md bg-red-100'>
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full items-center justify-center rounded-md bg-yellow-100'>
              Slide 4
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AssignedCalls
