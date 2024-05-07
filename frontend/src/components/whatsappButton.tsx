import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <div style={{
      position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, color: '#FFF', width: '250px', height: '60px', cursor: 'pointer',
      flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', msFlexDirection: 'row',
    }}>

      <div style={{ 
        backgroundColor: '#25d366', color: 'white', width: '180px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '30px', borderRadius: '5px',
        animation: 'appear 5s forwards', opacity: 0 // Adiciona animação
   
        
      }}
      onClick={
        () => {
          window.location.href = "https://api.whatsapp.com/send?phone=5548998362799&text=Ol%C3%A1%2C%20vi%20o%20seu%20an%C3%BAncio%20no%20site%20Elevatto%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
        }
      }        

      >
        <p style={{ fontSize: '16px', margin: 0 }}>Entre em contato</p>
      </div>
      <a href="https://api.whatsapp.com/send?phone=5548998362799&text=Ol%C3%A1%2C%20vi%20o%20seu%20an%C3%BAncio%20no%20site%20Elevatto%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" style={{ backgroundColor: '#25d366', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
        <FaWhatsapp style={{ fontSize: '30px' }} />
      </a>

    </div>
  );
}

export default WhatsAppButton;