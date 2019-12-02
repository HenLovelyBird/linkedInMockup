import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <Nav className="bg-dark" id="NavTop">
            <NavItem>
             <NavLink href="#">Trending</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="#" active>Podcast</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="#">Moods And Genres</NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="#">New Releases</NavLink>
          </NavItem>
          <NavItem>
              <NavLink disabled href="#">Discover</NavLink>
          </NavItem>
          <NavItem>
          <div className="align-self-right"> 
              <input type="text" placeholder="Search" 
                  value={this.props.searchValue}
                  onChange={(input) => this.props.saveSearchString(input)} />
              <button type="search" onClick={() => this.props.searchArtists()}>Search</button>
          </div>
          </NavItem>
      </Nav>
      ); 
  }
    
}

export default Navbar;