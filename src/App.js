import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
    isRegister: false,
    showError: false,
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeTopic = topic => {
    this.setState({topic})
  }

  onRegister = () => {
    this.setState({isRegister: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegister, showError} = this.state

    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          isRegister,
          showError,
          onRegister: this.onRegister,
          onChangeTopic: this.onChangeTopic,
          onChangeName: this.onChangeName,
          updateError: this.updateError,
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
