import React from 'react'
import { Row, Col } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import DrawerToggleButton from '../drawer-toggle-button/drawer-toggle-button.component'
import { ReactComponent as Logo } from '../../assets/generated.svg'
import './header.styles.scss'

const Header = (props) => {
  let history = useHistory()

  return (
    <Row className='header'>
      <Col className='logo-container' span={12}>
        <Logo className='logo' />
      </Col>
      {/* <Col className='title' span={9}>
        <span className='e-voting'>e V O T I N G</span>
        <span className='description'>distributed electronic voting platforms</span>
      </Col> */}
      <div className='spacer' />
      <Col className='navigation-menu' span={12}>
        <ScrollLink id='scroll-to-home' className='menu' activeClass="active"
          to='home' spy={true} smooth={true} offset={0} duration={500}
          onClick={() => {
            props.componentClicked(true)
            history.push('/')
          }}>
          HOME
        </ScrollLink>
        <ScrollLink id='scroll-to-features' className='menu' activeClass="active"
          to='features' spy={true} smooth={true} offset={0} duration={500}
          onClick={() => {
            props.componentClicked(true)
            history.push('/')
          }}>
          FEATURES
        </ScrollLink>
        <ScrollLink id='scroll-to-about-us' className='menu' activeClass="active"
          to='about-us' spy={true} smooth={true} offset={0} duration={500}
          onClick={() => {
            props.componentClicked(true)
            history.push('/')
          }}>
          ABOUT US
        </ScrollLink>
        <Link id='to-login-page' className='menu' to='/login'
          onClick={() => {
            props.componentClicked(false)
          }}>
          LOGIN
        </Link>
        <Link id='to-sign-up-page' className='menu' to='/sign-up'
          onClick={() => {
            props.componentClicked(false)
          }}>
          SIGN UP
        </Link>
      </Col>
      <DrawerToggleButton />
      <hr />
    </Row>
  );
}

export default Header;
