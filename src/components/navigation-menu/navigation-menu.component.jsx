import React from 'react'
import { Col } from 'antd'
import { Link } from 'react-router-dom'
import './navigation-menu.styles.scss'

class NavigationMenu extends React.Component {
    render() {
        return (
            <Col className='navigation-menu' span={12}>
                <Link className='menu' to='/features'>FEATURES</Link>
                <Link className='menu' to='/about-us'>ABOUT US</Link>
                <Link className='menu' to='/login'>LOGIN</Link>
                <Link className='menu' to='/sign-up'>SIGN UP</Link>
            </Col>
        );
    }
}

export default NavigationMenu;