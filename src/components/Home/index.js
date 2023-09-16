import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'

import {
  HomeContainer,
  Heading,
  Paragraph,
  Button,
  CustomHeading,
  CustomPara,
  ImageElement,
  Logo,
} from './styledComponents'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, activeTopic, isRegister} = value
      console.log(activeTopic)

      const renderHomeRegisterView = () => (
        <>
          <Heading>Welcome to Meetup</Heading>
          <Paragraph>Please register for the topic</Paragraph>
          <Link to="/register">
            <Button type="button">Register</Button>
          </Link>
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </>
      )

      const renderRegisterView = () => (
        <>
          <CustomHeading>Hello {name}</CustomHeading>
          <CustomPara>Welcome to {activeTopic}</CustomPara>
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </>
      )

      return (
        <HomeContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          {isRegister ? renderRegisterView() : renderHomeRegisterView()}
        </HomeContainer>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
