import React from 'react'
import PickOperatorForm from './PickOperatorForm'
import SelectionField from './SelectionField'

const PickOperatorPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex-grow rounded-sm bg-gray-200 p-8 shadow-md'>
        <PickOperatorForm />
      </div>
    </div>
  )
}

export default PickOperatorPage
