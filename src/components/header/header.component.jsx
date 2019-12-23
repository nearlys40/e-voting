import React from 'react'
import NavigationMenu from '../navigation-menu/navigation-menu.component'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom'
import './header.styles.scss'

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          <Link className='logo-container' to='/'>
            <Logo className='logo' />
          </Link>
          <div className='title'>
            <span className='e-voting'>eVOTING</span>
            <span className='description'>distributed electronic voting platforms</span>
          </div>
          <NavigationMenu />
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default Header;
