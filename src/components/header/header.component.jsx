import React from 'react'
import { Row, Col } from 'antd'
import DrawerToggleButton from '../../lib-learning/drawer-toggle-button.component'
import NavigationMenu from '../navigation-menu/navigation-menu.component'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import './header.styles.scss'

class Header extends React.Component {
  render() {
    return (
      <div>
        <Row className='header' gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          <Col className='logo-container' span={2}>
            <Link to='/'>
              <Logo className='logo' />
            </Link>
          </Col>
          <Col className='title' span={9}>
            <span className='e-voting'>e V O T I N G</span>
            <span className='description'>distributed electronic voting platforms</span>
          </Col>
          <div className='spacer'/>
          <NavigationMenu />
          <DrawerToggleButton />
        </Row>
        <div className='line' />
      </div>
    );
  }
}

export default Header;
