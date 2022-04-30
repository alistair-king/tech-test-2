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
      <button
        type="button"
        onClick={() => setFilterStatus('all')}
        className={cls({
          'py-2 px-4 text-sm font-medium rounded-l-lg border border-gray-200': true,
          'text-gray-900 bg-white': (filterStatus !== 'all'),
          'text-white bg-gray-900': (filterStatus === 'all')
        })}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => setFilterStatus('online')}
        className={cls({
          'py-2 px-4 text-sm font-medium border-t border-b border-gray-200': true,
          'text-gray-900 bg-white': (filterStatus !== 'online'),
          'text-white bg-gray-900': (filterStatus === 'online')
        })}
      >
        Online Only
      </button>
      <button
        type="button"
        onClick={() => setFilterStatus('offline')}
        className={
          cls({
            'py-2 px-4 text-sm font-medium rounded-r-md border border-gray-200': true,
            'text-gray-900 bg-white': (filterStatus !== 'offline'),
            'text-white bg-gray-900': (filterStatus === 'offline')
          })          
        }
      >
        Offline Only
      </button>
    </div>
  </div>
)



export default Filter
