import React from "react";
import HomeCardList from "../../components/home/HomeCardList";
import Footer from "../../components/home/Footer.jsx";
import NavBar from "../../components/home/NavBar";
import SubHeader from "../../components/home/subHeader";
import WhatsAppButton from "../../components/whatsappButton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <WhatsAppButton />
      <NavBar />
      <SubHeader />
      <HomeCardList />
      <Footer />
    </div>
  )
}
