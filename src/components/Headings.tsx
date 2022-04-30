import { ReactNode } from 'react'

const Headings = () => (
  <thead className="border-b">
    <tr>
      <Heading />
      <Heading>First name</Heading>
      <Heading>Last name</Heading>
      <Heading>Status</Heading>
      <Heading>Profile</Heading>
    </tr>
  </thead>
)

export default Headings

const Heading = ({
  children
}: {
  children?: ReactNode
}) => (
  <th scope="col" className="text-sm font-bold text-gray-900 px-6 py-4 text-left">
    {children}
  </th>  
)
