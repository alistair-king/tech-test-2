import { useMemo, useState } from 'react'

import Filter from './Filter'
import Frame from './Frame'
import AgentCard from './AgentCard'
import Spinner from './Spinner'
import { Agent, AgentCollection, Status } from '../types'

const Agents = ({ collection }: { collection?: AgentCollection}) => {
  const [filterStatus, setFilterStatus] = useState<Status>('all')

  const agents = useMemo(() => {
    const sortedAgents = collection?.agents.sort((a: Agent, b: Agent): number => {
      if (a.status === 'online' && b.status !== 'online') return -1
      if (a.status !== 'online' && b.status === 'online') return 1
      return a.first_name > b.first_name ? 1 : -1
    }) ?? []

    const filteredAgents = filterStatus === 'all'
      ? sortedAgents
      : sortedAgents.filter(({ status }: Agent) => status === filterStatus)
    
    return filteredAgents
  }, [collection, filterStatus])

  return (
    <Frame>
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      {!!collection
        ? <>{agents.map((agent: Agent) => <AgentCard key={`${agent.first_name} ${agent.last_name}`} agent={agent} />)}</>
        : <Spinner />
      }
    </Frame>
  )
}

export default Agents
