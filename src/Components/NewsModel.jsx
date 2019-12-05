import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NewsModel = (props) => {
  const {
    buttonLabel,
    className
  } = props;


const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} color="blue">Enter Text</ModalHeader>
        <ModalBody>
        
        <input type="text" value={this.state.name} name="text" onChange={() => { this.setState({ text: data.target.value }) }} />
        </ModalBody>
        <ModalFooter>
       <button onClick={() => { this.submit() }} > Submit Data </button>
          <Button color="primary" onClick={toggle}>Post</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NewsModel;