import React, { useState, useEffect, useReducer } from "react";
import HomeCard from "./HomeCard";
import { exampleData } from "./exempleData";
import HomeModal from "../modals/HomeModal";
import { getProperties, getPhotos } from "../../controls/requests";

export default function HomeCardList() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);
  const [type, setType] = useState("display")
  const [properties, setProperties] = useState([]);
  const [photosArray, setPhotosArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
      let firstImages = []
      data.forEach(element => {
   
         (element.photos && element.photos[0]) &&
          firstImages.push(element.photos[0])
      });
      getPhotos(
        firstImages
      ).then((photosArray) => {
        setPhotosArray(photosArray);
        console.log(photosArray);
        if(photosArray.length >= firstImages.length){
          setLoading(false)
        }

        
      })
    });
      

  }, []);

  function getPhotoById(id){
    return "http://localhost:8000" + photosArray.find(photo => photo.id === id)?.foto
  }



  
  return (
    <>
    <div className="col-12 mt-4">
      { localStorage.getItem("access") &&
    <button className="btn btn-primary " onClick={() =>{
      setSelectedHome(
        { title: "", description: "", price: "", location: "", images: []}
      );
      setType("edit")
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
              item.photos[0] ?   getPhotoById(item.photos[0]) : "https://via.placeholder.com/150"
            }
          />
          </div>
        );
      }): (
        <div className="col-12 mt-4">
          <h4 className="text-center text-black">Nenhum anúncio encontrado</h4>
        </div>
      )}
      
    {  selectedHome && <HomeModal show={modalShow} onHide={() => setModalShow(false)} 
     type={type}
        {...selectedHome}
      />}
    </div>
    </>
  );
 
}
