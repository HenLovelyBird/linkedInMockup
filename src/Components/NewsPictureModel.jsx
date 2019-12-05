import React, { Component } from 'react';
import {Input , Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';


class NewsPictureModel extends Component {
    state = {
        modalOpen: true,
        setModel: false,
        text: '',
        selectedFile: null
    }
      // fileSelectedHandler= event =>{
        //   this.setState({ event.target.files[0]}) 
     //  }

      // fileUploadHandler = () =>{
        //   const fd = new FormData();

           //axio.post('https://striveschool.herokuapp.com/api/profile/user21/picture');

     //  }
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
        render(){
            return (
              <>
                {this.state.modalOpen  &&  <>
                <Modal isOpen={this.props.open} toclose={this.props.close} >
                  <ModalHeader color="blue">Upload Picture</ModalHeader>
                  <ModalBody>
                  <Input type="file" onChange={this.fileSelectedHandler}/>
                  <Button onClick={this.fileUploadHandler}>Upload</Button>
                 </ModalBody>
                  <ModalFooter>
                 <Button onClick={this.setModal} color="primary">Close</Button>
                 
                    {/*<Button  onClick={this.post} color="primary">Post</Button>*/}
                  </ModalFooter>
                </Modal></>}
                </>
            );
          }
        }
export default NewsPictureModel;