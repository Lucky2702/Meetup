import React from 'react'

const MeetupContext = React.createContext({
  topicList: [],
  name: '',
  activeTopic: '',
  isRegister: false,
  isName: false,
  onRegisterNow: () => {},
  onChangeActiveTopic: () => {},
  onChangeName: () => {},
  onName: () => {},
})

export default MeetupContext
