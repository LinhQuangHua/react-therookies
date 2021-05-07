import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import '../style.css';

export default function Navigate() {
  const [selected, setSelected] = React.useState(0);
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
          <NavLink exact to="/" className="navLink">
            Home
          </NavLink>
          <NavLink to="/user" className="navLink">
            Manage User
          </NavLink>
          <NavLink to="/asset" className="navLink">
            Manage Assset
          </NavLink>
          <NavLink to="/assignment" className="navLink">
            Manage Assignment
          </NavLink>
          <NavLink  to="/request" className="navLink">
            Request for Returning
          </NavLink>
          <NavLink to="/report" className="navLink">
            Report
          </NavLink>
      </Nav>
    </div>
  );
}
