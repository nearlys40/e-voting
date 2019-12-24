import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'antd'
import './drawer-toggle-button.styles.scss'
import { Drawer, Button, Icon } from 'antd'

class DrawerToggleButton extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <Col className='toggle-button'>
        <Button shape="rectangle" onClick={this.showDrawer}
          style={{
            height: '100%',
            width: '75px',
            background: 'transparent',
            border: 'none'
          }}
        >
          <Icon type='menu' />
        </Button>
        <Drawer
          width={"30%"}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{background: '#abdfe6'}}
        >
          <div className='drawer-menu'>
            <Link className='menu' to='/' style={{width: '100%'}}>HOME</Link><br />
            <Link className='menu' to='/features' style={{width: '100%'}}>FEATURES</Link><br />
            <Link className='menu' to='/about-us' style={{width: '100%'}}>ABOUT US</Link><br />
            <Link className='menu' to='/login' style={{width: '100%'}}>LOGIN</Link><br />
            <Link className='menu' to='/sign-up' style={{width: '100%'}}>SIGN UP</Link><br />
          </div>
        </Drawer>
      </Col>
    );
  }
}

export default DrawerToggleButton;