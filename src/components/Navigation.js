import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Accueil</li></NavLink>
                <NavLink to="/About" className={(nav) => nav.isActive ? "nav-active" : ""}><li>A propos</li></NavLink>
                <NavLink to="/Contact" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Contact</li></NavLink>
                <NavLink to="/Connect" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Connexion</li></NavLink>
            </ul>
            
        </nav>
    );
};

export default Navigation;