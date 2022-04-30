import { ReactNode } from 'react'
import cls from 'classnames'

import { Status } from '../types'

const Filter = ({
  filterStatus,
  setFilterStatus
}: {
  filterStatus: Status,
  setFilterStatus: (status: Status) => void
}) => (
  <div className="flex justify-center mb-4">
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <Button
        buttonStatus="all"
        className="py-2 px-4 text-sm font-medium rounded-l-lg border border-gray-200"
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      >
        All
      </Button>
      <Button
        buttonStatus="online"
        className="py-2 px-4 text-sm font-medium border-t border-b border-gray-200"
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      >
        Online Only
      </Button>
      <Button
        buttonStatus="offline"
        className="py-2 px-4 text-sm font-medium rounded-r-md border border-gray-200"
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      >
        Offline Only
      </Button>
    </div>
  </div>
)

const Button = ({
  children,
  className,
  filterStatus,
  buttonStatus,
  setFilterStatus
}: {
  children: ReactNode
  className: string
  filterStatus: Status
  buttonStatus: Status
  setFilterStatus: (status: Status) => void
}) => (
      <button
        type="button"
        onClick={() => setFilterStatus(buttonStatus)}
        className={
          cls({
            [className]: true,
            'text-gray-900 bg-white': (filterStatus !== buttonStatus),
            'text-white bg-gray-900': (filterStatus === buttonStatus)
          })          
        }
      >
        {children}
      </button>

)

export default Filter
