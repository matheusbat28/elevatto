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

export default function HomeCard(props: any) {
  React.useEffect(() => {
  }, []);

  return (
    <Card className="home-card " onClick={() => {
      props.setSelectedHome(props.item);
      props.setType("display")
      props.setModalShow(true);
    }}>
      <CardBody>
        {props?.photo && <CardImg src={props.photo} alt="Card image cap" className="top-card-image" />}
        <p className=" align-items-center d-flex justify-content-center mt-1">
          
          <CardTitle
            className=" col-12 text-center mt-1"
            style={{ fontSize: "1.2rem" }}
            title={props.title}
          >
            {props.title.length > 20
              ? props.title.substring(0, 20) + "..."
              : props.title}
          </CardTitle>
        </p>
        <CardText>
          <div className="">
            <p className="col-12 d-flex ps-4">
              <div className="col-6 ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3159/3159436.png"
                  alt=""
                  className="icon me-2"
                />
                <span className=" text-center">{props.bedrooms
                } Quartos</span>
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
            <p className="col-12 d-flex ps-4">
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
                <span className="text-center">{props.parking} Garagens</span>
              </div>
            </p>
            <p className="col-12 d-flex text-center">
              <div className="col-12">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/535/535239.png"
                  alt=""
                  className="icon me-2"
                />
                <span className=" text-center">{props.neighborhood} - {props.state}</span>
              </div>

            </p>
          </div>
        </CardText>
      </CardBody>
      <CardFooter>
        <p className="col-12 d-flex mt-3  align-items-center justify-content-center">
          <Button className="col-5 contact-button mx-2"
            onClick={(e) => {
              window.open(
                `https://api.whatsapp.com/send?phone=5548998362799&text=Ol%C3%A1%2C%20vi%20o%20seu%20an%C3%BAncio%20no%20site%20Elevatto%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20casa%20${props.title}`,
                "_blank"
              );
            }}
          >
            Contato
          </Button>
          <span className="col-6 text-center money-text">
            {parseFloat(props.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
