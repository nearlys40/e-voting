import React from 'react'
import { Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/users/users.actions'
import NavLogout from '../../components/navigation-menu/nav-logout/nav-logout.component'
import NavLogin from '../../components/navigation-menu/nav-login/nav-login.component'
import { ReactComponent as Logo } from '../../assets/generated.svg'
import './header.styles.scss'

const Header = ({ currentUser, history }) => {
  console.log('currentUser', currentUser)

  return (
    <Row className='header'>
      <Col className='logo-container' span={12}>
        <Logo className='logo' onClick={() => history.push('/')} />
      </Col>
      <div className='spacer' />
        {
          currentUser ?
          <NavLogin />
          :
          <NavLogout />
        }
      <hr />
    </Row>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user =>
//   dispatch(setCurrentUser(user))
// })

export default connect(
  mapStateToProps,
  { setCurrentUser }
)(withRouter(Header));
