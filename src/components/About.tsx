"use client";

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="quem-somos" className="somos-section" style={{ overflow: 'hidden', padding: '80px 20px' }}>
      {/* Texto */}
      <div className="somos-text" data-aos="fade-right">
        <h1>Quem Somos?</h1>
        <p>
          A Santo BPO tem como missão trazer clareza e previsibilidade, com organização e planejamento. 
          Abraçando a necessidade financeira de pequenas e médias empresas, disponibilizamos um 
          atendimento atencioso e com soluções eficientes, podendo ser adaptadas às suas necessidades específicas.
        </p>
        <p>
          Financeiro efetivo, coerente com a realidade de pequenas e médias empreendedoras, 
          ajudando na gestão e organização do FINANCEIRO, para que assim possam se concentrar 
          em seus negócios e suas atividades chaves e fazer com que a empresa cresça exponencialmente.
          Hoje contamos com duas sócias administradoras que são a Annie e a Andréia.
        </p>
        <a className="cta-button" href="#planos">
          Venha para a Santo BPO
        </a>
      </div>

      {/* Imagem */}
      <div className="somos-image" data-aos="fade-left">
        <div className="background-pink"></div>
        <Image 
          src="/img/fotoequipe.jpg" 
          alt="Equipe Santo BPO - Annie e Andréia" 
          width={400} 
          height={600}
          style={{ borderRadius: '10px', width: '100%', height: 'auto', maxWidth: '400px' }}
        />
      </div>
    </section>
  );
}