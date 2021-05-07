import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../style.css';

export default function Navigate() {
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="nav-container">
      <div className="float-left">
        <img className="logo"
          src="https://vnn-imgs-f.vgcloud.vn/2020/01/16/11/nashtech-doi-nhan-dien-thuong-hieu.jpg"
          alt="logo"
        />
        <br />
        <h6 className="name-asset">Online Asset Management</h6>
      </div>
      <br />
      <Nav
        vertical
        className="nav"
      >
        <NavItem className="navItem">
          <Link to="/" className="link">
            <NavLink
              className="navLink"
              activeStyle={{
                backgroundColor: 'rgba(207, 35, 56, 1)',
                color: '#ffffff'
              }}
            >
              Home
            </NavLink>
          </Link>
        </NavItem>
        <NavItem className="navItem">
          <Link to="/user" className="link">
            <NavLink className="navLink">Manage User</NavLink>
          </Link>
        </NavItem>
        <NavItem className="navItem">
          <Link to="/asset" className="link">
            <NavLink className="navLink">Manage Assset</NavLink>
          </Link>
        </NavItem>
        <NavItem className="navItem">
          <Link to="/assignment" className="link">
            <NavLink className="navLink">Manage Assignment</NavLink>
          </Link>
        </NavItem>
        <NavItem className="navItem">
          <Link to="/request" className="link">
            <NavLink className="navLink">Request for Returning</NavLink>
          </Link>
        </NavItem>
        <NavItem className="navItem">
          <Link to="/report" className="link">
            <NavLink className="navLink">Report</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
}
