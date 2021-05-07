import React from 'react';
import '../style.css';
import { UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem}  from 'reactstrap';


export default function Header(props) {
  return (
         <UncontrolledDropdown>
              <DropdownToggle nav caret style={{ paddingTop: 0, color: '#ffffff'}}>
                Hello Admin
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Change password
                </DropdownItem>
                <DropdownItem>
                  Logout 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
  );
}
