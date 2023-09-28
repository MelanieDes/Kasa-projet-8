import React from 'react';
import Image from '../assets/banner-1.png'; 

const Banner = () => {
    const text = "Chez vous, partout et ailleurs"
    return (
        <div className='banner'>
            <img src={Image} className='Image-banner home' alt="Falaise" />
            <h1 className='Image-banner-text'>{text}</h1>
        </div>    
    );
};

export default Banner;