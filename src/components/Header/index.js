import {Link} from 'react-router-dom'

import {LogoContainer, Logo} from './styledComponents'

const Header = () => (
  <LogoContainer>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </LogoContainer>
)

export default Header
