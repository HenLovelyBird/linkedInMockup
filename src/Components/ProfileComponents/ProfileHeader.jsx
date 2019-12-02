import React from 'react';
import BgPhoto from './BgPhoto';
import '../../index.css';
import ProfileNav from './ProfileNav';


class Profile extends React.Component {
    render() {
        return (<>
            <BgPhoto />
            <div className="my5">
            <h2>{this.props.profile.name}{this.props.profile.surname}</h2>
            <img src={this.props.profile.image} alt="profile pic" id="profilepic"/>
            <ProfileNav onClick={() => this.setState({dropdownOpen: true})}/>
            </div>
        </>);
    }
}

export default Profile;