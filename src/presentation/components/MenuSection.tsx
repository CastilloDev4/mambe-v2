import React, { useState } from 'react';
import { useMenu } from '../hooks/useMenu';
import { MenuItemCard } from '../components/MenuItemCard';
import { MenuCategory } from '../../domain/entities/MenuItem';
import './MenuSection.css';

export const MenuSection: React.FC = () => {
  const { menuItems, loading, error, loadAllItems, loadItemsByCategory, loadPopularItems } = useMenu();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleFilterChange = async (filter: string) => {
    setActiveFilter(filter);
    
    switch (filter) {
      case 'all':
        await loadAllItems();
        break;
      case 'popular':
        await loadPopularItems();
        break;
      case MenuCategory.BURGERS:
      case MenuCategory.APPETIZERS:
      case MenuCategory.DRINKS:
      case MenuCategory.DESSERTS:
      case MenuCategory.COMBOS:
        await loadItemsByCategory(filter);
        break;
    }
  };

  const filterButtons = [
    { key: 'all', label: 'Todos' },
    { key: 'popular', label: 'Populares' },
    { key: MenuCategory.BURGERS, label: 'Hamburguesas' },
    { key: MenuCategory.APPETIZERS, label: 'Acompañamientos' },
    { key: MenuCategory.DRINKS, label: 'Bebidas' },
    { key: MenuCategory.DESSERTS, label: 'Postres' }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="section-title">Nuestro Menú</h2>
        <p className="section-subtitle">
          Descubre nuestras deliciosas hamburguesas artesanales y acompañamientos
        </p>

        <div className="menu-filters">
          {filterButtons.map(button => (
            <button
              key={button.key}
              className={`filter-button ${activeFilter === button.key ? 'active' : ''}`}
              onClick={() => handleFilterChange(button.key)}
            >
              {button.label}
            </button>
          ))}
        </div>

        {loading && (
          <div className="loading">
            <p>Cargando menú...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>Error: {error}</p>
            <button onClick={loadAllItems} className="retry-button">
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="menu-grid">
            {menuItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {!loading && !error && menuItems.length === 0 && (
          <div className="no-items">
            <p>No hay elementos disponibles en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
};
