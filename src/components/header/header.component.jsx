import React from 'react'
import { Row, Col } from 'antd'
import NavigationBar from '../navigation-bar/navigation-bar.component'
import DrawerToggleButton from '../drawer-toggle-button/drawer-toggle-button.component'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

class Header extends React.Component {
  render() {
    return (
      <Row className='header'>
        <Col className='logo-container'>
          <Logo className='logo' />
        </Col>
        <Col className='title' span={9}>
          <span className='e-voting'>e V O T I N G</span>
          <span className='description'>distributed electronic voting platforms</span>
        </Col>
        <div className='spacer' />
        <NavigationBar />
        <DrawerToggleButton />
      </Row>
    );
  }
}

export default Header;
