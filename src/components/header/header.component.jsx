import React from 'react'
import { Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NavLogout from '../../components/navigation-menu/nav-logout/nav-logout.component'
import NavLogin from '../../components/navigation-menu/nav-login/nav-login.component'
import { ReactComponent as Logo } from '../../assets/generated.svg'
import './header.styles.scss'

const Header = ({ currentUser, isAuth, history }) => {
  return (
    <Row className='header'>
      <Col className='logo-container' span={12}>
        <Logo className='logo' onClick={() => history.push('/')} />
      </Col>
      <div className='spacer' />
        {
          isAuth ?
          <NavLogin key={currentUser.id} username={currentUser.username} />
          :
          <NavLogout />
        }
      <hr />
    </Row>
  );
}

// const mapStateToProps = state => ({
//   currentUser: state.users.user
// })

const mapStateToProps = ({ users }) => ({
  currentUser: users.user,
  isAuth: users.isAuthenticated
})

export default connect(
  mapStateToProps
)(withRouter(Header));