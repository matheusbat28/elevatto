import React, { useState, useEffect } from "react";
import HomeCard from "./HomeCard";
import { exampleData } from "./exempleData";
import HomeModal from "../modals/HomeModal";
import { getProperties } from "../../controls/requests";

export default function HomeCardList() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);
  const [type, setType] = useState("display")
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
    });
  }, []);
  
  return (
    <>
    <div className="col-12 mt-4 offset-10">
    <button className="btn btn-primary " onClick={() =>{
      setSelectedHome(
        {id: 0, title: "", description: "", price: "", location: "", images: []}
      );
      setType("edit")
      setModalShow(true);

    }}>Criar anuncio</button>
    </div>
    <div
      className="
    home-card-box 
    "
    >
     
      {exampleData.map((item) => {
        return (
          <div
 
          >
          <HomeCard
            key={item.id}
            {...item}
            item={item}
            setSelectedHome={setSelectedHome}
            setModalShow={setModalShow}
            setType={setType}
          />
          </div>
        );
      })}
      
    {  selectedHome && <HomeModal show={modalShow} onHide={() => setModalShow(false)} 
     type={type}
        {...selectedHome}
      />}
    </div>
    </>
  );
 
}
