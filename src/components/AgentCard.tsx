import { ReactNode } from 'react'

import { Agent } from '../types'

const AgentCard = ({ agent: { first_name, last_name, status, profile, avatar } }: { agent: Agent }) => (
  <div className="p-6 mb-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-2">
    <div className="shrink-0">
      <img className="h-12 w-12 rounded-full" src={avatar} alt={`${first_name} ${last_name}`} />
    </div>
    <div>
      <div className="text-xl font-medium text-black"><span>{first_name}</span> <span>{last_name}</span></div>
      <p className="text-slate-500">{status} {profile}</p>
    </div>
  </div>
)

export default AgentCard
