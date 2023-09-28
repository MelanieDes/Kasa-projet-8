import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
            <div className="navigation">
                <ul className='navigation-container'>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/About">
                        <li>A propos</li>
                    </NavLink>                    
                </ul>
            </div>
    );
};

export default Header;