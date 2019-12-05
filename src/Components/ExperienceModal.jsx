import React from 'react';
import {Modal, UpdateForm} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ExperienceUpdateForm from './ExperienceUpdateForm';

class ExperienceModal extends React.Component {
    state = {
        modalOpen: true
    }
    render() {
        return (
            <>
            {this.state.modalOpen && 
            <Modal isOpen={this.props.open} toclose={this.props.close}> 
            <div>
                <div className="edit-experience-text">Edit Experiences</div>
                <FontAwesomeIcon onClick={this.props.setmodal} icon={faTimes} />
            </div>
            <ExperienceUpdateForm closeModal={this.props.setmodal} experiences={this.props.experience} />
          </Modal>}
            </>
        );
    }
}

export default ExperienceModal;