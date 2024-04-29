import React from 'react'
import logo from '../../images/logo.png'

export default function Footer() {
  return (
    <div className="footer row col-12">
      <div className="col-3 ">
        <img
            src={logo}
            alt="pin"
           
        />
      </div>
      <div className="col-7 align-self-center ">
        <h4>Elevatto Imobiliária</h4>
        <p>CNPJ - 00.000.000/0000-00</p>
        <p>Endereço: Rua dos Bobos, nº 0</p>
      </div>
      <div className="col-2 align-self-center">
        <p>contato@gmail.com</p>
        <p>(00) 0000-0000</p>
        <p>@Imobiliária Elevatto</p>
      </div>
    </div>
  );
}
