import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class  NewsModel extends React.Component {
    state = {
      modalOpen: true,
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
      let username = "user16";
      let password = "c9WEUxMS294hN6fF";
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
          <button> Submit Data </button>
            <Button onClick={this.setModal} color="primary">Post</Button>
            <Button onClick={this.post}></Button>
          </ModalFooter>
        </Modal></>}
        </>
    );
  }
}

export default NewsModel;