import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
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
      <Nav vertical className="nav" >
        <NavItem className="navItem" >
          <NavLink exact to="/" className="navLink" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink to="/user" className="navLink">
            Manage User
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink to="/asset" className="navLink">
            Manage Assset
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink to="/assignment" className="navLink">
            Manage Assignment
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink to="/request" className="navLink">
            Request for Returning
          </NavLink>
        </NavItem>
        <NavItem className="navItem">
          <NavLink to="/report" className="navLink">
            Report
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
