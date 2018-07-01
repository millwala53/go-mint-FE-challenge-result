import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // Container,
    // Row,
    // Col,
    // Jumbotron,
    // Button
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
          isOpen: false
      };
  }
  toggle() {
      this.setState({
          isOpen: !this.state.isOpen
      });
  }  
  render() {
    return (
      <Navbar color="inverse" light expand="md">
        <NavbarBrand href="/">Mint Code Challenge </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink exact className='nav-link' to='/' activeClassName='active'>Market Overview</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact className='nav-link' to='/liquidity' activeClassName='active'>Liquidity Analysis</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    );
  }
}

export default Header;
