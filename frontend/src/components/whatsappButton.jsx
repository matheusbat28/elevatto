import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a href="https://api.whatsapp.com/send?phone=5548984323607&text=Fala" 
       style={{
         position: 'fixed',
         width: '60px',
         height: '60px',
         bottom: '40px',
         right: '40px',
         backgroundColor: '#25d366',
         color: '#FFF',
         borderRadius: '50px',
         textAlign: 'center',
         fontSize: '30px',
         boxShadow: '1px 1px 2px #888',
         zIndex: '1000',
         textDecoration: 'none'
       }}
       target="_blank"
    >
      <FaWhatsapp style={{ marginTop: '7px' }} />
    </a>
  );
}

export default WhatsAppButton;
