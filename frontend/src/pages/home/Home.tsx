import React from "react";
import HomeCardList from "../../components/home/HomeCardList";
import NavBar from "../../components/home/NavBar";
import WhatsAppButton from "../../components/whatsappButton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <WhatsAppButton />
      <NavBar />
      <HomeCardList />
    </div>
  )
}
