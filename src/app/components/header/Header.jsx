'use client';
import Link from 'next/link';
import StyledHeader from './StyledHeader'

export default function Header() {
  const handleCopy = async () => {
    try {
      // Attempt to copy the text to clipboard
      await navigator.clipboard.writeText("gregory.drv@gmail.com");

      // Optional: Provide user feedback (you can use a toast or alert for UX)
      alert('E-mail copiée dans le presse-papier, merci :)');
    } catch (err) {
      console.error('Failed to copy text: ', err);
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
            <button onClick={handleCopy}>Contact</button>
        </div>
    </StyledHeader>
  )
}