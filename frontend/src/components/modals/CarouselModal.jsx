import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function CarouselModal(props) {
    const {images} = props;
    
    return (
        <Carousel>
            {

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
