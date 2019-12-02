import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="my5">
            <h2>{this.props.name}{this.props.surname}</h2>
            <img src={this.props.profile.image} alt="profile pic"/>
            </div>
        );
    }
}

export default Profile;