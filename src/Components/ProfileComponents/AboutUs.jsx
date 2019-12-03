import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class AboutUs extends React.Component {
  
  render() {
    return (
        <Container flex className="">
            <div>
                <h3>Biography</h3>
            </div>
            
            <FontAwesomeIcon
            onClick={this.setModal}
            className="fapencilbio"
            icon={faPencilAlt}
          />
            <div>{this.props.profileBio}</div>

         
        </Container>
    );
  }
}

export default AboutUs;
