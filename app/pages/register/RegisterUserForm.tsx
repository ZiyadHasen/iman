'use client'
import { RegisterSchema } from '@/app/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Callout,
  Heading,
  Spinner,
  Text,
  TextField,
} from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type RegisterFormData = z.infer<typeof RegisterSchema>
const RegisterUserForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-3xl rounded-lg bg-gray-100 p-6 shadow-md'>
        <Heading className='mb-8 text-center'>Register</Heading>
        {error && (
          <Callout.Root color='red' className='mb-5'>
            <Callout.Text>Error Occurred</Callout.Text>
          </Callout.Root>
        )}
        <form
          className='space-y-4'
          onSubmit={handleSubmit(async (data) => {
            try {
              setIsSubmitting(true)
              await axios.post('/api/register', data)
              router.push('/')
            } catch (error) {
              setIsSubmitting(false)
              setError('an expected error occurred ')
            }
          })}
        >
          <div className='w-3/4'>
            <Text className='mb-2' size='2'>
              Full Name
            </Text>
            <TextField.Root
              placeholder=' Full name'
              radius='large'
              {...register('name')}
            >
              <TextField.Slot />
            </TextField.Root>
            {errors.name && (
              <Text color='red' as='p'>
                {errors.name.message}
              </Text>
            )}
          </div>

          <div className='flex gap-5'>
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Primary Phone Number
              </Text>
              <TextField.Root
                placeholder='Main phoneNumber'
                radius='large'
                {...register('phoneNumber1')}
              >
                <TextField.Slot />
              </TextField.Root>
              {errors.phoneNumber1 && (
                <Text color='red' as='p'>
                  {errors.phoneNumber1.message}
                </Text>
              )}
            </div>

            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Secondary Phone Number
              </Text>
              <TextField.Root
                placeholder='Additional phoneNumber'
                radius='large'
                {...register('phoneNumber2')}
              >
                <TextField.Slot />
              </TextField.Root>
              {errors.phoneNumber2 && (
                <Text color='red' as='p'>
                  {errors.phoneNumber2.message}
                </Text>
              )}
            </div>
          </div>

          <div className='flex gap-5'>
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Email
              </Text>
              <TextField.Root
                placeholder='email'
                radius='large'
                {...register('email')}
              >
                <TextField.Slot />
              </TextField.Root>
              {errors.email && (
                <Text color='red' as='p'>
                  {errors.email.message}
                </Text>
              )}
            </div>
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Password
              </Text>
              <TextField.Root
                placeholder='password'
                radius='large'
                {...register('password')}
              >
                <TextField.Slot />
              </TextField.Root>
              {errors.password && (
                <Text color='red' as='p'>
                  {errors.password.message}
                </Text>
              )}
            </div>
          </div>

          <Button className='mt-12'>
            Register User
            {isSubmitting && <Spinner />}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default RegisterUserForm
