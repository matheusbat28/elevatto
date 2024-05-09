import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "../home/App.css";

export default function SubHeader(props: any) {

    const [bathrooms, setBathrooms] = React.useState([]);
    const [bedrooms, setBedrooms] = React.useState([]);
    const [parking, setParking] = React.useState([]);
    const [price, setPrice] = React.useState([]);
    const [state, setState] = React.useState([]);
    const [neighborhood, setNeighborhood] = React.useState([]);
    const [toggleBathrooms, setToggleBathrooms] = React.useState(false);
    const [toggleParking, setToggleParking] = React.useState(false);
    const [selectedPrice, setSelectedPrice] = React.useState(null);
    const [selectedBedroom, setSelectedBedroom] = React.useState(null);
    const [selectedBathroom, setSelectedBathroom] = React.useState(null);
    const [selectedParking, setSelectedParking] = React.useState(null);
    const [selectedState, setSelectedState] = React.useState(null);
    const [selectedNeighborhood, setSelectedNeighborhood] = React.useState(null);
    const [statusBtn, setStatusBtn] = React.useState(false);



    React.useEffect(() => {
        let tempBathrooms = [];
        let tempBedrooms = [];
        let tempParking = [];
        let tempPrice = [];
        let tempState = [];
        let tempNeighborhood = [];

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
            if (!tempState.includes(property.state)) {
                tempState.push(property.state);
            }
            if (!tempNeighborhood.includes(property.neighborhood)) {
                tempNeighborhood.push(property.neighborhood);
            }
        });

        setBathrooms(tempBathrooms);
        setBedrooms(tempBedrooms);
        setParking(tempParking);
        setPrice(tempPrice);
        setState(tempState);
        setNeighborhood(tempNeighborhood);
    }, [props, selectedPrice, selectedBedroom, selectedBathroom, selectedParking]);



    const handleFilter = (e: any) => {

        if (!statusBtn) {
            props.setProperties(props.properties.filter((property: any) => {
                return property.price === selectedPrice || property.bedrooms === selectedBedroom || property.bathrooms === selectedBathroom || property.parking === selectedParking || property.state === selectedState || property.neighborhood === selectedNeighborhood;
            }));
            setStatusBtn(true);
        }
        else {
            window.location.reload();
        }

    };




    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute', top: '0', left: '0', zIndex: 1 }}>
            <div className="dropdown-group">
                <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Estado
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {state.map((state: any) => {
                            return <Dropdown.Item href="#" onClick={() => setSelectedState(state)}>{state}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Bairro
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {neighborhood.map((neighborhood: any) => {
                            return <Dropdown.Item href="#" onClick={() => setSelectedNeighborhood(neighborhood)}>{neighborhood}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Preços
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {price.map((price: any) => {
                            return <Dropdown.Item href="#" onClick={() => setSelectedPrice(price)}>{price}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Quartos
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {bedrooms.map((bedroom: any) => {
                            return <Dropdown.Item href="#" onClick={() => setSelectedBedroom(bedroom)}>{bedroom}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                {toggleBathrooms && <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Banheiros
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {bathrooms.map((bathroom: any) => {
                            return <Dropdown.Item href="#" onClick={() => setSelectedBathroom(bathroom)}>{bathroom}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>}

                {toggleParking && <Dropdown className="nav-item dropdown-container" style={{ margin: '0 12px' }}>
                    <Dropdown.Toggle className="nav-link" id="dropdown-basic">
                        Estacionamento
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        {parking.map((parking: any) => {
                            return <Dropdown.Item href="#" onClick={() => setSelectedParking(parking)}>{parking}</Dropdown.Item>
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
            </div>
        </div>

    )
}