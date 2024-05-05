import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "../home/App.css";

export default function SubHeader(props: any) {

    const [bathrooms, setBathrooms] = React.useState([]);
    const [bedrooms, setBedrooms] = React.useState([]);
    const [parking, setParking] = React.useState([]);
    const [price, setPrice] = React.useState([]);
    const [toggleBathrooms, setToggleBathrooms] = React.useState(false);
    const [toggleParking, setToggleParking] = React.useState(false);

    React.useEffect(() => {
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
    }, [props]);

    const handleFilter = (e: any) => {
        console.log(bathrooms)

    };




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

                {toggleBathrooms && <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Banheiros
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {bathrooms.map((bathroom: any) => {
                            return <Dropdown.Item href="#">{bathroom}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>}

                {toggleParking && <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Estacionamento
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {parking.map((parking: any) => {
                            return <Dropdown.Item href="#">{parking}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>}

                <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Mais
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu" >
                        <Dropdown.Item onClick={() => setToggleBathrooms(!toggleBathrooms)}>Banheiros</Dropdown.Item>
                        <Dropdown.Item onClick={() => setToggleParking(!toggleParking)}>Estacionamento</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <button className="dropdown-container" style={{ margin: '0 12px', padding: '5px 20px', height: '40px', borderRadius: '5px', border: 'none', backgroundColor: '#FEBD59', color: 'white' }}
                    onClick={handleFilter}> Buscar </button>
            </div>
        </div>

    )
}