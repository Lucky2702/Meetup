import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import Header from '../Header'

import {
  HomeContainer,
  Heading,
  Paragraph,
  Button,
  CustomHeading,
  CustomPara,
  ImageElement,
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

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <MeetupContext.Consumer>
      {value => {
        const {name, topic, isRegister} = value

        console.log(name)

        const activeTopic = topicsList.filter(each => each.id === topic)

        return (
          <>
            <Header />
            <HomeContainer>
              {isRegister ? (
                <>
                  <CustomHeading>Hello {name}</CustomHeading>
                  <CustomPara>
                    Welcome to {activeTopic[0].displayText}
                  </CustomPara>
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              ) : (
                <>
                  <Heading>Welcome to Meetup</Heading>
                  <Paragraph>Please register for the topic</Paragraph>
                  <Link to="/register" onClick={onRegister}>
                    <Button type="button">Register</Button>
                  </Link>
                  <ImageElement
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </>
              )}
            </HomeContainer>
          </>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Home
