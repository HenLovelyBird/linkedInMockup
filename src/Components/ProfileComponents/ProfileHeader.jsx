import React from "react";
import "../../index.css";
import ProfileNav from "./ProfileNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Row } from "reactstrap";
import ModalPicture from './ModalPicture'

class Profile extends React.Component {
  state = { 
    modalOpen: false
  }
  render() {
    return (
      <>
        <Row>
          <div className="col my-5" fluid>
            <img 
              onClick={() => {this.setState({modalOpen: !this.state.modalOpen})}}
              src={this.props.profile.image}
              alt="profile pic"
              id="profilepic"
            />
          </div>
          {this.state.modalOpen && <ModalPicture profile={this.props.profile} modalOpen={this.state.modalOpen}/>}
          {/* <FontAwesomeIcon
            onClick={this.setModal}
            className="fapencil"
            icon={faPencilAlt}
          /> */}
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
