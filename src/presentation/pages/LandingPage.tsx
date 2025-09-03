import React from 'react';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { ContactSection } from '../components/ContactSection';
import './LandingPage.css';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <div className="nav-container">
            <div className="nav-logo">
              <h1>Mambe</h1>
            </div>
            <ul className="nav-menu">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <MenuSection />
        
        <ContactSection />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mambe</h3>
            <p>La mejor hamburguesería artesanal de Bogotá</p>
          </div>
          
          <div className="footer-section">
            <h4>Horarios</h4>
            <p>Lunes - Jueves: 11:00 - 22:00</p>
            <p>Viernes - Sábado: 11:00 - 23:00</p>
            <p>Domingo: 12:00 - 21:00</p>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Cra 13 #85-32, Bogotá</p>
            <p>+57 1 555-0123</p>
            <p>hola@mambe.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Mambe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
