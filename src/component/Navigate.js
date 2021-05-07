import React from 'react';
import { Link } from 
"react-router-dom";

import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Navigate() {
  const [selected, setSelected] = React.useState(0)
  return (
    <div style={{ marginLeft: 20}}>
      <div className="float-left">
        <img width="120" src="https://vnn-imgs-f.vgcloud.vn/2020/01/16/11/nashtech-doi-nhan-dien-thuong-hieu.jpg" alt="logo" />
        <br/>
        <h6 style={{ color: 'red'}}>Online Asset Management</h6>
      </div>
      <br/>
      <Nav vertical style={{ backgroundColor: 'rgba(239,241,245,1)' }}>
      <NavItem>
            <Link to="/" style={{ textDecoration: 'none' }}>
             <NavLink style={{ color: '#000000' }}>
                Home
            </NavLink>
          </Link>
      </NavItem>
      <NavItem>
        <Link to="/user" style={{ textDecoration: 'none' }}>
            <NavLink style={{ color: '#000000' }}>
                Manage User
            </NavLink>
          </Link>
      </NavItem>
      <NavItem>
         <Link to="/asset" style={{ textDecoration: 'none' }}>
            <NavLink style={{ color: '#000000' }}>
                Manage Assset
            </NavLink>
          </Link>
      </NavItem>
      <NavItem>
        <Link to="/assignment" style={{ textDecoration: 'none' }}>
            <NavLink style={{ color: '#000000' }}>
                Manage Assignment
            </NavLink>
          </Link>
      </NavItem>
      <NavItem>
         <Link to="/request" style={{ textDecoration: 'none' }}>
            <NavLink style={{ color: '#000000' }}>
                Request for Returning
            </NavLink>
          </Link>
      </NavItem>
      <NavItem>
         <Link to="/report" style={{ textDecoration: 'none' }}>
            <NavLink style={{ color: '#000000' }}>
                Report
            </NavLink>
          </Link>
      </NavItem>
    </Nav>
    </div>
    
  );
}
