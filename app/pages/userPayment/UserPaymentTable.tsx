import { Table } from '@radix-ui/themes'
import React from 'react'
import { DummyPaymentData } from '@/assets/DummyPaymentData'

// Define the type for DummyPaymentData
interface PaymentData {
  name: string
  year: number
  pledgedAmount: number
  paidAmount: number
  expectedAmount: number
  paidMonths: number
  expectedMonths: number
  months: { [key: number]: number } // Numeric keys (1–12) for months
}

const UserPaymentTable = () => {
  const months = Array.from({ length: 12 }, (_, i) => i + 1) // Months 1–12

  return (
    <div>
      <Table.Root variant='surface'>
        {/* Table Header */}
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell minWidth='150px'>
              Full Name
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth='100px'>
              Year
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth='100px'>
              Pledged Amount
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth='100px'>
              Paid Amount
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth='100px'>
              Expected Amount
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth='100px'>
              Paid Months
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell minWidth='100px'>
              Expected Months
            </Table.ColumnHeaderCell>
            {months.map((month) => (
              <Table.ColumnHeaderCell key={month}>
                {new Date(0, month - 1).toLocaleString('default', {
                  month: 'long',
                })}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        {/* Table Body */}
        <Table.Body>
          {DummyPaymentData.map((user: PaymentData, index) => (
            <Table.Row key={index}>
              <Table.Cell className='font-medium'>{user.name}</Table.Cell>
              <Table.Cell>{user.year}</Table.Cell>
              <Table.Cell>{user.pledgedAmount}</Table.Cell>
              <Table.Cell>{user.paidAmount}</Table.Cell>
              <Table.Cell>{user.expectedAmount}</Table.Cell>
              <Table.Cell>{user.paidMonths}</Table.Cell>
              <Table.Cell>{user.expectedMonths}</Table.Cell>
              {months.map((month) => (
                <Table.Cell key={month}>
                  {/* the nullish coalescing operator (??) 
                  it return 0 if the right side is null or undefined 
                  and it is elegant 
                  */}
                  {user.months?.[month] ?? 0}
                  <br />
                  {/* Fallback to 0 if user.months[month] is undefined */}
                  {user.months?.[month] === 0 ? ' (unpaid)' : ''}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default UserPaymentTable
