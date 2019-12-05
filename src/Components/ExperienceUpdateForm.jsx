import React from "react";
import { Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

class ExperienceUpdateForm extends React.Component {
  state = {
    experiences: "",
    closeModal: false,
    clearForm: false

  };
  updateObj = ev => {
    let input = ev.target.value;
    console.log("value", input);
    let idInput = ev.target.id;
    console.log("id", idInput);
    this.state.experiences[idInput] = input;
    console.log(this.state);
  };

  handleSubmit = async event => {
    event.preventDefault();
    let username = "user16";
    let password = "c9WEUxMS294hN6fF";
    let token = btoa(username + ":" + password);
    let response = await fetch(
      "https://striveschool.herokuapp.com/api/profiles/" + username,
      {
        method: "PUT",
        body: JSON.stringify(this.state.experiences),
        headers: {
          Authorization: "Basic " + token,
          "Content-Type": "application/json"
        }
      }
    );
  };

  handleClear = () => {
      this.state({clearForm: true})
  } 
  
  render() {
    return (
      <div className="modal-div">
        <div className="flex md-4 mr-5">
          <img
            className="modal-bg"
            src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
            alt="linkedIn background"
          ></img>
        </div>
        {/* <img src={this.props.profileInfo.image} className="modal-img" alt="profile pic"/> */}
        <Form className="update-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="examplePassword">Company</Label>
            <Input
              type="text"
              onChange={this.updateObj}
              name="password"
              id="company"
              placeholder={this.props.experiences.company}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Position</Label>
            <Input
              type="email"
              onChange={this.updateObj}
              name="email"
              id="position"
              placeholder={this.props.experiences.role}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Start Date</Label>
            <Input
              type="date"
              onChange={this.updateObj}
              name="password"
              id="startdate"
              placeholder={this.props.experiences.startDate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Duties</Label>
            <Input
              type="text"
              onChange={this.updateObj}
              name="password"
              id="duties"
              placeholder={this.props.experiences.description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Area</Label>
            <Input
              type="text"
              onChange={this.updateObj}
              name="password"
              id="area"
              placeholder={this.props.experiences.area}
            />
          </FormGroup>
          <Input
            id="submitBtn"
            type="submit"
            className="btn btn-success"
            value="SAVE"
            onClick={this.props.closeModal}
          />
          <Input
            id="clearBtn"
            type="delete"
            className="btn btn-warning"
            value="Clear Form"
            onClick={this.props.clearForm}
          />
        </Form>
      </div>
    );
  }
  componentDidMount = async () => {
    this.setState({
      experiences: this.props.experiences
    });
  };
}

export default ExperienceUpdateForm;
