import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CarouselModal from "./CarouselModal";

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
          <CarouselModal
          images={props.images}
          />
          
  
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
