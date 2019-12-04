import React from "react";
import BgPhoto from "./BgPhoto";
import "../../index.css";
import ProfileNav from "./ProfileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Row } from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Row>
          <div className="col my-5" flex>
            <img
              src={this.props.profile.image}
              alt="profile pic"
              id="profilepic"
            />
          </div>
          <FontAwesomeIcon
            onClick={this.setModal}
            className="fapencil"
            icon={faPencilAlt}
          />
          <div className="col">
            <ProfileNav />
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
