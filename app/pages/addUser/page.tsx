import React from 'react'
import RegisterUserForm from './RegisterUserForm'

const RegisterPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex-grow rounded-sm bg-gray-200 p-8 shadow-md'>
        <RegisterUserForm />
      </div>
    </div>
  )
}

export default RegisterPage
