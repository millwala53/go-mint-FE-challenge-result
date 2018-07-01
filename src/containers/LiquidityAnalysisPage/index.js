import React, { Component } from 'react';
import './index.css';
import {ScatterplotChart} from 'react-easy-chart';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tickerActions from '../../actions/tickerActions';
import PropTypes from 'prop-types';


class LiquidityAnalysisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false,
      obj:{},
      style:{
        top: '0px',
        left:'0px',
      },
      y: 0,
      x: 0
    }
    this.getData = this.getData.bind(this);
    this.mouseOverHandler = this.mouseOverHandler.bind(this)
    this.mouseOutHandler= this.mouseOutHandler.bind(this) 
  }

  getData(){
    this.props.tickers.map( (coin) => {
      coin.x = parseFloat(coin.market_cap_usd)
      coin.y = parseFloat(coin['24h_volume_usd'])
      coin.z = parseFloat(coin.percent_change_24h)
    })
    return this.props.tickers
  }

  componentWillMount() { 
    if(!this.props.tickers || this.props.tickers.length === 0 ){
      this.props.tickerActions.fetchStuff({sort:'rank'});
    }
  }

  mouseOverHandler(d,e){
    let pos = {
      left: e.x + 'px',
      top: e.y + 'px'
    }
    this.setState({style: pos, obj: d, showToolTip: true})
  }
   mouseOutHandler(){
    this.setState({showToolTip: false})
   }

  render() {
    return (
      <div className='container-fluid'>
        {this.state.showToolTip === true &&
          <div style={this.state.style} className='p-2 tooltip-chart text-left'>
            <p className='m-0' >Name : {this.state.obj.name}</p>
            <p className='m-0'>Rank : {this.state.obj.rank}</p>
            <p className='m-0'>Price: ${this.state.obj.price_usd}</p>
            <p className='m-0'>Market Cap : {this.state.obj.market_cap_usd}</p>
          </div>
        }
       	<ScatterplotChart
          style={{ '.label': { fill: 'black' } }}
    	    data={this.getData()}
    	    axes
          margin={{top: 20, right: 10, bottom: 30, left: 120}}
    	    axisLabels={{x: "Volume", y: "Market Cap"}}
          width={1000}
          height={400}
    	    grid
          mouseOverHandler={this.mouseOverHandler.bind(this)}
          mouseOutHandler={this.mouseOutHandler.bind(this)}
  	    />
      </div>
    )
  }
}

LiquidityAnalysisPage.propTypes = {
  tickerActions: PropTypes.object,
  tickers: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    tickers: state.tickers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tickerActions: bindActionCreators(tickerActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LiquidityAnalysisPage);

