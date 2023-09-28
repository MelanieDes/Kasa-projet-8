import React from 'react';
import BannerAbout from '../components/BannerAbout';
import DropDown from '../components/DropDown';
import collapseData from '../data/Collapse.json'

const About = () => {       
    
    return (
        <div>
            <BannerAbout />
            {collapseData.map((item) => (
                <DropDown key={item.id} title={item.title} content={item.content} />
            ))}
        </div>     
         
    );
};

export default About;