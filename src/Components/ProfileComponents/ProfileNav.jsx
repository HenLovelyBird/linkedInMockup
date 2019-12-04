import React from "react";
import { Container, Row, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileNav extends React.Component {
    state= {
        dropdownOpen: false
    }
  render() {
    return (<>
    <Container flex className="col-2 justify-content-end">
      <Row>
      <div>
        <ButtonDropdown isOpen={this.state.dropdownOpen} >
          <DropdownToggle onClick={() => this.setState({ dropdownOpen: !this.state.dropdownOpen})} 
          caret className="dropdownbtns">Add Profile Section</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Intro</DropdownItem>
            <DropdownItem disabled>About</DropdownItem>
            <DropdownItem>Background</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Skills</DropdownItem>
            <DropdownItem>Accomplishments</DropdownItem>
            <DropdownItem>Additional information</DropdownItem>
            <DropdownItem>Supported languages</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      </Row>
      <Row className="justify-content-end col-1">
       <div><Button primary id="morebtn">More...</Button></div>
       </Row>
       </Container>
    </>);
  }
}

export default ProfileNav;
