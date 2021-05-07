import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../style.css';

export default function Navigate() {
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="nav-container">
      <div className="float-left">
        <img
          className="logo"
          src="https://vnn-imgs-f.vgcloud.vn/2020/01/16/11/nashtech-doi-nhan-dien-thuong-hieu.jpg"
          alt="logo"
        />
        <br />
        <h6 className="name-asset">Online Asset Management</h6>
      </div>
      <br />
      <Nav vertical className="nav">
        <NavItem className="navItem" activeClassName="active">
          <NavLink tag={RRNavLink} exact to="/" className="navLink">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink tag={RRNavLink} to="/user" className="navLink">
            Manage User
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink tag={RRNavLink} to="/asset" className="navLink">
            Manage Assset
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink tag={RRNavLink} to="/assignment" className="navLink">
            Manage Assignment
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink tag={RRNavLink} to="/request" className="navLink">
            Request for Returning
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink tag={RRNavLink} to="/report" className="navLink">
            Report
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
