import {withRouter} from 'react-router-dom'

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

const Register = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        name,
        isName,
        topicList,
        onChangeName,
        onChangeActiveTopic,
        onRegisterNow,
        onName,
      } = value
      const onChangeInputName = e => {
        onChangeName(e.target.value)
      }

      const onChangeTopic = e => {
        onChangeActiveTopic(e.target.value)
      }

      const onClickRegisterNowButton = e => {
        e.preventDefault()
        if (name === '') {
          onName()
        } else {
          onRegisterNow()
          onChangeName(name)
          const {history} = props
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
                value={name}
                onChange={onChangeInputName}
                placeholder="Your name"
              />
              <Label htmlFor="topic">TOPICS</Label>
              <Select onChange={onChangeTopic} id="topic">
                {topicList.map(each => (
                  <Option key={each.id} value={each.id}>
                    {each.displayText}
                  </Option>
                ))}
              </Select>
              <Button type="submit">Register Now</Button>
              {isName && <ErrorMsg>Please enter your name</ErrorMsg>}
            </RegisterFormContainer>
          </Card>
        </RegisterContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default withRouter(Register)
