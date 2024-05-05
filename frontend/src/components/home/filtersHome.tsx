import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "../home/App.css";

export default function SubHeader(props: any) {

    const [bathrooms, setBathrooms] = React.useState([]);
    const [bedrooms, setBedrooms] = React.useState([]);
    const [parking, setParking] = React.useState([]);
    const [price, setPrice] = React.useState([]);



    React.useEffect(() => {

        props.properties.map((property: any) => {

            if (!bathrooms.includes(property.bathrooms)) {
                setBathrooms([...bathrooms, property.bathrooms])
            }

            if (!bedrooms.includes(property.bedrooms)) {
                setBedrooms([...bedrooms, property.bedrooms])
            }

            if (!parking.includes(property.parking)) {
                setParking([...parking, property.parking])
            }

            if (!price.includes(property.price)) {
                setPrice([...price, property.price])
            }



        });



    }, [props])


    return (
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
                        {price.map((price: any) => {
                            return <Dropdown.Item href="#">{price}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Quartos
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {bedrooms.map((bedroom: any) => {
                            return <Dropdown.Item href="#">{bedroom}</Dropdown.Item>
                        })}
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

                <button className="dropdown-container" style={{ margin: '0 12px', padding: '5px 20px', height: '40px', borderRadius: '5px', border: 'none', backgroundColor: '#FEBD59', color: 'white' }}> Buscar </button>
            </div>
        </div>

    )
}