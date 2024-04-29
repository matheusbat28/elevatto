import React from 'react'
import logo from '../../images/logo.png'
import { FaGoogle, FaWhatsapp  } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
    return (
        <div className="footer d-flex col-12">
          <div className="col-4 text-center">
            <img
                src={logo}
                alt="pin"
               
            />
          </div>
          <div className="col-4 align-self-center text-center">
            <p>Elevatto Imobiliária</p>
            <p>CNPJ - 00.000.000/0000-00</p>
            <p>Endereço: Rua dos Bobos, nº 0</p>
          </div>
          <div></div>
          <div className="col-4 align-self-center text-center">
            <p>
            <FaGoogle /> contato@gmail.com</p>
            <p>
            <FaWhatsapp /> (00) 0000-0000</p>
            <p><IoLogoInstagram /> @Imobiliária Elevatto</p>
         
          </div>
          
        </div>
      );
}
