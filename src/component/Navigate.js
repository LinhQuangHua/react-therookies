import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Navigate() {
  return (
    <>
      <div className="float-left">
        <img width="100" src="https://vnn-imgs-f.vgcloud.vn/2020/01/16/11/nashtech-doi-nhan-dien-thuong-hieu.jpg" alt="" />
      </div>
      <Nav vertical style={{ backgroundColor: 'rgba(239,241,245,1)' }}>
      <NavItem>
        <NavLink style={{ color: '#ffffff', backgroundColor: 'red' }}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={{ color: 'black' }}>Manage User</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={{ color: 'black' }}>Manage Asset</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={{ color: 'black' }}>Manage Assignment</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={{ color: 'black' }}>Request for Returning</NavLink>
      </NavItem>
      <NavItem>
        <NavLink style={{ color: 'black' }}>Report</NavLink>
      </NavItem>
    </Nav>
    </>
    
  );
}
