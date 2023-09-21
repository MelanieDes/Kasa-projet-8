import React from 'react';
import { bannerData } from "../data/banner"

const Banner = () => {
    // console.log(bannerData)
    return (
        <div className='banner'>  
            <img className='banner-img' src="./assets/img/banner-1.png" alt="la mer et les rochers" />
        </div>
    );
};

export default Banner;