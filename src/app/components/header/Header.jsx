'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import StyledHeader from './StyledHeader';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Contrôle la visibilité du menu
  const [lastScrollY, setLastScrollY] = useState(0); // Position précédente du scroll
  const [buttonText, setButtonText] = useState('Contact');

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText('gregory.drv@gmail.com');
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = 'gregory.drv@gmail.com';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setButtonText('E-mail copiée !');
      setTimeout(() => {
        setButtonText('Contact');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setButtonText('Erreur...');
      setTimeout(() => {
        setButtonText('Contact');
      }, 2000);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const tolerance = 10; // Ajustez si nécessaire
  
      setIsVisible(scrollTop <= tolerance);

      // Assurez-vous que la position a changé de manière significative
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        // Si on scrolle vers le haut, montrer le menu
        if (currentScrollY <= lastScrollY) {
          
          setIsVisible(true);
        } else {
          // Si on scrolle vers le bas, cacher le menu
          setIsVisible(false);
        }
        setLastScrollY(currentScrollY); // Met à jour la position précédente
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  

  return (
    <StyledHeader isMenuOpen={isMenuOpen} isVisible={isVisible}>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>
      <div className="name">
        <Link href="#accueil">
          <h4 className="logo">Grégory.jsx</h4>
        </Link>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-container">
          <Link href="#accueil" onClick={closeMenu}>
            Accueil
          </Link>
          <Link href="#about" onClick={closeMenu}>
            À propos
          </Link>
          <Link href="#projets" onClick={closeMenu}>
            Projets
          </Link>
        </div>
        <button onClick={handleCopy}>{buttonText}</button>
      </div>
    </StyledHeader>
  );
}
