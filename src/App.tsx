import Page from './components/Page'
import Agents from './components/Agents'

import useAgents from './hooks'

const ENDPOINT_URL = 'https://3nzfzc8au7.execute-api.us-east-1.amazonaws.com/default/agents'

const App = () => {
  const collection = useAgents(ENDPOINT_URL)
  return (
    <Page>
      <Agents collection={collection} />
    </Page>
  )
}

export default App
