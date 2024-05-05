import React from "react";
import HomeCardList from "../../components/home/HomeCardList";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/home/NavBar";
import SubHeader from "../../components/home/subHeader";
import WhatsAppButton from "../../components/whatsappButton";
import Filters from "../../components/home/filtersHome";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProperties } from "../../controls/requests";

export default function Home() {

  document.title = "Home | Elevatto";
  const [properties, setProperties] = React.useState([]);

  React.useEffect(() => {
    getProperties().then((response) => {
      setProperties(response);
    });
  }, []);

  return (
    <div>
      <WhatsAppButton />
      <NavBar style={{ zIndex: 2 }} properties={properties} setProperties={setProperties} />
      <Filters properties={properties} setProperties={setProperties} />
      <SubHeader />
      <HomeCardList properties={properties} setProperties={setProperties} />
      <Footer />
    </div>
  )
}
