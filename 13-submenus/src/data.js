import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa'

const subLinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '#' },
      { label: 'terminal', icon: <FaCreditCard />, url: '#' },
      { label: 'connect', icon: <FaCreditCard />, url: '#' }
    ]
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '#' },
      { label: 'libraries', icon: <FaBook />, url: '#' },
      { label: 'help', icon: <FaBook />, url: '#' },
      { label: 'billing', icon: <FaBook />, url: '#' }
    ]
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '#' },
      { label: 'customers', icon: <FaBriefcase />, url: '#' }
    ]
  }
]

export default subLinks
