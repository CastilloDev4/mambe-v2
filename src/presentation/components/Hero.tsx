import React from 'react';
import { useRestaurantInfo } from '../hooks/useRestaurantInfo';
import './Hero.css';

export const Hero: React.FC = () => {
  const { restaurantInfo, loading } = useRestaurantInfo();

  if (loading || !restaurantInfo) {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Cargando...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero-background">
        {restaurantInfo.heroImage && (
          <img src={restaurantInfo.heroImage} alt={restaurantInfo.name} />
        )}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{restaurantInfo.name}</h1>
          <p className="hero-subtitle">{restaurantInfo.description}</p>
          
          <div className="hero-actions">
            <button className="cta-button primary">Ver Menú</button>
            <button className="cta-button secondary">Contáctanos</button>
          </div>
        </div>
      </div>
    </section>
  );
};
