import React from "react";
import "../../index.css";
import ProfileNav from "./ProfileNav";
import { Row } from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Row>
          <div className="col my-5" fluid>
            <img
              src={this.props.profile.image}
              alt="profile pic"
              id="profilepic"
            />
          </div>
        
          <div className="col">
            <ProfileNav profileInfo={this.props.profile}/>
          </div>
          <div className="col">
            <h2 id="profname">
              {this.props.profile.name}
              {this.props.profile.surname}
            </h2>
          </div>
        </Row>
      </>
    );
  }
}

export default Profile;
