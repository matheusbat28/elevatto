import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LOGO from "../../assets/logoVetor.svg";
import "../home/App.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import { getUserLogged, logout } from '../../controls/requests';
import '../../index.css'
import { FaUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function NavBar(props: any) {
  const [inputValue, setInputValue] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 575.98);
  const [user, setUser] = useState(null);
  const [bathrooms, setBathrooms] = React.useState([]);
  const [bedrooms, setBedrooms] = React.useState([]);
  const [parking, setParking] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [toggleBathrooms, setToggleBathrooms] = React.useState(false);
  const [toggleParking, setToggleParking] = React.useState(false);
  const [selectedPrice, setSelectedPrice] = React.useState(null);
  const [selectedBedroom, setSelectedBedroom] = React.useState(null);
  const [selectedBathroom, setSelectedBathroom] = React.useState(null);
  const [selectedParking, setSelectedParking] = React.useState(null);
  const [statusBtn, setStatusBtn] = React.useState(false);

  useEffect(() => {

    let tempBathrooms = [];
    let tempBedrooms = [];
    let tempParking = [];
    let tempPrice = [];

    props.properties.forEach((property: any) => {
      if (!tempBathrooms.includes(property.bathrooms)) {
        tempBathrooms.push(property.bathrooms);
      }

      if (!tempBedrooms.includes(property.bedrooms)) {
        tempBedrooms.push(property.bedrooms);
      }

      if (!tempParking.includes(property.parking)) {
        tempParking.push(property.parking);
      }

      if (!tempPrice.includes(property.price)) {
        tempPrice.push(property.price);
      }
    });

    setBathrooms(tempBathrooms);
    setBedrooms(tempBedrooms);
    setParking(tempParking);
    setPrice(tempPrice);


    getUserLogged().then((response) => {
      setUser(response);
    }).catch((error) => {
      setUser(null);
    });

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 575.98);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [props, selectedPrice, selectedBedroom, selectedBathroom, selectedParking]);

  const handleFilter = (e: any) => {

    if (!statusBtn) {
      props.setProperties(props.properties.filter((property: any) => {
        return property.price === selectedPrice || property.bedrooms === selectedBedroom || property.bathrooms === selectedBathroom || property.parking === selectedParking;
      }));
      setStatusBtn(true);
    }
    else {
      window.location.reload();
    }

  };

  return (
    <Navbar expand="md" className="custom-navbar" style={{ zIndex: 2 }}>
      <Navbar.Brand href="/">
        <img className="header-img" src={LOGO} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue === "" && (
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <FaSearch />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Nav.Link href="#regiao" className={"active navbar-link"}>
            <span className="text-margin-top">Região</span>
          </Nav.Link>
          <Nav.Link href="#propriedade" className={" navbar-link"}>
            Tipo de propriedade
          </Nav.Link>
          <Nav.Link href="Usuario" className={"navbar-link"}>
            Olá, {user ? user.username : "Visitante"}
          </Nav.Link>
          <Link
            style={{
              height: '30px',
              width: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: '0px',
              borderRadius: '105px',
              backgroundColor: statusBtn ? '#ffff' : '#ffff',
              color: 'black',
              margin: '0 12px'
            }} to="/login">
            <FaUser /> { }
          </Link>
          <button
            style={{
              height: '30px',
              lineHeight: '0px',
              borderRadius: '105px',
              border: 'none',
              fontSize: '1.2rem',
              backgroundColor: statusBtn ? '#ffff' : '#ffff',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
            onClick={() => logout()}>
            <PiSignOutBold /> { }
          </button>
        </Nav>
        {isSmallScreen && (
          <>
            <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic" >
                Locais
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="#">Local1</Dropdown.Item>
                <Dropdown.Item href="#">Local1</Dropdown.Item>
                <Dropdown.Item href="#">Local1</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                Preços
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                {price.map((price: any) => {
                  return <Dropdown.Item href="#" onClick={() => setSelectedPrice(price)}>{price}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                Quartos
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                {bedrooms.map((bedroom: any) => {
                  return <Dropdown.Item href="#" onClick={() => setSelectedBedroom(bedroom)}>{bedroom}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>

            {toggleBathrooms && <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                Banheiros
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                {bathrooms.map((bathroom: any) => {
                  return <Dropdown.Item href="#" onClick={() => setSelectedBathroom(bathroom)}>{bathroom}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>}

            {toggleParking && <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                Estacionamento
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                {parking.map((parking: any) => {
                  return <Dropdown.Item href="#" onClick={() => setSelectedParking(parking)}>{parking}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>}

            <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                Mais
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu" >
                <Dropdown.Item onClick={() => setToggleBathrooms(!toggleBathrooms)}>Banheiros</Dropdown.Item>
                <Dropdown.Item onClick={() => setToggleParking(!toggleParking)}>Estacionamento</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button
              className="dropdown-container"
              style={{
                margin: '0 12px',
                padding: '5px 20px',
                height: '40px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: statusBtn ? '#fe5959' : '#FEBD59',
                color: 'white'
              }}
              onClick={handleFilter}>
              {statusBtn ? 'Limpar' : 'Buscar'}
            </button>
          </>
        )}
        <span className="navbar-text"></span>
      </Navbar.Collapse>
    </Navbar>
  );
};