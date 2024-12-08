'use client'
import { RegisterSchema } from '@/app/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Callout,
  Heading,
  Select,
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
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      role: 'MEMBER',
      payingStyle: 'monthly',
    },
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
    console.log(data)
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
        <Heading className='mb-8 text-center'>Register MEMBER</Heading>

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
          {/* third row  */}
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
            {/* Location Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Location
              </Text>
              <TextField.Root
                placeholder='location'
                radius='large'
                {...register('location')}
                onFocus={() => setFirstError('location')} // Set first error field
              >
                <TextField.Slot />
              </TextField.Root>
              {/* Show error only if it's the first error */}
              {firstError === 'location' && errors.location && (
                <Text color='red' as='p' size='2'>
                  {errors.location.message}
                </Text>
              )}
            </div>
          </div>
          {/* fourth row */}
          <div className='flex gap-5'>
            {/* paying style Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Paying Style
              </Text>

              <Select.Root
                size='2'
                defaultValue='monthly'
                onValueChange={(value) =>
                  setValue(
                    'payingStyle',
                    value as 'monthly' | 'quarterly' | 'yearly',
                  )
                } // Update form value
                onOpenChange={() => setFirstError('payingStyle')} // Set first error
              >
                <Select.Trigger placeholder='Select paying style' />
                <Select.Content>
                  <Select.Item value='monthly'>Monthly</Select.Item>
                  <Select.Item value='quarterly'>Quarterly</Select.Item>
                  <Select.Item value='yearly'>Yearly</Select.Item>
                </Select.Content>
              </Select.Root>

              {/* Show error only if it's the first error */}
              {firstError === 'payingStyle' && errors.payingStyle && (
                <Text color='red' as='p' size='2'>
                  {errors.payingStyle.message}
                </Text>
              )}
            </div>

            {/* Amount Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Amount
              </Text>
              <TextField.Root radius='large'>
                <TextField.Slot>
                  <input
                    type='number' // Native input for numeric values
                    placeholder='amount'
                    className='w-full bg-transparent outline-none' // Ensures it matches Radix styling
                    {...register('amount', { valueAsNumber: true })} // Register with react-hook-form
                    onFocus={() => setFirstError('amount')} // Set first error field
                  />
                </TextField.Slot>
              </TextField.Root>
              {/* Show error only if it's the first error */}
              {firstError === 'amount' && errors.amount && (
                <Text color='red' as='p' size='2'>
                  {errors.amount.message}
                </Text>
              )}
            </div>
          </div>
          {/* fifth row which is role */}
          <div className='flex gap-5'>
            {/* Email Field */}
            <div className='flex w-1/2 flex-col'>
              <Text className='mb-2' size='2'>
                Role
              </Text>

              <Select.Root
                defaultValue='MEMBER'
                size='2'
                onValueChange={(value) =>
                  setValue('role', value as 'OPERATOR' | 'MEMBER')
                } // Update form value
                onOpenChange={() => setFirstError('role')} // Set first error
              >
                <Select.Trigger placeholder='Select Role' />
                <Select.Content>
                  <Select.Item value='MEMBER'>MEMBER</Select.Item>
                  <Select.Item value='OPERATOR'>Operator</Select.Item>
                </Select.Content>
              </Select.Root>

              {/* Show error only if it's the first error */}
              {firstError === 'role' && errors.role && (
                <Text color='red' as='p' size='2'>
                  {errors.role.message}
                </Text>
              )}
            </div>
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <Button style={{ width: '40%' }} size='3' disabled={isSubmitting}>
              {isSubmitting ? <Spinner /> : 'Register MEMBER'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterUserForm
