# Proyecto Mambe - Landing Page

Proyecto de landing page para hamburguesería Mambe utilizando React, Vite y arquitectura hexagonal.

## Arquitectura Hexagonal
- **Domain**: Entidades de negocio y reglas de dominio
- **Application**: Casos de uso y servicios de aplicación
- **Infrastructure**: Implementaciones específicas (API, persistencia, UI)
- **Presentation**: Componentes React y lógica de presentación

## Stack Técnico
- React 18
- TypeScript
- Vite
- CSS Modules / Styled Components
- Arquitectura Hexagonal

## Estado del Proyecto
- [x] ✅ Verificar archivo copilot-instructions.md - **COMPLETADO**
- [x] ✅ Clarificar requerimientos del proyecto - **COMPLETADO**: Landing page para hamburguesería Mambe con arquitectura hexagonal
- [x] ✅ Scaffolding del proyecto - **COMPLETADO**: Proyecto Vite con React y TypeScript creado exitosamente
- [x] ✅ Personalizar el proyecto - **COMPLETADO**: Implementada arquitectura hexagonal completa con entidades, casos de uso, repositorios y componentes React
- [x] ✅ Instalar extensiones requeridas - **COMPLETADO**: No se requirieron extensiones adicionales
- [x] ✅ Compilar el proyecto - **COMPLETADO**: Proyecto compilado sin errores, build exitoso
- [x] ✅ Crear y ejecutar tareas - **COMPLETADO**: Tarea de desarrollo creada y servidor ejecutándose en puerto 5173
- [x] ✅ Lanzar el proyecto - **COMPLETADO**: Servidor de desarrollo disponible en http://localhost:5173
- [x] ✅ Completar documentación - **COMPLETADO**: README.md actualizado con documentación completa del proyecto

## Estructura Implementada

```
src/
├── domain/
│   ├── entities/ (MenuItem, RestaurantInfo, ContactForm)
│   └── ports/ (MenuRepository, RestaurantRepository, ContactService)
├── application/
│   └── usecases/ (MenuUseCases, ContactUseCases)
├── infrastructure/
│   ├── adapters/ (EmailContactService)
│   └── repositories/ (InMemoryMenuRepository, InMemoryRestaurantRepository)
├── presentation/
│   ├── components/ (Hero, MenuSection, ContactSection, MenuItemCard)
│   ├── pages/ (LandingPage)
│   └── hooks/ (useMenu, useContact, useRestaurantInfo)
└── shared/
    └── dependencies.ts (Contenedor de inyección de dependencias)
```

## Funcionalidades Implementadas
- ✅ Hero section con información del restaurante
- ✅ Sección de menú interactiva con filtros por categoría
- ✅ Formulario de contacto con validación
- ✅ Diseño responsivo y moderno
- ✅ Navegación suave entre secciones
- ✅ Sistema de validación de formularios
- ✅ Manejo de estados de carga y errores

## Tecnologías y Patrones
- ✅ Arquitectura hexagonal (puertos y adaptadores)
- ✅ Inyección de dependencias
- ✅ Custom hooks para lógica de presentación
- ✅ TypeScript con tipado estricto
- ✅ CSS modular para estilos
- ✅ Componentes reutilizables
