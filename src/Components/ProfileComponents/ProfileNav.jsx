import React from "react";
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileNav extends React.Component {
    state= {
        dropdownOpen: false
    }
  render() {
    return (
      <div className="justify-content-end col-4">
        <ButtonDropdown isOpen={this.state.dropdownOpen} >
        
          <DropdownToggle onClick={() => this.setState({ dropdownOpen: !this.state.dropdownOpen})} caret>Add Profile Section</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Intro</DropdownItem>
            <DropdownItem disabled>About</DropdownItem>
            <DropdownItem>Background</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Skills</DropdownItem>
            <DropdownItem>Accomplishments</DropdownItem>
            <DropdownItem>Additional information</DropdownItem>
            <DropdownItem>Supported languages/DropdownItem></DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <Button>More...</Button>
      </div>
    );
  }
}

export default ProfileNav;
