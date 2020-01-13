import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Col } from 'antd'
import { Link as ScrollLink } from 'react-scroll'
import './nav-logout.styles.scss'

const NavLogout = () => {
    let history = useHistory()

    return (
        <Col className='navigation-menu' span={12}>
            <ScrollLink id='scroll-to-home' className='menu' activeClass="active"
                to='home' spy={true} smooth={true} offset={0} duration={500}
                onClick={() => {
                    history.push('/')
                }}>
                HOME
            </ScrollLink>
            <ScrollLink id='scroll-to-features' className='menu' activeClass="active"
                to='features' spy={true} smooth={true} offset={0} duration={500}
                onClick={() => {
                    history.push('/')
                }}>
                FEATURES
            </ScrollLink>
            <ScrollLink id='scroll-to-about-us' className='menu' activeClass="active"
                to='about-us' spy={true} smooth={true} offset={0} duration={500}
                onClick={() => {
                    history.push('/')
                }}>
                ABOUT US
            </ScrollLink>
            <Link id='to-login-page' className='menu' to='/login'>
                LOGIN
            </Link>
            <Link id='to-sign-up-page' className='menu' to='/sign-up'>
                SIGN UP
            </Link>
        </Col>
    )
}

export default NavLogout