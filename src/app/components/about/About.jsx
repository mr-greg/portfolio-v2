'use client';
import React from 'react'
import StyledAbout from './StyledAbout';
import Image from "next/image";
import { StyledButton } from '../toolbox/StyledToolbox.jsx';
import { GrGamepad } from "react-icons/gr";
import { LuCodeXml } from "react-icons/lu";
import { MdVideoSettings, MdOutlineMovie } from "react-icons/md";
import { PiDrone } from "react-icons/pi";
import { BiDumbbell } from "react-icons/bi";


export default function About() {

  const interestButtons = [
    { name: 'Jeux vidéos', icon: <GrGamepad />},
    { name: 'Programmation', icon: <LuCodeXml />},
    { name: 'Montage vidéo', icon: <MdVideoSettings />},
    { name: 'Cinéma', icon: <MdOutlineMovie />},
    { name: 'Drone', icon: <PiDrone />},
    { name: 'Musculation', icon: <BiDumbbell />},
  ]
  return (
    <StyledAbout id='about'>
        <h2>À propos</h2>
        <div className="about-container">
            <div className="about-img-container">
              <Image src={"/img/isometric-about.png"} alt="a propos illustration bureau isometrique" width={500} height={500}/>
            </div>
            <div className="text-container">
                <p>
                    <strong>Développeur web</strong> passionné
                    <Image src={"/img/rocket.svg"} alt="emoji fusée" width={58} height={58}/>
                </p>
                <p>
                Ayant une préférence actuelle pour le <strong>front-end</strong> tout en étant compétent dans le développement full-stack. J'aime me spécialiser dans un domaine afin d'obtenir des résultats exceptionnels, mais je reste également ouvert à la diversité des projets. De la conception de <strong>sites web</strong> à la création d'applications PC/Mobile, en passant par le développement de plugins et de mods pour les jeux vidéo, mes projets personnels sont très variés. Mon appétit insatiable pour <strong>l'apprentissage</strong> me pousse toujours à découvrir de nouvelles technologies et à <strong>améliorer mes compétences.</strong>
                </p>
            </div>
        </div>
        <div className="interest-wrapper">
          <Image className='heart-emoji' src={"/img/heart.svg"} alt="emoji coeur centre interets" width={50} height={50}/>
          <div className="interest">
            {interestButtons.map((button, index) => (
              <StyledButton key={index}>
                <span className="icon">{button.icon}</span>
                {button.name}
              </StyledButton>
            ))}
          </div>
        </div>
        

    </StyledAbout>
  )
}
