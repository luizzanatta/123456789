import React, { useState, useEffect } from 'react';
const { motion } = window.FramerMotion || { motion: { div: 'div', h1: 'h1', p: 'p', button: 'button', img: 'img' } };
import { Menu, X, ArrowRight, ShieldCheck, HeartPulse, Stethoscope, Smartphone } from 'lucide-react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <HeartPulse className="logo-icon" size={28} />
          <span>cell<strong>Saúde</strong></span>
        </div>
        
        <div className="nav-links desktop-only">
          <a href="#planos">Planos</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#duvidas">Dúvidas Frequentes</a>
        </div>

        <div className="nav-actions desktop-only">
          <button className="btn-text">Entrar</button>
          <button className="btn-primary nav-btn">Assinar Agora</button>
        </div>

        <button className="mobile-menu-btn mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">
            <Stethoscope size={16} />
            <span>Atendimento 24h</span>
          </div>
          
          <h1>
            Médicos On-line, <br />
            <span className="highlight">Sem Deslocamento,</span> <br />
            Sem filas e Sem Espera.
          </h1>
          
          <p className="hero-subtitle">
            No celular ou computador, tenha atendimento médico especializado na palma da sua mão.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary btn-large">
              Ver Planos <ArrowRight size={20} />
            </button>
            <button className="btn-secondary btn-large">
              <Smartphone size={20} /> Baixar App
            </button>
          </div>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>Acesso imediato sem carência</span>
            </div>
            <div className="trust-item">
              <HeartPulse size={20} className="trust-icon" />
              <span>+12 Especialidades</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visuals"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="image-composition">
            <img 
              src="https://media.istockphoto.com/id/1713155755/pt/foto/success-woman-freelancer-is-working-on-a-new-project-on-laptop-work-business-people-concept.jpg?s=612x612&w=0&k=20&c=nrDom9cHZQyFoe3ATvDfhIWH1LtGSb2qgfYHlwVafqQ=" 
              alt="Médica atendendo online" 
              className="main-hero-image" 
            />
            
            <div className="floating-card card-1">
              <div className="card-icon-wrapper">
                <ShieldCheck size={24} color="#fff" />
              </div>
              <div>
                <strong>Receita Digital</strong>
                <span>Pronta na hora</span>
              </div>
            </div>

            <img 
              src="https://www.cellsaude.com.br/images/mockup1.png" 
              alt="Interface do Aplicativo cellSaúde" 
              className="app-mockup-overlay"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
