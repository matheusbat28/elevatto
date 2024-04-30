import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CarouselModal from "./CarouselModal";

export default function HouseModal(props) {
  console.log(props)
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div className="col-6">
          <CarouselModal
          images={props.images}
          />
          
  
      </div>
        <div className="mt-3 pe-3 ms-4 col-6 text-black">
        <h5>{props.locate}</h5>
        <p>{props.desc}</p>
        </div>
        </div>
      </Modal.Body>
       <Modal.Footer>
        <Button className="contact-button" >
          Entrar em contato
        </Button>
      </Modal.Footer> 
    </Modal>
  );
}
