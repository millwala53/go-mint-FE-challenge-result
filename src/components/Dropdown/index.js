import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tickerActions from '../../actions/tickerActions';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown : 100
    }
    this.dropdownChange = this.dropdownChange.bind(this);
  }

  dropdownChange(e){
    this.setState({dropdown : e.target.value})
    this.props.tickerActions.fetchStuff({limit: e.target.value})
  }  

  render() {
    return (
     <div>
        <div className='d-flex col-md-4'>
          <p>Items per page</p>
          <select className='form-control ml-2' value={this.state.dropdown} onChange={this.dropdownChange} >
            <option value={10}  >10</option>
            <option value={50}  >50</option>
            <option value={100} >100</option>
          </select>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
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
)(Dropdown);
