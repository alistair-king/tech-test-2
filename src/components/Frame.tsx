import { ReactNode } from 'react'

const Frame = ({ children }: { children: ReactNode }) => (
  <div className="w-full flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 grid place-items-center">
      <div className="py-2 inline-block min-w-1/2 p-6">
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default Frame
