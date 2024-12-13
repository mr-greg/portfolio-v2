'use client'
import StyledHeader from './StyledHeader'

export default function Header() {
  return (
    <StyledHeader>
        <div className='name'>
            <h4>Grégory.jsx</h4>
        </div>
        <div className='menu'>
            <div className='nav-container'>
                <a href="">Accueil</a>
                <a href="">À propos</a>
                <a href="">Projets</a>
            </div>
            <button>Contact</button>
        </div>
    </StyledHeader>
  )
}