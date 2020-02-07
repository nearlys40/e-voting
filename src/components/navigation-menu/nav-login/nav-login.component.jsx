import React from 'react'
import { Icon } from 'antd'
import './nav-login.styles.scss'
import { Col } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logoutUser } from '../../../redux/users/users.actions'

class NavLogin extends React.Component {

    handleClick = (history) => {
        history.push('/edit-profile')
    }

    render() {
        const { id, username, logoutUser, history } = this.props

        return (
            <Col className='navigation-menu' span={12}>
                <div className='login-container'>
                    <div className='profile-container'>
                        <span className='welcome-text'>Welcome, </span>
                        <span className='user-info' onClick={() => this.handleClick(history)}>{ username }</span>
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
}

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(
    null,
    mapDispatchToProps
)(withRouter(NavLogin))