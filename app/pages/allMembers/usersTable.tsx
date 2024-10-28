import { Badge, Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const usersTable = () => {
  return (
    <div>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone Number 1</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone Number 1</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Paying Style</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Edit User</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Delete User</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {[
            {
              name: 'Ziyad Hasen',
              phone: '0988662403',
              role: 'operator',
              status: 'active',
              frequency: 'Quarterly',
            },
            {
              name: 'John Doe',
              phone: '0988662404',
              role: 'member',
              status: 'not active',
              frequency: 'Monthly',
            },
            {
              name: 'Jane Smith',
              phone: '0988662405',
              role: 'operator',
              status: 'active',
              frequency: 'Weekly',
            },
            {
              name: 'Emily Davis',
              phone: '0988662406',
              role: 'member',
              status: 'active',
              frequency: 'Annually',
            },
            {
              name: 'Michael Brown',
              phone: '0988662407',
              role: 'operator',
              status: 'not active',
              frequency: 'Quarterly',
            },
            {
              name: 'Sarah Wilson',
              phone: '0988662408',
              role: 'member',
              status: 'active',
              frequency: 'Monthly',
            },
            {
              name: 'David Johnson',
              phone: '0988662409',
              role: 'operator',
              status: 'active',
              frequency: 'Weekly',
            },
            {
              name: 'Emma Taylor',
              phone: '0988662410',
              role: 'member',
              status: 'not active',
              frequency: 'Annually',
            },
            {
              name: 'Daniel Lee',
              phone: '0988662411',
              role: 'operator',
              status: 'active',
              frequency: 'Quarterly',
            },
            {
              name: 'Olivia Harris',
              phone: '0988662412',
              role: 'member',
              status: 'active',
              frequency: 'Monthly',
            },
          ].map((user, index) => (
            <Table.Row key={index}>
              <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>{user.phone}</Table.Cell>
              <Table.Cell>{user.frequency}</Table.Cell>

              {/* Role Badge */}
              <Table.Cell>
                <Badge
                  color={user.role === 'operator' ? 'plum' : 'blue'}
                  size='2'
                >
                  {user.role}
                </Badge>
              </Table.Cell>

              {/* Status Badge */}
              <Table.Cell>
                <Badge
                  color={user.status === 'active' ? 'grass' : 'red'}
                  size='2'
                >
                  {user.status}
                </Badge>
              </Table.Cell>

              {/* Edit Button */}
              <Table.Cell>
                <Link href={''}>
                  <Button color='indigo' size='1' className='cursor-pointer'>
                    Edit User
                  </Button>
                </Link>
              </Table.Cell>

              {/* Delete Button */}
              <Table.Cell>
                <Link href={''} className='cursor-pointer'>
                  <Button color='red' size='1' variant='solid'>
                    Delete
                  </Button>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default usersTable
