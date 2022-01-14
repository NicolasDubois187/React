import React from 'react';

const Connexion = () => {
    return (
        <div className='connexion'>
              <h2>Connectez-vous</h2>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" id="pseudo" />
            <label htmlFor="mdp">Mot de passe</label>
            <input type="text" id="mdp" />
            <input type="submit" id="submit"/>
          
        </div>
    );
};

export default Connexion;