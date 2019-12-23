import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/homepages/homepage.component'
import FeaturesPage from './pages/features/features.component'
import AboutUsPage from './pages/about-us/about-us.component'
import LoginPage from './pages/login/login.component'
import SignUpPage from './pages/sign-up/sign-up.component'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/features' component={FeaturesPage} />
        <Route path='/about-us' component={AboutUsPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/sign-up' component={SignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
