import React from 'react';
import './App.css';
import HomePage from './pages/homePage/homePage.component'
import SongsPage from './pages/songsPage/songsPage.component'
import Header from './components/header/header.component'


import { Switch, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/albums' component={SongsPage} />
        </Switch>
      </div>
    )
  }
}


export default App;
