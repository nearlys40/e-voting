import React from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/home/home.component'
import LoginPage from './pages/login/login.component'
import SignUpPage from './pages/sign-up/sign-up.component'
import AllCampaignsPage from './pages/all-campaigns/all-campaigns.component'
import NewCampaignPage from './pages/new-campaign/new-campaign.component'
import CampaignManagementPage from './pages/campaign-management/campaign-management.component'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this._timeout = null;
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/all-campaigns" component={AllCampaignsPage} />
          <Route path='/new-campaign' component={NewCampaignPage} />
          <Route path='/campaign-management' component={CampaignManagementPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
