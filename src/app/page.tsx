"use client";

import { useState, useEffect } from 'react';
import About from '../components/About';

export default function Home() {
  // 1. Definição da Imagem 4K
  const imgConfig = {
    width: 3840,
    height: 2160,
    ratio: 3840 / 2160
  };

  // 2. Estado Visual
  const [style, setStyle] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    opacity: 0
  });

  // 3. Cálculo Matemático
  useEffect(() => {
    const calculateLayout = () => {
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const screenRatio = screenW / screenH;

      let renderW, renderH;

      if (screenRatio > imgConfig.ratio) {
        renderH = screenH * 0.85; 
        renderW = renderH * imgConfig.ratio;
      } else {
        renderW = screenW * 0.95; 
        renderH = renderW / imgConfig.ratio;
      }

      const posX = (screenW - renderW) / 2;
      // Offset de 80px para descer a imagem e liberar espaço pro Menu
      const posY = ((screenH - renderH) / 2) + 80;

      setStyle({
        width: renderW,
        height: renderH,
        left: posX,
        top: posY,
        opacity: 1
      });
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, []);

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      {/* --- CAMADA 1: A FOTO --- */}
      <div style={{ 
        position: 'fixed', 
        top: 0, left: 0, width: '100%', height: '100vh', 
        zIndex: 0,
        // Fundo branco com leve cinza embaixo para dar profundidade
        background: 'linear-gradient(to bottom, #ffffff 0%, #f0f0f0 100%)' 
      }}>
        
        <img 
          src="/img/fotoannie.jpg" 
          alt="Destaque Santo BPO"
          style={{
            position: 'absolute',
            width: `${style.width}px`,
            height: `${style.height}px`,
            top: `${style.top}px`, 
            left: `${style.left}px`,
            opacity: style.opacity,
            transition: 'opacity 0.8s ease-out',
            boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.15)', // Sombra suave
            borderRadius: '12px',
            zIndex: 1
          }}
        />
        
      </div>

      {/* --- CAMADA 2: CONTEÚDO --- */}
      <div style={{ 
        position: 'relative',
        marginTop: '100vh', 
        zIndex: 10,
        backgroundColor: '#ffffff',
        // Sombra invertida no topo para separar o conteudo da foto
        boxShadow: '0 -10px 40px rgba(0,0,0,0.05)', 
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <div style={{ width: '60px', height: '6px', backgroundColor: '#e5e5e5', borderRadius: '10px' }}></div>
        </div>

        <About />

        <div style={{ 
          height: '400px', 
          backgroundColor: '#f9f9f9', 
          display: 'flex', justifyContent: 'center', alignItems: 'center' 
        }}>
          <p style={{ color: '#aaa', letterSpacing: '1px' }}>CONTINUA...</p>
        </div>

      </div>
    </main>
  );
}