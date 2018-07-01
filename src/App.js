import React, { Component } from 'react';
import './App.css';
import MarketOverviewPage from './containers/MarketOverviewPage'
import LiquidityAnalysisPage from './containers/LiquidityAnalysisPage'
import Header from './components/Header'
import Dropdown from './components/Dropdown'
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dropdown />
        <div>
          <Switch>
            <Route exact path='/' component={MarketOverviewPage}/>
            <Route exact path='/liquidity' component={LiquidityAnalysisPage}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
