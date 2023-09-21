import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo';

const Header = () => {
    return (
        <div>
            <Logo />
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/About">
                        <li>A propos</li>
                    </NavLink>                    
                </ul>
            </div>
            
        </div>
    );
};

export default Header;