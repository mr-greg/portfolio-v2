'use client';
import React from 'react';
import StyledToolbox, { StyledSection, StyledButton } from './StyledToolbox';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaNode, FaPython, FaPhp, FaJava, FaWordpress, FaGit, FaGithub, FaLaravel, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiSqlite, SiFigma, SiShopify, SiStyledcomponents, SiSocketdotio, SiDavinciresolve } from 'react-icons/si';
import { PiFileSql } from "react-icons/pi";
import { LiaSymfony, LiaElementor } from "react-icons/lia";
import { TbBrandDjango, TbBrandAdobeAfterEffect } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";
import { FaWebflow } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import Image from "next/image";

export default function Toolbox() {
  const tools = {
    frontEnd: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Tailwind', 
      'Framer Motion', 'GSAP', 'Figma', 'Styled Components', 'SASS',
    ],
    backEnd: [
      'Node', 'Java', 'PHP', 'Python', 'MongoDB', 'SQL', 
      'SQLite', 'Symfony', 'Django', 'Laravel', 'Socket.io',
    ],
    general: [
      'WordPress', 'Elementor', 'Divi', 'Git', 'GitHub', 
      'Photoshop', 'DaVinci Resolve', 'After Effect', 'Webflow', 
      'Shopify', 'Framer Builder',
    ],
  };

  const toolIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    SASS: <FaSass />,
    JavaScript: <FaJsSquare />,
    React: <FaReact />,
    Vue: <FaVuejs />,
    Tailwind: <SiTailwindcss />,
    'Framer Motion': (
        <Image src={"/img/framer-motion.svg"} alt="Framer Motion Logo" width={16} height={16} />
    ),
    GSAP: (
        <Image src={"/img/gsap.svg"} alt="Gsap Logo" width={16} height={16}/>
    ),
    Figma: <SiFigma />,
    'Styled Components': <SiStyledcomponents />,
    Node: <FaNode />,
    Java: <FaJava />,
    PHP: <FaPhp />,
    Python: <FaPython />,
    MongoDB: <SiMongodb />,
    SQL: <PiFileSql />,
    SQLite: <SiSqlite />,
    Symfony: <LiaSymfony />,
    Django: <TbBrandDjango />,
    Laravel: <FaLaravel />,
    'Socket.io': <SiSocketdotio />,
    WordPress: <FaWordpress />,
    Elementor: <LiaElementor />,
    Divi: (
        <Image src={"/img/divi.svg"} alt="Divi Logo" width={16} height={16}/>
    ),
    Git: <FaGit />,
    GitHub: <FaGithub />,
    Photoshop: <DiPhotoshop />,
    'DaVinci Resolve': <SiDavinciresolve />,
    'After Effect': <TbBrandAdobeAfterEffect />,
    Webflow: <FaWebflow />,
    Shopify: <SiShopify />,
    'Framer Builder': <FiFramer />,
  };

  return (
    <StyledToolbox>
      <h2>Ma boîte à outils</h2>
      <StyledSection>
        <h3>Front-End</h3>
        <div className="tool-list">
          {tools.frontEnd.map((tool, index) => (
            <StyledButton key={index}>
              {toolIcons[tool] && <span className="icon">{toolIcons[tool]}</span>}
              {tool}
            </StyledButton>
          ))}
        </div>
      </StyledSection>
      <StyledSection>
        <h3>Back-End</h3>
        <div className="tool-list">
          {tools.backEnd.map((tool, index) => (
            <StyledButton key={index}>
              {toolIcons[tool] && <span className="icon">{toolIcons[tool]}</span>}
              {tool}
            </StyledButton>
          ))}
        </div>
      </StyledSection>
      <StyledSection>
        <h3>Général</h3>
        <div className="tool-list">
          {tools.general.map((tool, index) => (
            <StyledButton key={index}>
              {toolIcons[tool] && <span className="icon">{toolIcons[tool]}</span>}
              {tool}
            </StyledButton>
          ))}
        </div>
      </StyledSection>
    </StyledToolbox>
  );
}
