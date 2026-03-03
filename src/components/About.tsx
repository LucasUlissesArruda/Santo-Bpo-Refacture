"use client";

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="quem-somos" className="section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Texto */}
          <div className="col-lg-6" data-aos="fade-up">
            <h1 className="title-display">Quem Somos?</h1>
            <p className="text-description">
              A <strong>Santo BPO</strong> tem como missão trazer clareza e previsibilidade através de organização e planejamento financeiro.
            </p>
            <p className="text-description">
              Atendemos pequenas e médias empresas com soluções personalizadas, permitindo que empreendedoras foquem no crescimento exponencial de seus negócios enquanto cuidamos da gestão financeira.
            </p>
            <p className="text-description mb-5">
              Liderada pelas sócias <strong>Annie e Andréia</strong>, nossa consultoria é o braço direito da sua empresa.
            </p>
            <a className="cta-main" href="#contato">
              Conheça nossos planos
            </a>
          </div>

          {/* Imagem com efeito de profundidade */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="position-relative ps-lg-5">
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '-20px',
                width: '100%',
                height: '100%',
                border: '2px solid var(--primary)',
                borderRadius: '20px',
                zIndex: -1
              }} />
              <Image 
                src="/img/fotoequipe.jpg" 
                alt="Equipe Santo BPO" 
                width={500} 
                height={700}
                className="img-fluid"
                style={{ borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}