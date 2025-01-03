'use client';
import Link from 'next/link';
import StyledFooter from './StyledFooter';
import { useState } from 'react';

export default function Footer() {
    const [buttonText, setButtonText] = useState("Contact"); // Définir le texte initial
    
      const handleCopy = async () => {
        try {
          // Tenter de copier l'adresse e-mail dans le presse-papier
          await navigator.clipboard.writeText("gregory.drv@gmail.com");
          // Modifier le texte du bouton
          setButtonText("E-mail copiée !");
          // Remettre le texte initial après 2 secondes
          setTimeout(() => {
            setButtonText("Contact");
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    };

    return (
    <StyledFooter>
        <div className='name'>
            <Link href="#accueil">
                <h4 className='logo'>Grégory.jsx</h4>
            </Link>
        </div>
        <div className='menu'>
            <div className='nav-container'>
                <Link href="#accueil">Accueil</Link>
                <Link href="#about">À propos</Link>
                <Link href="#projets">Projets</Link>
            </div>
            <button onClick={handleCopy}>{buttonText}</button>
        </div>
    </StyledFooter>
  )
}
