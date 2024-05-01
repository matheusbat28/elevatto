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
      <Modal.Body className="d-flex flex-column">
        <div className="images-flex flex-grow-1">
          <div className="images-carousel">
          <CarouselModal
          images={props.images}
          />
          
  
      </div>
        <div className="  text-carousel text-black flex-grow-1">
        <h4 className="text-center  mb-3">{props.locate}</h4>
        <p className="modal-text-desc">{props.desc}</p>
        <div className="bottom-element ">
            <p className="col-12 d-flex">
              <div className="col-5 offset-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3159/3159436.png"
                  alt=""
                  className="icon me-2"
                />
                <span className=" text-center">{props.rooms} Quartos</span>
              </div>
              <div className="col-5 offset-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/900/900685.png"
                  alt=""
                  className="icon me-2"
                />
                <span className="text-center">{props.bathrooms} Banheiros</span>
              </div>
            </p>
            <p className="col-12 d-flex">
              <div className="col-5 offset-1" >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7671/7671206.png"
                  alt=""
                  className="icon me-2"
                />
                <span className=" text-center">{props.area} m2</span>
              </div>
              <div className="col-5 offset-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/89/89102.png"
                  alt=""
                  className="icon me-2"
                />
                <span className="text-center">{props.garages} Garagens</span>
              </div>
            </p>
          </div>
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