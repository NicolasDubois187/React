import React from 'react';

const Inscrire = () => {
    return (
        <div className='inscription'>
            <h2>Inscrivez-vous</h2>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" id="pseudo" />
            <label htmlFor="mdp">Mot de passe</label>
            <input type="text" id="mdp" />
            <label htmlFor="confirmMdp">Confirmer mot de passe</label>
            <input type="text" id="confirmMdp" />
            <input type="submit" id="submit" />
        </div>
    );
};

export default Inscrire;