  import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class  NewsModel extends React.Component {
    state = {
      modalOpen: true,
      setModel: false,
      text: ''
  }

        setModal = () => {
      if(this.state.modalOpen === true){
        this.setState({
              modalOpen: false
          })
      } else if (this.state.modalOpen === false){
          this.setState({
          modalOpen: true

          })
      }
  }
 
  post = async() => {
    let obj = {
      text: this.state.text
    }
    if(this.state.text.length > 2){
      let username = "user21";
      let password = "2ruxa4MRJdUgg6cz";
      let token = btoa(username + ":" + password);
      let response = await fetch(
        "https://striveschool.herokuapp.com/api/posts/",{
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "authorization": "Basic " + token,
            "Content-Type": "application/json",
          }
        }
      )
      console.log(response)
      
      return response
    }
  }
  render(){
    return (
      <>
        {this.state.modalOpen  &&  <>
        <Modal isOpen={this.props.open} toclose={this.props.close} >
          <ModalHeader color="blue">Enter Text</ModalHeader>
          <ModalBody>
          Your Text
          <input type="text" name="text" onChange={(data) => { this.setState({ text: data.target.value }) }} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.setModal} color="primary">Close</Button>
            <Button  onClick={this.post} color="primary">Post</Button>
          </ModalFooter>
        </Modal></>}
        </>
    );
  }
}

export default NewsModel;

