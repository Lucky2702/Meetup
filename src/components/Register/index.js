import {Component} from 'react'

import MeetupContext from '../../context/MeetupContext'

import {
  RegisterContainer,
  Logo,
  Card,
  RegisterImage,
  RegisterFormContainer,
  Label,
  InputText,
  Select,
  Option,
  Button,
  Heading,
  ErrorMsg,
} from './styledComponents'

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

class Register extends Component {
  state = {
    name: '',
    activeTopic: topicsList[0].displayText,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeInputName = e => {
    this.setState({name: e.target.value})
  }

  onChangeTopic = e => {
    this.setState({activeTopic: e.target.value})
  }

  render() {
    const {name, activeTopic, showSubmitError, errorMsg} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {
            topicList,
            onChangeName,
            onChangeActiveTopic,
            onClickRegisterNow,
          } = value

          const onClickRegisterNowButton = e => {
            e.preventDefault()
            if (name === '') {
              const errorMessage = 'Please enter your name'
              this.setState({showSubmitError: true, errorMsg: errorMessage})
            } else {
              onClickRegisterNow()
              onChangeName(name)
              onChangeActiveTopic(activeTopic)
              const {history} = this.props
              history.replace('/')
            }
          }

          return (
            <RegisterContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <Card>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <RegisterFormContainer onSubmit={onClickRegisterNowButton}>
                  <Heading>Let us join</Heading>
                  <Label htmlFor="name">NAME</Label>
                  <InputText
                    type="text"
                    id="name"
                    onChange={this.onChangeInputName}
                    placeholder="Your name"
                  />
                  <Label htmlFor="topic">TOPICS</Label>
                  <Select onChange={this.onChangeTopic} id="topic">
                    {topicList.map(each => (
                      <Option key={each.id} value={each.displayText}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                  <Button type="submit">Register Now</Button>
                  {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </RegisterFormContainer>
              </Card>
            </RegisterContainer>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register
