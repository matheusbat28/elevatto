import React from 'react'
import logo from '../../assets/logo.png'
import { FaGoogle, FaWhatsapp, FaInstagram } from "react-icons/fa";
import '../../index.css'

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
        <p>CRECI: 25925</p>
        <p>Rua: João José Rodrigues, 30
          Centro comercial Boa Vista - Sala 18  Bairro: Boa Vista - Biguacu
          CEP: 88161-122
        </p>
      </div>
      <div></div>
      <div className="col-4 align-self-center text-left">
        <p><FaGoogle size={24} /> contato@imobiliariaelevatto.com.br</p>
        <p><FaWhatsapp size={27} /> (48) 99836-2799</p>
        <p id="last-paragraph"><FaInstagram size={28} /> @imobiliariaelevatto__</p>
      </div>
    </div>
  );
}