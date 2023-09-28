import React from 'react';
import logoKasa from "../assets/LOGOKASA.svg";

const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo-img" src={logoKasa} alt="logo kasa" />
        </div>
    );
};

export default Logo;