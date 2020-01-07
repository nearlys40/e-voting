import React from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/home/home.component'
import LoginPage from './pages/login/login.component'
import SignUpPage from './pages/sign-up/sign-up.component'
import AllCampaignsPage from './pages/all-campaigns/all-campaigns.component'
import NewCampaignPage from './pages/new-campaign/new-campaign.component'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginOrSignUpClicked: true,
    }
    this._timeout = null;
  }

  componentClicked = (value) => {
    this.setState({
      isLoginOrSignUpClicked: value
    })
  }

  render() {
    return (
      <div className='app'>
        <Header
          componentClicked={this.componentClicked}
        />
        <Switch>
        <Route exact path='/'
            render={() => this.state.isLoginOrSignUpClicked ?
              <HomePage /> : null
            } />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/all-campaigns" component={AllCampaignsPage} />
          <Route path='/create-new-campaign' component={NewCampaignPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
