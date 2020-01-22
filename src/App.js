import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/private-route.component'
import Header from './components/header/header.component'
import HomePage from './pages/home/home.component'
import LoginPage from './pages/login/login.component'
import SignUpPage from './pages/sign-up/sign-up.component'
import AllCampaignsPage from './pages/all-campaigns/all-campaigns.component'
import NewCampaignPage from './pages/new-campaign/new-campaign.component'
import CampaignManagementPage from './pages/campaign-management/campaign-management.component'
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route
          exact path='/'
          component={HomePage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/sign-up"
          component={SignUpPage}
        />
        <PrivateRoute
          path="/all-campaigns"
          component={AllCampaignsPage}
        />
        <PrivateRoute
          path='/new-campaign'
          component={NewCampaignPage}
        />
        <PrivateRoute
          path='/campaign-management'
          component={CampaignManagementPage}
        />
      </Switch>
    </div>
  )
}

export default App