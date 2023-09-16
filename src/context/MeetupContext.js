import React from 'react'

const MeetupContext = React.createContext({
  topicList: [],
  name: '',
  activeTopic: '',
  isRegister: false,
  onClickRegister: () => {},
  onClickRegisterNow: () => {},
  onChangeActiveTopic: () => {},
  onChangeName: () => {},
})

export default MeetupContext
