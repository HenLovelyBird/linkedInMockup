import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class AboutUs extends React.Component {
  
  render() {
    return (
        <Container flex className="my-5">
          <div>{this.props.profileBio}</div>

          <FontAwesomeIcon
            onClick={this.setModal}
            className="fapencil"
            icon={faPencilAlt}
          />
        </Container>
    );
  }
}

export default AboutUs;
