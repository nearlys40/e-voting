import React from 'react'
import { Col } from 'antd'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import './navigation-bar.styles.scss'

class NavigationBar extends React.Component {
    render() {
        return (
            <Col className='navigation-menu' span={12}>
                <ScrollLink id='scroll-to-home' className='menu' activeClass="active"
                    to='home' spy={true} smooth={true} offset={0} duration={500}>
                    HOME
                </ScrollLink>
                <ScrollLink id='scroll-to-features' className='menu' activeClass="active"
                    to='features' spy={true} smooth={true} offset={0} duration={500}>
                    FEATURES
                </ScrollLink>
                <ScrollLink id='scroll-to-about-us' className='menu' activeClass="active"
                    to='about-us' spy={true} smooth={true} offset={0} duration={500}>
                    ABOUT US
                </ScrollLink>
                <Link id='to-login-page' className='menu' to='/login'>LOGIN</Link>
                <Link id='to-sign-up-page' className='menu' to='sign-up'>SIGN UP</Link>
            </Col>
        );
    }
}

export default NavigationBar;