import React from 'react'
import { Icon } from 'antd'
import './nav-login.styles.scss'
import { Col } from 'antd'
import { connect } from 'react-redux'
import { logoutUser } from '../../../redux/users/users.actions'

const NavLogin = ({ id, username, logoutUser }) => {
    return (
        <Col className='navigation-menu' span={12}>
            <div className='login-container'>
                <div className='profile-container'>
                    <span className='welcome-text'>Welcome, </span>
                    <span className='user-info'>{ username }</span>
                    <Icon className='user-profile' type='user' />
                </div>
                <div className='logout-container'>
                    <span 
                        className='logout-button'
                        onClick={() => logoutUser()}
                    >LOGOUT</span>
                </div>
            </div>
        </Col>
    )
}

export default connect(
    null,
    { logoutUser }
)(NavLogin)