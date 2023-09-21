import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
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