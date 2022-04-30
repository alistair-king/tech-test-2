export declare type Status = 'all' | 'online' | 'offline'

export declare type Profile = 'agent' | 'admin'

export declare type Agent = {
  first_name: string
  last_name: string
  status: Status
  profile: Profile
  avatar: string
}

export declare type AgentCollection = {
  agents: Agent[]
}

