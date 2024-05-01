import React from 'react';
import logo from '../../assets/logo.jpg';

const SubHeader = () => (
    <div style={{ }}>
        <div SubHeader style={{ height: '100%', width: '100%' }}>
            <img src={logo} alt="Logo" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        </div>
    </div>
);

export default SubHeader;
