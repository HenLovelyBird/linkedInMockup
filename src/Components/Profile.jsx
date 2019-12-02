import React from 'react';
import ProfileHeader from './ProfileHeader';

class Profile extends React.Component {
    state = {
        profile: {}
    }
    render() {
        return (
            <div>
                {this.state.profile? 
                <ProfileHeader profile={this.state.profile}/>
                <AboutUs aboutUs={this.state.profile.bio} />}
                :
                <div>Profile Loading...</div>

            </div>
            );
    }
    componentDidMount = async () => {
        let response = await fetch("https://striveschool.herokuapp.com/api/profiles/me", {
            headers: {
                "Authorization": "basic dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY="
            }
        })
        let prof = await response.json()
        this.setState({
            profile: prof
        })
    };
}

export default Profile;