import { Navbar, Nav, Container } from "react-bootstrap";
import LOGO from "../../assets/logoVetor.svg";
import "../home/App.css";

const NavBar = () => {
  return (
    <Navbar expand="md" className="custom-navbar"> {/* Adicione a classe custom-navbar aqui */}
      <Container>
        <Navbar.Brand href="/">
          <img src={LOGO} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#regiao" className={"active navbar-link"}>
              Região
            </Nav.Link>
            <Nav.Link href="#propriedade" className={" navbar-link"}>
              Tipo de propriedade
            </Nav.Link>
            <Nav.Link href="#Busca" className={"navbar-link"}>
              Busca
            </Nav.Link>
            <Nav.Link href="Usuario" className={"navbar-link"}>
              Olá, visitante
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;