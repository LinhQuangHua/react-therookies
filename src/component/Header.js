import React from 'react';
import '../style.css';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default function Header() {
  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret style={{ paddingTop: 0, color: '#ffffff' }}>
        Hello Admin
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Change password</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
