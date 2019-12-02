import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';



class Navbar extends React.Component {
    render() {
        return (
            <Nav className="bg-primary" id="NavTop"> 
                <NavItem>
                    <div className="ml-5"> 
                    <input type="text" placeholder="Search" 
                     value={this.props.searchValue}
                    onChange={(input) => this.props.saveSearchString(input)} />
                    <button type="search" onClick={() => this.props.searchArtists()}>Search</button>
                    </div>
                </NavItem>
                 <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" active>My Network</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink href="#">Jobs</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink href="#">Messaging</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink disabled href="#">Notifications</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink disabled href="#">Me</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink disabled href="#">Work</NavLink>
                 </NavItem>
                 <NavItem>
                    <NavLink disabled href="#">Main></NavLink>
                 </NavItem>
             </Nav>
        ); 
    }
}

export default Navbar;