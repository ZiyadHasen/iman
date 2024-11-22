import { Badge, Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { DummyTableData } from '@/assets/dummyTableData'

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
          {DummyTableData.map((user, index) => (
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
