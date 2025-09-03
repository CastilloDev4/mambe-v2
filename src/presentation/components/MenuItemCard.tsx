import React from 'react';
import type { MenuItem } from '../../domain/entities/MenuItem';
import './MenuItemCard.css';

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(price);
  };

  return (
    <div className="menu-item-card">
      {item.imageUrl && (
        <div className="menu-item-image">
          <img src={item.imageUrl} alt={item.name} />
          {item.isPopular && <span className="popular-badge">Popular</span>}
        </div>
      )}
      
      <div className="menu-item-content">
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-description">{item.description}</p>
        
        <div className="menu-item-ingredients">
          <strong>Ingredientes:</strong> {item.ingredients.join(', ')}
        </div>
        
        {item.allergens && item.allergens.length > 0 && (
          <div className="menu-item-allergens">
            <strong>Alérgenos:</strong> {item.allergens.join(', ')}
          </div>
        )}
        
        <div className="menu-item-footer">
          <span className="menu-item-price">{formatPrice(item.price)}</span>
          {!item.isAvailable && (
            <span className="unavailable-badge">No disponible</span>
          )}
        </div>
      </div>
    </div>
  );
};
