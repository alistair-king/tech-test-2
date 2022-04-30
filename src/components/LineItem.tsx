import { ReactNode } from 'react'

import { Agent } from '../types'

const LineItem = ({ agent: { first_name, last_name, status, profile, avatar } }: { agent: Agent }) => (
  <tr className="border-b">
    <Column>
      <img className="inline object-cover w-16 h-16 mr-2 rounded-full" src={avatar} alt={`${first_name} ${last_name}`} />
    </Column>
    <Column>{first_name}</Column>
    <Column>{last_name}</Column>
    <Column>{status}</Column>
    <Column>{profile}</Column>
  </tr>
)

export default LineItem

const Column = ({ children }: { children: ReactNode }) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    {children}
  </td>
)
