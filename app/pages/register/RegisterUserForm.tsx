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

  const [error, setError] = useState('') // Global error message
  const [isSubmitting, setIsSubmitting] = useState(false)

  // State to keep track of the first error to be shown
  const [firstError, setFirstError] = useState<string | null>(null)

  // Get the first field that has an error (if any) and show that error first
  const getFirstError = () => {
    const errorKeys = Object.keys(errors) as (keyof typeof errors)[]
    if (errorKeys.length > 0) {
      return errors[errorKeys[0]]?.message || ''
    }
    return ''
  }

  // Submit form handler
  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsSubmitting(true)
      setError('') // Reset global error before submitting
      await axios.post('/api/register', data)
      router.push('/')
    } catch (err) {
      setIsSubmitting(false)
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || 'Something went wrong.')
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='w-full max-w-3xl rounded-lg bg-gray-100 p-6 shadow-md'>
        <Heading className='mb-8 text-center'>Register</Heading>

        {/* Display Global Error */}
        {error && (
          <Callout.Root color='red' className='mb-5'>
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}

        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Field */}
          <div className='w-3/4'>
            <Text className='mb-2' size='2'>
              Full Name
            </Text>
            <TextField.Root
              placeholder=' Full name'
              radius='large'
              {...register('name')}
              onFocus={() => setFirstError('name')} // Set the first error when this field is focused
            >
              <TextField.Slot />
            </TextField.Root>
            {/* Show error only if the field is the one with the first error */}
            {firstError === 'name' && errors.name && (
              <Text color='red' as='p' size='2'>
                {errors.name.message}
              </Text>
            )}
          </div>

          <div className='flex gap-5'>
            {/* Primary Phone Number Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Primary Phone Number
              </Text>
              <TextField.Root
                placeholder='Main phoneNumber'
                radius='large'
                {...register('phoneNumber1')}
                onFocus={() => setFirstError('phoneNumber1')} // Set first error field
              >
                <TextField.Slot />
              </TextField.Root>
              {/* Show error only if it's the first error */}
              {firstError === 'phoneNumber1' && errors.phoneNumber1 && (
                <Text color='red' as='p' size='2'>
                  {errors.phoneNumber1.message}
                </Text>
              )}
            </div>

            {/* Secondary Phone Number Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Secondary Phone Number
              </Text>
              <TextField.Root
                placeholder='Additional phoneNumber'
                radius='large'
                {...register('phoneNumber2')}
                onFocus={() => setFirstError('phoneNumber2')} // Set first error field
              >
                <TextField.Slot />
              </TextField.Root>
              {/* Show error only if it's the first error */}
              {firstError === 'phoneNumber2' && errors.phoneNumber2 && (
                <Text color='red' as='p' size='2'>
                  {errors.phoneNumber2.message}
                </Text>
              )}
            </div>
          </div>

          <div className='flex gap-5'>
            {/* Email Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Email
              </Text>
              <TextField.Root
                placeholder='email'
                radius='large'
                {...register('email')}
                onFocus={() => setFirstError('email')} // Set first error field
              >
                <TextField.Slot />
              </TextField.Root>
              {/* Show error only if it's the first error */}
              {firstError === 'email' && errors.email && (
                <Text color='red' as='p' size='2'>
                  {errors.email.message}
                </Text>
              )}
            </div>

            {/* Password Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Password
              </Text>
              <TextField.Root
                placeholder='password'
                radius='large'
                {...register('password')}
                onFocus={() => setFirstError('password')} // Set first error field
              >
                <TextField.Slot />
              </TextField.Root>
              {/* Show error only if it's the first error */}
              {firstError === 'password' && errors.password && (
                <Text color='red' as='p' size='2'>
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
