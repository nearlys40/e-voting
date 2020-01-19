import React from 'react'
import { Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NavLogout from '../../components/navigation-menu/nav-logout/nav-logout.component'
import NavLogin from '../../components/navigation-menu/nav-login/nav-login.component'
import { ReactComponent as Logo } from '../../assets/generated.svg'
import './header.styles.scss'

const Header = ({ user, history }) => {
  return (
    <Row className='header'>
      <Col className='logo-container' span={12}>
        <Logo className='logo' onClick={() => history.push('/')} />
      </Col>
      <div className='spacer' />
        {
          (user && user.length > 0) ?
          user.map(
            ({id, ...otherProps}) => (<NavLogin key={id} {...otherProps} />)
          )
          :
          <NavLogout />
        }
      <hr />
    </Row>
  );
}

const mapStateToProps = ({ users: { user }}) => ({
  user
})

export default connect(
  mapStateToProps
)(withRouter(Header));
