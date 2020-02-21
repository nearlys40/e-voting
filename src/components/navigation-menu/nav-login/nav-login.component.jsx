import React, { Suspense } from 'react'
import { Icon } from 'antd'
import './nav-login.styles.scss'
import { Col } from 'antd'
import { userLogoutFetch } from '../../../redux/users/users.utils'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { compose } from 'compose-react'

class NvLogin extends React.Component {

    handleClick = (history) => {
        history.push('/edit-profile')
    }

    render() {
        const { id, username, userLogoutFetch, history, t } = this.props

        return (
            <Col className='navigation-menu' span={12}>
                <div className='login-container'>
                    <div className='profile-container'>
                        <span className='welcome-text'>{t('welcome')}</span>
                        <span className='user-info' onClick={() => this.handleClick(history)}>{ username }</span>
                        <Icon className='user-profile' type='user' />
                    </div>
                    <div className='logout-container'>
                        <span
                            className='logout-button'
                            onClick={() => userLogoutFetch(history)}
                        >{t('logout').toUpperCase()}</span>
                    </div>
                </div>
            </Col>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLogoutFetch: (history) => dispatch(userLogoutFetch(history))
})

const ComposeNavLogin = compose(
    connect(null, mapDispatchToProps),
    withRouter,
    withTranslation()
)(NvLogin)

const NavLogin = (props) => {
    return (
        <Suspense fallback='loading'>
            <ComposeNavLogin {...props}/>
        </Suspense>
    )
}

export default NavLogin