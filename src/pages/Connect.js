import React, { useState } from 'react';
import Connexion from '../components/Connexion';
import Inscrire from '../components/Inscrire';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Connect = () => {
    const[signUp, setSignUp] = useState(true)


    return (


        <div className='connexion-container'>
            <Logo />
            <Navigation />
            <div className="buttons">
                <button onClick={() => setSignUp(true)}id="ins" style={{ background: signUp ? "salmon" : null }}>S'incrire</button>
                <button onClick={() => setSignUp(false)}id="con"
                style={{ background: signUp ? null : "salmon" }}>Se connecter</button>
            </div>
            {signUp ? <Inscrire/> : <Connexion />}
            
        </div>
    );
};

export default Connect;