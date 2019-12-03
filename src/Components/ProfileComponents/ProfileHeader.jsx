import React from 'react';
import BgPhoto from './BgPhoto';
import '../../index.css';
import ProfileNav from './ProfileNav';


class Profile extends React.Component {
    render() {
        return (<>
            <div>
            <BgPhoto/>
            </div>
            <div className="my5">
            <img src={this.props.profile.image} alt="profile pic" id="profilepic"/>
            </div>
            <div>
            <ProfileNav />
            </div>
            <div>
            <h2 id="profname">{this.props.profile.name}{this.props.profile.surname}</h2>
            </div>
           
            
            
        </>);
    }
}

export default Profile;