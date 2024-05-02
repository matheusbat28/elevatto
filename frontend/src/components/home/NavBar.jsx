import { Navbar, Nav, } from "react-bootstrap";
import LOGO from "../../assets/logoVetor.svg";
import "../home/App.css";

const NavBar = () => {
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
          <div class="row g-3 align-items-center">
            <div class="col-auto">
            </div>
              <div class="col-auto">
                <input type="placeholder" class="form-control"  />
              </div>
              <div class="col-auto">
                <span class="form-text">
                </span>
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
          <span className="navbar-text">
          </span>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;