import React from 'react';
import DropDown from '../components/DropDown';
import collapseData from '../data/Collapse.json'
import BannerImageAbout from '../assets/banner-2.png'
import Banner from '../components/Banner';

const About = () => {    
    return (
        <div>
            <Banner img={BannerImageAbout} />
            {collapseData.map((item) => (
                <DropDown key={item.id} title={item.title} content={item.content} />
            ))}
        </div>     
         
    );
};

export default About;