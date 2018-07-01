import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tickerActions from '../../actions/tickerActions';
import config from '../../config/appconfig' 
import PropTypes from 'prop-types';


class MarketOverviewPage extends Component {

  componentWillMount() { 
     this.props.tickerActions.fetchStuff({sort:'rank'});
  }
  
  renderData() {
    return this.props.tickers.map(coin => {
      return (
          <tr key={coin.id}>
            <td>{coin.rank }</td>
            <td>{coin.name }</td>
            <td>$ {coin.price_usd }</td>
            <td>{coin.percent_change_24h }</td>
            <td>{coin.market_cap_usd }</td>
            <td>{coin["24h_volume_usd"] }</td>
          </tr>
      );
    });
  }

  renderHeaders() {
    return (
      <thead>
        <tr>
          {
            config.fields.map((field)=>{
              return (
                <th key={field.label} >{field.label}</th>
              )
            })
          }
        </tr>
      </thead>
    )
  }

  render() {
    return (
    <div className='container' >
      <table className="table table-bordered">
        {this.renderHeaders()}
        <tbody>
          {this.renderData()}
        </tbody>
      </table>
    </div> 
    )
  }
}

MarketOverviewPage.propTypes = {
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
)(MarketOverviewPage);
