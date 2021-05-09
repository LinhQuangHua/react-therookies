import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import '../style.css';

export default function Navigate(props) {
  return (
    <div className="nav-container">
      <div className="float-left">
        <NavLink exact to="/">
          <img
            className="logo"
            src="https://vnn-imgs-f.vgcloud.vn/2020/01/16/11/nashtech-doi-nhan-dien-thuong-hieu.jpg"
            alt="logo"
          />
        </NavLink>
        <br />
        <h6 className="name-asset">Online Asset Management</h6>
      </div>
      <br />
      <Nav vertical className="nav">
        <NavLink exact to="/" className="navLink" onClick={() => props.changeWord("Home")}>
          Home
        </NavLink>
        <NavLink to="/user" className="navLink" onClick={() => props.changeWord("Manage User")}>
          Manage User
        </NavLink>
        <NavLink to="/asset" className="navLink" onClick={() => props.changeWord("Manage Asset")}>
          Manage Assset
        </NavLink>
        <NavLink to="/assignment" className="navLink" onClick={() => props.changeWord("Manage Assignment")}>
          Manage Assignment
        </NavLink>
        <NavLink to="/request" className="navLink" onClick={() => props.changeWord("Request for Returning")}>
          Request for Returning
        </NavLink>
        <NavLink to="/report" className="navLink" onClick={() => props.changeWord("Report")}>
          Report
        </NavLink>
      </Nav>
    </div>
  );
}
