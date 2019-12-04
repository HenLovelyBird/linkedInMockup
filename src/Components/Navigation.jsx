import React from 'react';
import {Nav, NavItem,InputGroupAddon, Input, NavLink,InputGroupText, Navbar, NavbarBrand, InputGroup, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faSearch, faHome, faUsers, faComments, faBell, faTh } from '@fortawesome/free-solid-svg-icons'
import '../index.css'
import ProfilesDropDown from './ProfilesDropDown';



class Navigation extends React.Component {
   state = {
      dropdownOpen: false,
      setDropdownOpen: false,
      srch: ''
   }

   toggleDropdown = () => {
      if(this.state.setDropdownOpen === false){
         this.setState({
            setDropdownOpen: true,
            dropdownOpen: true,
         })
      }else if(this.state.setDropdownOpen === true){
         this.setState({
            setDropdownOpen: false,
            dropdownOpen: false,
         })
      }
   }

   handleSearch = async(ev) => {
     let username = "user16"
     let password = "c9WEUxMS294hN6fF"
     let token = btoa(username + ":" + password)
     console.log(ev.target.value)
     if(ev.target.value.length > 4){
      let response = await fetch("https://striveschool.herokuapp.com/api/profile/" + ev.target.value, {
         method: "GET",
         headers: {
             "authorization" : "Basic " + token
         }
      })
      let usersData = await response.json()
      this.setState({
            srch: usersData
      })
     }
      // if(ev.target.value.length === 0) {
      //    this.setState({
      //       setDropdownOpen: false,
      //       dropdownOpen: false,
      //    })
      // } else if(ev.target.value.length > 0){
      //    this.setState({
      //       setDropdownOpen: true,
      //       dropdownOpen: true,
      //    })
      // }
   }
    render() {
      return (
         <Navbar className="nav-top">
            <Nav className="mr-auto"> 
               <NavbarBrand href="/">
                  <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin}/>
               </NavbarBrand>
               <NavItem>
                  <div className="search-div">
                     <InputGroup className="search-input">
                        <InputGroupAddon  addonType="prepend">
                           <InputGroupText>                    
                              <FontAwesomeIcon className="icon-search" icon={faSearch}/>
                           </InputGroupText>
                        </InputGroupAddon>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                           <DropdownToggle
                           tag="span"
                           data-toggle="dropdown"
                           aria-expanded={this.dropdownOpen}
                           >
                              <Input onChange={this.handleSearch} className="main-input" id="main-search-unput" placeholder="Search" />
                           </DropdownToggle>
                           <DropdownMenu>
                              <ProfilesDropDown searchQuery={this.state.srch} toggleProfileDropdown={this.toggleDropdown}/>
                           </DropdownMenu>
                        </Dropdown>
                     </InputGroup>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                     <NavLink href="#">Home</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faUsers}/>
                     <NavLink href="#" active>My Network</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faBriefcase}/>
                     <NavLink href="#">Jobs</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faComments}/>
                     <NavLink href="#">Messaging</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faBell}/>
                     <NavLink href="#">Notifications</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <div className="profile-image-div"></div>
                     <NavLink href="#">Me</NavLink>
                  </div>
               </NavItem>
               <div className="vl"></div>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faTh}/>
                     <NavLink href="#">Work</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                     <NavLink href="#">Learning</NavLink>
                  </div>
               </NavItem>
            </Nav>
         </Navbar>
      ); 
   }
}

export default Navigation;