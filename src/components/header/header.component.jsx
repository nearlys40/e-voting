import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavLogout from '../../components/navigation-menu/nav-logout/nav-logout.component'
import NavLogin from '../../components/navigation-menu/nav-login/nav-login.component'
import { ReactComponent as Logo } from '../../assets/generated.svg'
import './header.styles.scss'

const Header = ({ currentUser, isAuth, history }) => {
  return (
    <Row className='app-header'>
      <Col className='logo-container' span={12}>
        <Logo className='logo' onClick={() => history.push('/')} />
      </Col>
      <div className='spacer' />
        {
          (currentUser && isAuth) ?
          <NavLogin key={currentUser.id} username={currentUser.username} />
          :
          <NavLogout />
        }
      <hr />
    </Row>
  );
}

const mapStateToProps = ({ users }) => ({
  currentUser: users.currentUser, 
  isAuth: users.isAuth
})

export default connect(mapStateToProps, null)(withRouter(Header))