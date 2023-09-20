import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  isRegister: false,
  showError: false,
  onRegister: () => {},
  onChangeTopic: () => {},
  onChangeName: () => {},
  updateError: () => {},
})

export default MeetupContext
