"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-custom ${isScrolled ? "nav-active" : ""}`}>
      <div className="container nav-container">
        {/* LOGO: Agora com mais destaque */}
        <Link href="/" className="nav-logo">
           <span className="logo-font">Santo BPO</span>
        </Link>

        {/* MENU: Links menores e botão refinado */}
        <div className={`nav-links-wrapper ${isOpen ? "nav-open" : ""}`}>
          <div className="nav-links">
            <Link href="#inicio" onClick={() => setIsOpen(false)}>Início</Link>
            <Link href="#quem-somos" onClick={() => setIsOpen(false)}>Quem Somos</Link>
            <Link href="#servicos" onClick={() => setIsOpen(false)}>Serviços</Link>
            <Link href="#contato" className="nav-cta-minimal" onClick={() => setIsOpen(false)}>
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}