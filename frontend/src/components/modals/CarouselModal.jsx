import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function CarouselModal(props) {
    const {images} = props;
    
    return (
        <Carousel>
            {
                images.length === 0 ?
                <Carousel.Item>
                    <img
                        className="d-block fixed-carousel-image"
                        src="https://via.placeholder.com/150"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sem imagens</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                :
                images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block fixed-carousel-image"
                            src={image}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))
            }
     

        </Carousel>
      );
}
