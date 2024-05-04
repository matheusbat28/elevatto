import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LOGO from "../../assets/logoVetor.svg";
import "../home/App.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUserLogged } from "../../controls/requests";
import "../home/App.css";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    getUserLogged()
      .then((response) => {
        setUser(response);
      })
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
          <Nav.Link href="/login" className={"navbar-link"}>
            Olá {user ? user.username : "Visitante"}
          </Nav.Link>
        </Nav>
        <span className="navbar-text"></span>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;