import React from 'react';
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap';

class ProfileModal extends React.Component {
    render() {
        return (
           
            <Modal isOpen={this.props.open} toClose={this.props.close}> 
              <ModalHeader>{this.props.profile.name}</ModalHeader>
              <ModalBody>{this.props.profile.bio}</ModalBody>
              <Button onClick={() => this.setState({ modalOpen: false})}>Back to Profile</Button>
            </Modal>
        );
    }
}


export default ProfileModal;