import React from 'react'
import { Icon } from 'antd'
import './nav-login.styles.scss'
import { Col } from 'antd'

const NavLogin = ({ displayName = 'Mr.Apple' }) => {
    return (
        <Col className='navigation-menu' span={12}>
            <div className='login-container'>
                <div className='profile-container'>
                    <span className='welcome-text'>Welcome, </span>
                    <span className='user-info'>{displayName}</span>
                    <Icon className='user-picture' type='user' />
                </div>
                <div className='logout-container'>
                    <span className='logout-button'>LOGOUT</span>
                </div>
                
            </div>
        </Col>
    )
}

export default NavLogin