import { Navbar, Nav, } from "react-bootstrap";
import LOGO from "../../assets/logoVetor.svg";
import "../home/App.css";
import Form from 'react-bootstrap/Form';

const NavBar = () => {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    getUserLogged().then((response) => {
      setUser(response);
    });
  }, []);

  return (
    <Navbar expand="md" className="custom-navbar"> {}
        <Navbar.Brand href="/">
          <img className="header-img" src={LOGO} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Form inline>
              <Form.Control type="text" placeholder="Busca" className="mr-sm-2" />
            </Form>
            <Nav.Link href="#regiao" className={"active navbar-link"}>
              Região
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
