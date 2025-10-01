# 🌟 Mondial Inmobiliaria - Sitio Web

Un sitio web moderno y responsive para una inmobiliaria, desarrollado con React y Vite, utilizando Tailwind CSS para el diseño.

## 🚀 Características

1) Framework Moderno: Desarrollado con React 18 + Vite

2) Diseño Responsive: Utilizando Tailwind CSS

3) Navegación SPA: Implementado con React Router DOM

4) Componentes Modulares: Arquitectura organizada y reutilizable

5) Optimizado: Build rápido y eficiente con Vite

6) Linting: Configuración ESLint para mantener código limpio

## 📁 Estructura del Proyecto

mondial-web-site/
├── public/
│   └── isotypeMondial.png      # Logo/icono de la marca
├── src/
│   ├── assets/                 # Recursos estáticos
│   │   ├── icons/              # Iconos del sitio
│   │   ├── img/                # Imágenes generales
│   │   └── logo/               # Logotipos
│   ├── components/             # Componentes reutilizables
│   │   ├── NavBarComponent.jsx # Barra de navegación
│   │   ├── HeroComponent.jsx   # Sección hero principal
│   │   ├── FooterComponent.jsx # Pie de página
│   │   ├── FormComponent.jsx   # Formularios
│   │   └── ... más componentes
│   ├── pages/                  # Páginas de la aplicación
│   │   ├── HomePage.jsx        # Página de inicio
│   │   ├── BuyPage.jsx         # Comprar propiedades
│   │   ├── RentPage.jsx        # Alquilar propiedades
│   │   ├── SellPage.jsx        # Vender propiedades
│   │   ├── UsPage.jsx          # Sobre nosotros
│   │   ├── ContactPage.jsx     # Contacto
│   │   ├── NewsPage.jsx        # Noticias
│   │   └── ... páginas legales
│   ├── styles/                 # Estilos personalizados
│   │   ├── appStyles.js        # Estilos principales
│   │   └── estilos por componente
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos globales
├── package.json
├── vite.config.js
└── eslint.config.js

## 🛠️ Tecnologías Utilizadas

Frontend: React 18, JSX

Build Tool: Vite

Styling: Tailwind CSS + CSS personalizado

Routing: React Router DOM

Linting: ESLint

Package Manager: npm

## 📋 Páginas Disponibles

- 🏠 Inicio - Landing page principal

- 🏢 Comprar - Propiedades en venta

- 🏘️ Alquilar - Propiedades en alquiler

- 💰 Vender - Publicar tu propiedad

- 👥 Nosotros - Sobre la empresa

- 📞 Contacto - Formulario de contacto

- 📰 Noticias - Novedades del sector

- ⚖️ Aviso Legal - Información legal

- 🔒 Política de Privacidad - Protección de datos

- 🍪 Cookies - Política de cookies

## 🚀 Instalación y Uso
Prerrequisitos
Node.js (versión 18 o superior)

npm

### Pasos para instalar

#### Clonar el repositorio

(bash)
git clone [url-del-repositorio]
cd mondial-web-site/mondial
Instalar dependencias

(bash)
npm install
Ejecutar en desarrollo

(bash)
npm run dev
Abrir en el navegador

text
http://localhost:5173
Scripts Disponibles

(bash)
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run lint         # Ejecutar ESLint
npm run preview      # Preview del build de producción

## 🎨 Personalización

### Colores y Temas
El proyecto utiliza Tailwind CSS. Puedes personalizar los colores y estilos en:

tailwind.config.js (si existe)

src/index.css para estilos globales

Archivos en src/styles/ para estilos específicos

### Componentes
Cada componente está modularizado en src/components/ con sus respectivos estilos en src/styles/.

## 📱 Responsive Design
El sitio está diseñado para ser completamente responsive y funcionar en:

- 📱 Dispositivos móviles

- 💻 Tablets

- 🖥️ Desktop

## 🔧 Configuración de Build

### Variables de Entorno
Crea un archivo .env en la raíz para configurar:

#### env
VITE_APP_TITLE="Mondial Inmobiliaria"
VITE_API_URL=tu_url_de_api
Build para Producción
bash

#### npm run build
Los archivos optimizados se generarán en la carpeta dist/.

## 🤝 Contribución

### Fork el proyecto

Crea una rama para tu feature (git checkout -b feature/AmazingFeature)

Commit tus cambios (git commit -m 'Add some AmazingFeature')

Push a la rama (git push origin feature/AmazingFeature)

Abre un Pull Request

## 📄 Licencia
Este proyecto es propiedad de Mondial Inmobiliaria.

## 📞 Soporte
Para soporte técnico o preguntas sobre el desarrollo, contactar al equipo de desarrollo.

Desarrollado para Mondial Inmobiliaria.