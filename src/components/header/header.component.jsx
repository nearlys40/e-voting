import React from 'react'
import Footer from '../footer/footer.component'
import logo from '../../logo.svg'
import NavigationMenu from '../navigation-menu/navigation-menu.component'

import 'react-sticky-header/styles.css'
import './header.styles.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrollStatus: 'scroll stopped' };
    this._timeout = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => this.handleScroll(e.target));
  }


  handleScroll = (event) => {
    if (this._timeout) { //if there is already a timeout in process cancel it
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.setState({
        scrollStatus: 'scroll stopped'
      });
    }, 1000);

    if (this.state.scrollStatus !== 'scrolling') {
      this.setState({
        scrollStatus: 'scrolling'
      });
    }
  }

  render() {
    return (
      <div>
        <div className='header-layer' style={{ position: 'fixed' }}>
          <div className='logo-information'>
            <div>
              <img src={logo} className='logo' alt='logo' />
            </div>
            <div className='logo-title'>
              <span className='e-voting'>e-Voting</span>
              <span className='description-text'>distributed electronic voting platform</span>
            </div>
          </div>
          <NavigationMenu />
        </div>

        <div className='body'>
          <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>{this.state.scrollStatus}</h1>
          <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
        </div>

        {
          this.state.scrollStatus === 'scroll stopped' && (
            <Footer />
          )
        }
      </div>
    );
  }
}

export default Header;
