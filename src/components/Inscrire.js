import React, { useState } from 'react';

const Inscrire = () => {
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    return (
        <div className='inscription'>
            <h2>Inscrivez-vous</h2>
            <label htmlFor="pseudo">Pseudo</label>
            <input type="text" id="pseudo" />
            <label htmlFor="mdp">Mot de passe</label>
            <input type="password" id="mdp" onChange={(e) => setPassword(e.target.value)} />
            {password.length < 8 && password.length > 3 && (
        <p>Le mot de passe doit être de 8 caractères minimum</p>
            )}
            <label htmlFor="confirmMdp">Confirmer mot de passe</label>
            <input type="password" id="confirmMdp" onChange={(e) => setConfirmPass(e.target.value)} />
            {password !== confirmPass && confirmPass.length > 3 && (
        <p>Les mots de passe ne correspondent pas</p>
      )}
            <input type="submit" id="submit" value="Valider" />
        </div>
    );
};

export default Inscrire;