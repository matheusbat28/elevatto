import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { exampleData } from "./exempleData";
import HomeModal from "../modals/HomeModal";

export default function HomeCardList() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);
  return (
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
          />
          </div>
        );
      })}
      
    {  selectedHome && <HomeModal show={modalShow} onHide={() => setModalShow(false)} 
        {...selectedHome}
      />}
    </div>
  );
}
