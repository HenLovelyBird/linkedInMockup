import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../index.css'

class UpdateForm extends React.Component {

    state = { 
      profile: ""
    }

    updateObj = (ev) => {
        let input = ev.target.value
        let idInput = ev.target.id
        this.state.profile[idInput] = input
        console.log(this.state)
    }

    handleSubmit = async() => {
      let username = "user16"
      let password = "c9WEUxMS294hN6fF"
      let token = btoa(username + ":" + password)
      let response = await fetch("https://striveschool.herokuapp.com/api/profiles/", {
          method: "POST",
          bode: JSON.stringify(this.state),
          headers: {
              "Authorization": "Basic " + token,
              "Content-Type" : "application/json"
          }
      })
      return response
    }

    render() { 
      console.log(this.state)
        return ( 
            <Form className="update-form" onsubmit="handleSubmit()">
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" onChange={this.updateObj} name="email" id="email" placeholder={this.props.profileInfo.email} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Bio</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="bio" placeholder={this.props.profileInfo.bio} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Name</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="name" placeholder={this.props.profileInfo.name} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Surname</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="surname" placeholder={this.props.profileInfo.surname} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Area</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="area" placeholder={this.props.profileInfo.area} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Title</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="title" placeholder={this.props.profileInfo.title} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">ImageUrl</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="image" placeholder={this.props.profileInfo.image} />
          </FormGroup>
          <Input
                    id="submitBtn"
                    type="submit"
                    class="btn btn-primary"
                    value="SUBMIT"
                />
          </Form>
        )
    }
    componentDidMount = async() => {
      this.setState({
        profile: this.props.profileInfo
    })
  }
}
 
export default UpdateForm;