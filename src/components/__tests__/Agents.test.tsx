import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Agents from '../Agents'
import { Status, Profile } from '../../types'

const online: Status = 'online'
const offline: Status = 'offline'

const admin: Profile = 'admin'
const agent: Profile = 'agent'


describe('Agents Component',() => {
  it('renders data to view', async () => {
    const { getByText } = render(<Agents collection={mockCollection} />)
    expect(getByText(mockCollection.agents[0].first_name)).not.toBeNull()
    expect(getByText(mockCollection.agents[0].last_name)).not.toBeNull()
  })
})

const mockCollection = {
	"agents": [
		{
			"first_name": "Ron",
			"last_name": "Swanson",
			"status": online,
			"profile": admin,
			"avatar": "https://parksrec.tehw00t.net/200/200/ron"
		},
		{
			"first_name": "Andy",
			"last_name": "Dwyer",
			"status": offline,
			"profile": agent,
			"avatar": "https://parksrec.tehw00t.net/200/200/andy"
		},
		{
			"first_name": "April",
			"last_name": "Ludgate",
			"status": online,
			"profile": agent,
			"avatar": "https://parksrec.tehw00t.net/200/200/april"
		},
		{
			"first_name": "Leslie",
			"last_name": "Knope",
			"status": online,
			"profile": admin,
			"avatar": "https://parksrec.tehw00t.net/200/200/leslie"
		},
		{
			"first_name": "Tom",
			"last_name": "Haverford",
			"status": offline,
			"profile": agent,
			"avatar": "https://parksrec.tehw00t.net/200/200/tom"
		}
	]
}
