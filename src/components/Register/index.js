import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

import {
  RegisterContainer,
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

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        name,
        topic,
        onChangeName,
        onChangeTopic,
        onRegister,
        showError,
        updateError,
      } = value

      const onChangeInputName = e => {
        onChangeName(e.target.value)
      }

      const onChangeInputTopic = e => {
        onChangeTopic(e.target.value)
      }

      const onClickRegisterNowButton = e => {
        e.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          onRegister()
          onChangeName(name)
        } else {
          updateError()
        }
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <Card>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegisterFormContainer onSubmit={onClickRegisterNowButton}>
                <Heading>Let us join</Heading>
                <Label htmlFor="input-name">NAME</Label>
                <InputText
                  type="text"
                  id="input-name"
                  value={name}
                  onChange={onChangeInputName}
                  placeholder="Your name"
                />
                <Label htmlFor="topic">TOPICS</Label>
                <Select onChange={onChangeInputTopic} value={topic} id="topic">
                  {topicsList.map(each => (
                    <Option key={each.id} value={each.id}>
                      {each.displayText}
                    </Option>
                  ))}
                </Select>
                <Button type="submit">Register Now</Button>
                {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
              </RegisterFormContainer>
            </Card>
          </RegisterContainer>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Register
