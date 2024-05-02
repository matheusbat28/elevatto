import React from "react";
import HomeCardList from "../../components/home/HomeCardList";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/home/NavBar";
import SubHeader from "../../components/home/subHeader";
import WhatsAppButton from "../../components/whatsappButton";
import Filters from "../../components/home/filtersHome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

  document.title = "Home | Elevatto";

  return (
    <div>
      <WhatsAppButton />
      <NavBar style={{ zIndex: 2 }} />
      <Filters />
      <SubHeader />
      <HomeCardList />
      <Footer />
    </div>
  )
}
