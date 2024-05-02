import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "../home/App.css";

const SubHeader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute', top: '0', left: '0', zIndex: 1 }}>
        <div className="dropdown-group">
            <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                    Locais
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item href="#">Local1</Dropdown.Item>
                    <Dropdown.Item href="#">Local1</Dropdown.Item>
                    <Dropdown.Item href="#">Local1</Dropdown.Item>
                    <Dropdown.Divider />
                </Dropdown.Menu>
            </Dropdown>

        <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
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

        <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
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

        <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
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
    </div>
    </div>
);

export default SubHeader;