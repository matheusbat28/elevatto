import React from 'react'
import logo from '../../assets/logo.png'
import { FaGoogle, FaWhatsapp, FaInstagram  } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
    return (
        <div className="footer d-flex col-12">
          <div className="col-4 text-center">
            <img
                src={logo}
                alt="pin"
                className="logo-image"
            />
          </div>
          <div className="col-4 align-self-center text-left">
              <p className="first-paragraph">Elevatto Imobiliária</p>
              <p>CNPJ - 00.000.000/0000-00</p>
              <p>Endereço: Rua dos Bobos, nº 0</p>
          </div>
          <div></div>
          <div className="col-4 align-self-center text-left">
          <p><FaGoogle size={24} /> contato@gmail.com</p>
          <p><FaWhatsapp size={27} /> (00) 0000-0000</p>
          <p><FaInstagram size={28} /> @Imobiliária Elevatto</p>
          </div>
        </div>
      );
}