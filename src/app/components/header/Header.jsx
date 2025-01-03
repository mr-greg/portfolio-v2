'use client';
import { useState } from 'react';
import Link from 'next/link';
import StyledHeader from './StyledHeader';

export default function Header() {
  const [buttonText, setButtonText] = useState("Contact");

  const handleCopy = async () => {
    try {
      // Tenter de copier via Clipboard API
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText("gregory.drv@gmail.com");
      } else {
        // Alternative pour Safari ou anciens navigateurs
        const textarea = document.createElement("textarea");
        textarea.value = "gregory.drv@gmail.com";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      // Modifier le texte du bouton
      setButtonText("E-mail copiée !");
      setTimeout(() => {
        setButtonText("Contact");
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setButtonText("Erreur...");
      setTimeout(() => {
        setButtonText("Contact");
      }, 2000);
    }
  };

  return (
    <StyledHeader id='accueil'>
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
        {/* Bouton avec gestion de fallback */}
        <button onClick={handleCopy}>{buttonText}</button>
      </div>
    </StyledHeader>
  );
}
