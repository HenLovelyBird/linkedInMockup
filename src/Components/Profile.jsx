import React from 'react';
import ProfileHeader from './ProfileComponents/ProfileHeader';
import AboutUs from './ProfileComponents/AboutUs';
import ProfileModal from './ProfileModal';
import {Container} from 'reactstrap';
import BottomProfile from './ProfileComponents/BottomProfile';


class Profile extends React.Component {
    state = {
        profile: {},
        modalOpen: false,
        dropdownOpen: false
    }
    setModal = () => {
        if(this.state.modalOpen === true){
            this.setState({
                modalOpen: false
            })
        } else if (this.state.modalOpen === false){
            this.setState({
                modalOpen: true
            })
        }
    }

    render() {
        return (<>
        <Container flex id="profilecontainer">
            <div>
                {this.state.profile && 
               <div><ProfileHeader profile={this.state.profile} /></div>}
                
                <div>{this.state.modalOpen && <ProfileModal 
                setmodal={this.setModal} profile={this.state.profile} open={this.state.modalOpen} />}</div> 
           </div>
           <BottomProfile />
                
           </Container>
           
           </>);
    }
    componentDidMount = async () => {
        let username = "user16"
        let password = "c9WEUxMS294hN6fF"
        let token = btoa(username + ":" + password)
        let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/me", {
            method: "GET",
            headers: {
                "Authorization": "Basic " + token
      
            }
        })
        let prof = await response.json()
        console.log(prof);
        this.setState({
            profile: prof
        })
    };
}

export default Profile;

