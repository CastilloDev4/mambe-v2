# Mambe - Landing Page

Landing page para la hamburguesería Mambe, desarrollada con React, TypeScript, Vite y arquitectura hexagonal.

## 🏗️ Arquitectura Hexagonal

Este proyecto implementa arquitectura hexagonal (puertos y adaptadores) para mantener un código limpio, testeable y mantenible:

### Estructura del Proyecto

```
src/
├── domain/              # Capa de dominio
│   ├── entities/        # Entidades de negocio
│   └── ports/           # Interfaces (puertos)
├── application/         # Capa de aplicación
│   ├── services/        # Servicios de aplicación
│   └── usecases/        # Casos de uso
├── infrastructure/      # Capa de infraestructura
│   ├── adapters/        # Implementaciones de servicios externos
│   └── repositories/    # Implementaciones de repositorios
├── presentation/        # Capa de presentación
│   ├── components/      # Componentes React
│   ├── pages/           # Páginas principales
│   └── hooks/           # Custom hooks
└── shared/              # Código compartido
    ├── constants/       # Constantes globales
    ├── types/           # Tipos TypeScript
    ├── utils/           # Utilidades
    └── dependencies.ts  # Contenedor de dependencias
```

### Capas de la Arquitectura

- **Domain**: Contiene las entidades de negocio y las reglas fundamentales (MenuItem, RestaurantInfo, ContactForm)
- **Application**: Implementa los casos de uso y la lógica de aplicación
- **Infrastructure**: Adapta tecnologías externas (repositorios en memoria, servicios de email)
- **Presentation**: Componentes React y lógica de presentación

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **CSS Modules** - Estilos modulares
- **Arquitectura Hexagonal** - Patrón de diseño

## 📦 Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🛠️ Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## 🌟 Características

### Funcionalidades Implementadas

- **Hero Section**: Presentación principal con información del restaurante
- **Menú Interactivo**: Visualización de items del menú con filtros por categoría
- **Formulario de Contacto**: Sistema de contacto con validación
- **Diseño Responsivo**: Adaptado para dispositivos móviles y desktop
- **Navegación Suave**: Scroll suave entre secciones

### Entidades de Dominio

- **MenuItem**: Hamburguesas, bebidas, acompañamientos con precios e ingredientes
- **RestaurantInfo**: Información del negocio, horarios y contacto
- **ContactForm**: Formularios de contacto con validación

