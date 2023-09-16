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
  state = {topicList: topicsList, name: '', activeTopic: '', isRegister: false}

  onClickRegister = () => {
    const {history} = this.props
    history.replace('/register')
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeActiveTopic = topic => {
    this.setState({activeTopic: topic})
  }

  onClickRegisterNow = () => {
    this.setState({isRegister: true})
  }

  render() {
    const {topicList, name, activeTopic, isRegister} = this.state

    return (
      <MeetupContext.Provider
        value={{
          topicList,
          name,
          activeTopic,
          isRegister,
          onClickRegister: this.onClickRegister,
          onClickRegisterNow: this.onClickRegisterNow,
          onChangeName: this.onChangeName,
          onChangeActiveTopic: this.onChangeActiveTopic,
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
