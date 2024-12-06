import { IoIosPeople } from 'react-icons/io'
import { RiUserAddFill } from 'react-icons/ri'
import { IoMdHome } from 'react-icons/io'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { IoPersonCircle } from 'react-icons/io5'
import { IoCall } from 'react-icons/io5'
import { FaCommentDollar } from 'react-icons/fa6'
import { MdVerified } from 'react-icons/md'
export const links = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <IoMdHome />,
    roles: ['ADMIN', 'USER', 'OPERATOR'],
  },
  {
    label: 'All Members',
    href: '/pages/allMembers',
    icon: <IoIosPeople />,
    roles: ['ADMIN', 'USER'],
  },
  {
    label: 'My Members',
    href: '/pages/myMembers',
    icon: <IoIosPeople />,
    roles: ['OPERATOR'],
  },
  {
    label: 'Call Members',
    href: '/pages/callMembers',
    icon: <IoCall />,
    roles: ['OPERATOR'],
  },
  {
    label: 'Add User',
    href: '/pages/addUser',
    icon: <RiUserAddFill />,
    roles: ['ADMIN', 'USER'],
  },

  {
    label: 'Assigned Calls',
    href: '/pages/assignedUser',
    icon: <IoPersonCircle />,
    roles: ['ADMIN', 'USER'],
  },
  {
    label: 'Schedule Call',
    href: '/pages/scheduleCall',
    icon: <IoCall />,
    roles: ['ADMIN', 'USER'],
  },
  {
    label: 'User Payment',
    href: '/pages/userPayment',
    icon: <FaCommentDollar />,
    roles: ['ADMIN', 'USER'],
  },
  {
    label: 'User Payment',
    href: '/pages/userPaymentOp',
    icon: <FaCommentDollar />,
    roles: ['OPERATOR'],
  },
  {
    label: 'Approve Payment',
    href: '/pages/approvePayment',
    icon: <MdVerified />,
    roles: ['ADMIN', 'USER'],
  },
]
