import React from 'react';
import Image from '../assets/banner-2.png'; 

const BannerAbout = () => {
    return (
        <div className='banner'>
        <img src={Image} className='Image-banner' alt="Montagne" />        
    </div> 
    );
};

export default BannerAbout;