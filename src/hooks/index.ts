import { useEffect, useState } from 'react'

import { Agent, AgentCollection } from '../types'

const useAgents = (url: RequestInfo): AgentCollection | undefined => {
  const [collection, setCollection] = useState<AgentCollection>()
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setCollection)
  }, [url])
  return collection
}

export default useAgents
