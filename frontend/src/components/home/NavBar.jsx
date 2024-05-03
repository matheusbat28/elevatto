import { Navbar, Nav } from "react-bootstrap";
import LOGO from "../../assets/logoVetor.svg";
import "../home/App.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "../home/App.css";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");

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
        <span className="navbar-text"></span>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;