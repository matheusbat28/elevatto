import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function HouseModal(props) {
  console.log(props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <h3>{props.locate}</h3>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div>
            <img src={props.images[0]} alt="Card image cap" className="modal-image" />
          
  
      </div>
        <div className="mt-3">
        <p>{props.desc}</p>
        </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
