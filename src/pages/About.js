import React, { useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    const [text, setText] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipisicing. Facere, aperiam repudiandae! Alias autem nostrum quibusdam aliquam nam maiores, dicta, ullam quasi error earum fugiat illum reiciendis numquam dolore libero rem."
        );
    const [editText, setEditText] = useState(false);


    return (
        <div className='about-container'>
            <Logo />
            <Navigation />
            <h3>About</h3>
            {editText ? (
                <>
                <textarea onChange={(e) => setText(e.target.value)}
                defaultValue={text}
                cols="60"
                rows="3"></textarea>
                <br />
                <button onClick={() => setEditText(false)}>Valider édition</button>
                
                </>
            ) : (
             <>
            <p>{text}</p>
            <button onClick={() => setEditText(true)}>Editer texte</button>
            </>
            )}

        </div>


           
            
    );
};

export default About;