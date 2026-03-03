"use client";

import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ESTILOS (JS Puro)
  const navStyle = {
    // Vidro Jateado (Mantive igual pois você curtiu)
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
    backdropFilter: scrolled ? 'blur(15px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
    boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
    
    // Padding compacto
    padding: scrolled ? '5px 0' : '15px 0',
    transition: 'all 0.4s ease'
  };

  const textStyle = {
    color: '#333333', 
    fontFamily: 'MoonTime, sans-serif',
    
    // MUDANÇA 1: Sem negrito! Fonte normal para ficar elegante
    fontWeight: '400', 
    fontSize: '2.6rem', // Aumentei um pouquinho já que tiramos o negrito
    
    // Aura branca suave
    textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255,255,255,0.5)',
    transition: 'all 0.4s ease'
  };

  const linkStyle = {
    color: '#333333',
    
    // MUDANÇA 2: Peso da fonte muito mais leve (era 600)
    fontWeight: '500', 
    fontSize: '0.95rem',
    
    textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
    marginLeft: '25px',
    transition: 'color 0.4s ease'
  };

  return (
    <Navbar expand="lg" fixed="top" style={navStyle}>
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand style={textStyle}>
            Santo BPO
          </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          style={{ 
            border: 'none',
            transform: 'scale(0.8)',
            backgroundColor: 'rgba(255,255,255,0.5)'
          }} 
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            {['Início', 'Sobre a Santo', 'Serviços', 'Planos', 'Contato'].map((item, index) => {
               const hrefs = ['#inicio', '#quem-somos', '#servicos', '#planos', '#contato'];
               return (
                 <Nav.Link key={index} href={hrefs[index]} style={linkStyle}>
                    {item}
                 </Nav.Link>
               )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}