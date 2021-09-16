import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export const links = [
  {
    label: 'Rent Now',
    href: '#',
  },
  {
    label: 'Become a Host',
    href: '#',
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Get Help',
        description: 'Read our FAQ, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Dashboard',
        description: 'Find out what you have booked in your dashboard!',
        href: '#',
        icon: <IoCalendar />,
      },
      {
        label: 'Profille',
        description: 'Check out your profile and account details.',
        href: '#',
        icon: <IoGrid />,
      },
      {
        label: 'Blog',
        description: 'Get updates, articles and insights from the team.',
        href: '#',
        icon: <MdWeb />,
      },
    ],
  },
  {
    label: 'Pricing',
    href: '#',
  },
]
