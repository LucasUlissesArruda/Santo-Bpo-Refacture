"use client";

import { useState, useEffect } from 'react';
import About from '../components/About';

export default function Home() {
  const imgConfig = { width: 3840, height: 2160, ratio: 3840 / 2160 };
  const [style, setStyle] = useState({ width: 0, height: 0, top: 0, left: 0, opacity: 0 });

  useEffect(() => {
    const calculateLayout = () => {
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const screenRatio = screenW / screenH;
      let renderW, renderH;

      // Responsividade: Em mobile a imagem ocupa 95% da largura, em desktop 85% da altura
      if (screenRatio > imgConfig.ratio) {
        renderH = screenH * 0.85; 
        renderW = renderH * imgConfig.ratio;
      } else {
        renderW = screenW * 0.92; 
        renderH = renderW / imgConfig.ratio;
      }

      setStyle({
        width: renderW,
        height: renderH,
        left: (screenW - renderW) / 2,
        top: ((screenH - renderH) / 2) + 40, // Offset menor para mobile
        opacity: 1
      });
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, []);

  return (
    <main>
      {/* CAMADA 1: HERO FIXED */}
      <div className="hero-container">
        <img 
          src="/img/fotoannie.jpg" 
          alt="Destaque Santo BPO"
          className="hero-image"
          style={{
            position: 'absolute',
            width: `${style.width}px`,
            height: `${style.height}px`,
            top: `${style.top}px`, 
            left: `${style.left}px`,
            opacity: style.opacity,
            borderRadius: '20px',
            boxShadow: '0 40px 100px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* CAMADA 2: CONTEÚDO SCROLLABLE */}
      <div className="content-wrapper">
        <div className="container">
          <div className="row justify-content-center py-4">
            <div style={{ width: '50px', height: '4px', background: '#ddd', borderRadius: '2px' }} />
          </div>
          <About />
        </div>
        
        {/* Placeholder para próximas seções */}
        <section className="section-padding text-center" style={{ background: '#fcfcfc' }}>
            <h2 className="title-display" style={{ color: '#ccc', fontSize: '1.5rem' }}>Nossos Serviços em breve...</h2>
        </section>
      </div>
    </main>
  );
}