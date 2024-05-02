import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardFooter,
  Button,
} from "react-bootstrap";

export default function HomeCard(props) {
  return (
    <Card className="home-card "     onClick={() => {
      props.setSelectedHome(props.item);
      props.setModalShow(true);
    }}>
      <CardBody>
        <CardImg src={props.images[0]} alt="Card image cap" className="top-image"/>
        <p className=" align-items-center d-flex justify-content-center mt-1">
          <img
            src="https://cdn-icons-png.flaticon.com/128/535/535239.png"
            alt="pin"
            className="pin"
          />
          <CardTitle
            className=" col-12 text-center mt-1"
            style={{ fontSize: "1.2rem" }}
            title={props.locate}
          >
            {props.locate.length > 20
              ? props.locate.substring(0, 20) + "..."
              : props.locate}
          </CardTitle>
        </p>
        <CardText>
          <div className="ps-4">
            <p className="col-12 d-flex">
              <div className="col-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3159/3159436.png"
                  alt=""
                  className="icon me-2"
                />
                <span className=" text-center">{props.rooms} Quartos</span>
              </div>
              <div className="col-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/900/900685.png"
                  alt=""
                  className="icon me-2"
                />
                <span className="text-center">{props.bathrooms} Banheiros</span>
              </div>
            </p>
            <p className="col-12 d-flex">
              <div className="col-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7671/7671206.png"
                  alt=""
                  className="icon me-2"
                />
                <span className=" text-center">{props.area} m2</span>
              </div>
              <div className="col-6 ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/89/89102.png"
                  alt=""
                  className="icon me-2"
                />
                <span className="text-center">{props.garages} Garagens</span>
              </div>
            </p>
          </div>
        </CardText>
      </CardBody>
      <CardFooter>
        <p className="col-12 d-flex  align-items-center">
          <Button  className="col-6 contact-button" >
            Contato
          </Button>
          <span className="col-6 text-center money-text">R$ {props.price}</span>
        </p>
      </CardFooter>
    </Card>
  );
}
