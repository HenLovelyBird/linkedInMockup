import React from 'react';
import {Modal, Button} from 'reactstrap';
import UpdateForm from './UpdateForm';

class ProfileModal extends React.Component {
    state = {
        modalOpen: true
    }
    render() {
        console.log(this.props)
        return (
            <>
            {this.state.modalOpen && <Modal isOpen={this.props.open} toclose={this.props.close}> 
            <UpdateForm profileInfo={this.props.profile} />
            <Button onClick={this.props.setmodal}>Back to Profile</Button>
          </Modal>}
            </>
        );
    }
}


export default ProfileModal;