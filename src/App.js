import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    topicList: topicsList,
    name: '',
    activeTopic: topicsList[0].id,
    isRegister: false,
    isName: false,
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeActiveTopic = topic => {
    this.setState({activeTopic: topic})
  }

  onRegisterNow = () => {
    this.setState({isRegister: true})
  }

  onName = () => {
    this.setState({isName: true})
  }

  render() {
    const {topicList, name, activeTopic, isRegister, isName} = this.state

    return (
      <MeetupContext.Provider
        value={{
          topicList,
          name,
          activeTopic,
          isRegister,
          isName,
          onRegisterNow: this.onRegisterNow,
          onChangeName: this.onChangeName,
          onChangeActiveTopic: this.onChangeActiveTopic,
          onName: this.onName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
