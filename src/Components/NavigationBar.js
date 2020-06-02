
import React, { Component } from 'react';
import { Nav, Navbar,NavDropdown} from 'react-bootstrap';
import {link} from 'react-router-dom';
import styled from 'styled-components';
import {faTwitter}  from '@fortawesome/free-brands-svg-icons';
import {faFacebook}  from '@fortawesome/free-brands-svg-icons';
import {faTelegram}  from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp}  from '@fortawesome/free-brands-svg-icons';
import {faYoutube}  from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './actions/actions';

const Styles = styled.div`
  .navbar { background-color: yellow; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: red; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: red; }
  }
 
`;

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <Nav.Item><Nav.Link href="/create" style={{marginLeft: '3em'}}>CREATE POST</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="" style={{marginLeft: '4em'}}>{this.props.user.username}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="#" onClick={this.logout.bind(this)}>Logout</Nav.Link></Nav.Item>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
      <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/signup">signup</Nav.Link></Nav.Item></ul>
    );

    return (


      <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/trendingarticles">My Top 10</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item >
            <NavDropdown title="GADGETS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Smart Phones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Audio Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Smart watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Tablets</NavDropdown.Item>
            </NavDropdown>
            </Nav.Item> 
            <Nav.Item>
            <NavDropdown title="HOME DECOR" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Kitchen essentials</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Wallpapers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cook Ware</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Desk Setup</NavDropdown.Item>
            </NavDropdown></Nav.Item>
            <Nav.Item>
            <NavDropdown title="ELECTRONICS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Refrigerators</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Air Conditioners</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Smart TV's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Laptops</NavDropdown.Item>
            </NavDropdown></Nav.Item>
            <Nav.Item>
            <NavDropdown title="LIFESTYLE" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gifting Ideas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Productivity</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Best Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Unique Stuff</NavDropdown.Item>
            </NavDropdown>
            </Nav.Item>
            <Nav.Item>  
              <NavDropdown title="TOYS & STUFF" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action Figures</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">RC Toys</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Flight Toys</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Toddler Toys</NavDropdown.Item>
            </NavDropdown></Nav.Item>
            <Nav.Item><Nav.Link href="/about">ABOUT</Nav.Link></Nav.Item>
      
          <div class="nav-links navbar-nav">
                          <a href="https://www.facebook.com" target="_blank" class="nav-item nav-link" ><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
                          <a href="https://www.twitter.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                          <a href="https://www.youtube.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faYoutube} size="lg"/></a>
                          <a href="https://www.telegram.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faTelegram} size="lg"/></a>
                          <a href="https://www.whatsapp.com" target="_blank" class="nav-item nav-link"><FontAwesomeIcon icon={faWhatsapp} size="lg"/></a>
          </div> 
          <div className="collapse navbar-collapse">
              {this.props.auth ? userLinks : guestLinks}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>

    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.isAuthenticated,
    user:state.user
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);