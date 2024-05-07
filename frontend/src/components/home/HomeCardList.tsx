import React, { useState, useEffect, useReducer } from "react";
import HomeCard from "./HomeCard";
import HomeModal from "../modals/HomeModal";
import { getProperties, getPhotos } from "../../controls/requests";

export default function HomeCardList(props: any) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);
  const [type, setType] = useState("display")
  const [properties, setProperties] = useState([]);
  const [photosArray, setPhotosArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProperties(props.properties);
    let firstImages = []
    props.properties.forEach(element => {
      (element.photos && element.photos[0]) &&
        firstImages.push(element.photos[0])
    });
    getPhotos(
      firstImages
    ).then((photosArray) => {
      setPhotosArray(photosArray);
    });
  }, [props.properties]);

  function getPhotoById(id) {
    return "http://localhost:8000" + photosArray.find(photo => photo.id === id)?.foto
  }


  


  return (
    <>
      <div className="col-12 mt-4 text-right pe-4">
        {localStorage.getItem("access") &&
          <button className="btn btn-primary " onClick={() => {
            setSelectedHome(
              { title: "", description: "", price: "", location: "", images: [] }
            );
            setType("new")
            setModalShow(true);

          }}>Criar anuncio</button>}
      </div>
      <div
        className="
    home-card-box 
    "
      >

        {(!loading && properties[0]) ? properties.map((item, index) => {
          return (
            <div
              key={index}
            >
              <HomeCard
                key={item.id}
                {...item}
                item={item}
                setSelectedHome={setSelectedHome}
                setModalShow={setModalShow}
                setType={setType}
                photo={
                  item.photos[0] ? getPhotoById(item.photos[0]) : "https://via.placeholder.com/150"
                }
              />
            </div>
          );
        }) : (
          <div className="col-12 mt-4">
            <h4 className="text-center text-black">Nenhum anúncio encontrado</h4>
          </div>
        )
        }


        {selectedHome && <HomeModal show={modalShow} onHide={() => {setModalShow(false)}
      
      }
          images={
            selectedHome.photos
          }
          type={type}
          {...selectedHome}
          reset={() => props.reset()}  
        />}
      </div>
    </>
  );

}
