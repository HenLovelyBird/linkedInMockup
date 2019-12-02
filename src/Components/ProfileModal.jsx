import React from 'react';
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap';

class ProfileModal extends React.Component {
    state = {
        modalClose: false
    }
    render() {
        return (
           
            <Modal isOpen={this.props.open}>
              <ModalHeader>{this.props.profile.name}</ModalHeader>
              <ModalBody>{this.props.profile.bio}</ModalBody>
              <Button onClick={() => this.setState({modalClose: true})}>Back to Profile</Button>
            </Modal>
        );
    }
}


export default ProfileModal;