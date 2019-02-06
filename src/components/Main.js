import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Components from './common';
import { Link } from 'react-router-dom';
import '../styles/main.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Scrollbars } from 'react-custom-scrollbars';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import c5 from '../images/c5.jpg'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    var iconEl = document.getElementById('root');
    iconEl.src = c5;
  return (<div className="top-header">
  <Scrollbars style={ {width: '100%', height: '100%', minHeight: 550} } >
      <div className="header">
        <div className="logo">
          <picture>
            <img src={require("../images/Play-School.jpg")} alt=""/>
          </picture>
        </div>
        <span className="center-header"><p>The future begins here!</p><p>Contact us for Admissions enquiry.</p></span>
        <div className="header-contact">
          <div>
            <i class="fa fa-envelope" aria-hidden="true"> <a href="mailto:example@gmail.com?Subject=Play%20School" target="_blank" rel="noopener noreferrer">example@gmail.com</a> </i>
          </div>
          <div>
            <i class="fa fa-phone phone" aria-hidden="true"> +1(888)888-8888 </i>
          </div>
          <div>
           <i class="fa fa-map-marker" aria-hidden="true"> Address Colony, Area, City, State zip-code, Country </i>
          </div>
        </div>
      </div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse}/>
          <MDBCollapse isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav>
          <MDBNavItem>
            <MDBNavLink to="/home">Home</MDBNavLink>
          </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/programmes">Programmes</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/facilities">Facilities</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/faculty">Faculty</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/gallery">Gallery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact Us</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <div className="content">
        <Redirect from="/" to="/home" />
        <Route exact path='/home' render={() => <Components.Home selectedTabId={this.props.selectedTabId} updateMainNavId={this.props.updateMainNavId}/>}/>
        <Route path='/about' component={Components.About}/>
        <Route path='/programmes' render={(props) => <Components.Products updateMainNavId={this.props.updateMainNavId} {...props}/>}/>
        <Route path='/facilities' render={(props) => <Components.Infrastructure updateMainNavId={this.props.updateMainNavId} {...props}/>}/>
        <Route path='/faculty' component={Components.Faculty}/>
        <Route path='/gallery' component={Components.Gallery}/>
        <Route path='/contact' component={Components.Contact}/>
    </div>
    </Scrollbars>
    </div>)
}
}

export default Main
