import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LOGO from "../../assets/logoVetor.svg";
import "../home/App.css";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Dropdown } from 'react-bootstrap';
import {getUserLogged} from '../../controls/requests';
import '../../index.css'

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 575.98);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 575.98);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            Olá, visitante
          </Nav.Link>
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
                <Dropdown.Item href="#">10 real</Dropdown.Item>
                <Dropdown.Item href="#">10 real</Dropdown.Item>
                <Dropdown.Item href="#">10 real</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                Quartos
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="#">1</Dropdown.Item>
                <Dropdown.Item href="#">2</Dropdown.Item>
                <Dropdown.Item href="#">3</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="nav-item dropdown-container">
              <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                Mais
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>
            <button className="dropdown-container" style={{ margin: '0 12px', padding: '5px 20px', height: '40px', borderRadius: '5px', border: 'none', backgroundColor: '#FEBD59', color: 'white' }}> Buscar </button>
          </>
        )}
        <span className="navbar-text"></span>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;