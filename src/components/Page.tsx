import { ReactNode } from 'react'

const Page = ({ children }: { children: ReactNode }) => (
  <div className="bg-slate-50 h-screen py-8">
    <div className="flex justify-center items-center mb-8">
      <h1 className="text-xl font-medium text-black">Alistair King - Local Measure - Tech Test</h1>
    </div>
    {children}
  </div>
)

export default Page
