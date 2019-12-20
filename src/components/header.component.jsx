import React from 'react'
import '../logo.svg'
import StickyHeader from 'react-sticky-header'
import 'react-sticky-header/styles.css'
import './header.styles.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StickyHeader header={
                <div className='header-layer'>
                    <div className='logo-information'>
                        <div><img alt='logo'/></div>
                        <div className='logo-title'>
                            <span className='e-voting'>e-Voting</span>
                            <span className='description-text'>distributed electronic voting platform</span>
                        </div>
                    </div>
                <div className='menu'>
                </div>
            </div>
            }>
        
            <div className='body'>
                <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
                        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
            </div>
            </StickyHeader>
        );
    }
}

export default Header;