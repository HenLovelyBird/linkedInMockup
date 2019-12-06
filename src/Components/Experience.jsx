import React from "react";
import { Container, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import ExperienceModal from "./ExperienceModal.jsx";
import ExperiencesPosted from './ExperiencesPosted';

class Experience extends React.Component {
  state = {
    experiences: "",
    modalOpen: false
  };
  setModal = () => {
    if (this.state.modalOpen === true) {
      this.setState({
        modalOpen: false
      });
    } else if (this.state.modalOpen === false) {
      this.setState({
        modalOpen: true
      });
    }
  };



  render() {
    console.log(this.state.experiences);
    return (
      <>
        <Container d-flex flex style={{ height: "75vh" }}>
          <Row h-100>
            <Col className="md-12 pt-2">
            {/* <div d-flex className="col-md-12 justify-contents-center pt-5">
              <div
                d-flex
                flex
                className="d-flex flex justify-content-between align-items-center pt-2"
              > */}
                <h3>Experience</h3>
                {this.state.experiences &&
                this.state.experiences.map((experience, index) => (
                    <ExperiencesPosted allExp={experience} key={index} />))};
                </Col>

                {this.state.modalOpen && (
                  <ExperienceModal
                    setmodal={this.setModal}
                    experience={this.state.experiences}
                    open={this.state.modalOpen}
                  />
                )}
               
               
              {/* </div> */}
                  <Col>
                  <FontAwesomeIcon
                  onClick={this.setModal}
                  className="editexperience"
                  icon={faPencilAlt}
                />
                </Col>
            {/* </div> */}
            
          </Row>
        </Container>
      </>
    )
  }

  componentDidMount = async () => {
    let username = "user16";
    let password = "c9WEUxMS294hN6fF";
    let token = btoa(username + ":" + password);
    let response = await fetch(
      "https://striveschool.herokuapp.com/api/profile/user16/experiences",
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + token
        }
      }
    )
    let exp = await response.json();
    this.setState({
      experiences: exp
    })
  }
}

export default Experience;
