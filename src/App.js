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
  constructor(props) {
    super(props)
    this.state = {
      isLoginOrSignUpClicked: false
    }
  }

  showComponent = () => {
    this.setState({
      isLoginOrSignUpClicked: true
    })
  }

  hideComponent = () => {
    this.setState({
      isLoginOrSignUpClicked: false
    })
  }

  render() {
    return (
      <div className='app'>
        <Header
          showComponent={this.showComponent}
          hideComponent={this.hideComponent}
        />

        { this.state.isLoginOrSignUpClicked === true && (<HomePage />) }
        { this.state.isLoginOrSignUpClicked === true && (<FeaturesPage />) }
        { this.state.isLoginOrSignUpClicked === true && (<AboutUsPage />) }

        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
