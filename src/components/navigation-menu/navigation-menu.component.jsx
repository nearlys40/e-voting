import React from 'react'
import { Link } from 'react-router-dom'
import './navigation-menu.styles.scss'

class NavigationMenu extends React.Component {
    render() {
        return (
            <div className='navigation-menu'>
                <Link className='menu' to='/features'>FEATURES</Link>
                <Link className='menu' to='/about-us'>ABOUT US</Link>
                <Link className='menu' to='/login'>LOGIN</Link>
                <Link className='menu' to='/sign-up'>SIGN UP</Link>
            </div>
        );
    }
}

export default NavigationMenu;