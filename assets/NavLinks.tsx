import { IoIosPeople } from 'react-icons/io'
import { RiUserAddFill } from 'react-icons/ri'
import { IoMdHome } from 'react-icons/io'
import { FaHandHoldingDollar } from 'react-icons/fa6'
import { IoPersonCircle } from 'react-icons/io5'
import { IoCall } from 'react-icons/io5'
import { FaCommentDollar } from 'react-icons/fa6'
import { MdVerified } from 'react-icons/md'
export const links = [
  { label: 'Dashboard', href: '/', icon: <IoMdHome /> },
  { label: 'All Members', href: '/pages/allMembers', icon: <IoIosPeople /> },
  { label: 'Add User', href: '/pages/addUser', icon: <RiUserAddFill /> },
  {
    label: 'Create Niya',
    href: '/pages/createNiya',
    icon: <FaHandHoldingDollar />,
  },
  {
    label: 'Assigned Calls',
    href: '/pages/assignedUser',
    icon: <IoPersonCircle />,
  },
  { label: 'Schedule Call', href: '/pages/scheduleCall', icon: <IoCall /> },
  {
    label: 'User Payment',
    href: '/pages/userPayment',
    icon: <FaCommentDollar />,
  },
  {
    label: 'Approve Payment',
    href: '/pages/approvePayment',
    icon: <MdVerified />,
  },
]
