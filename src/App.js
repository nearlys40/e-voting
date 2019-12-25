import React from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/home/home.component'
import FeaturesPage from './pages/features/features.component'
import AboutUsPage from './pages/about-us/about-us.component'
import LoginPage from './pages/login/login.component'
import SignUpPage from './pages/sign-up/sign-up.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoginOrSignUpShowing: false,
      homePath: 'home',
      featuresPath: 'features',
      aboutUsPath: 'about-us'
    }
  }

  UNSAFE_componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log('You changed the page to: ')
    });
  }

  UNSAFE_componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <div className='app'>
        <Header />
        {
          !this.state.isLoginOrSignUpShowing ?
          <HomePage /> : null
        }
        {
          !this.state.isLoginOrSignUpShowing ?
          <FeaturesPage /> : null
        }
        {
          !this.state.isLoginOrSignUpShowing ?
          <AboutUsPage /> : null
        }
        <Switch>
          <Route exact path="/login"><LoginPage /></Route>
          <Route exact path="/sign-up"><SignUpPage /></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
