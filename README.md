Sistema Integral de Gestión Académica y Administrativa Escolar

Estructura base del proyecto (monorepo simples con frontend y backend):

- frontend/: Aplicación web React (Vite, JavaScript, Tailwind CSS, React Router, Axios, Zustand, ESLint)
- backend/: API RESTful con Laravel (preparado para Laravel Sanctum, configurado para PostgreSQL)

Estado actual:
- Estructura inicial creada
- Frontend inicializado con Vite y dependencias para Tailwind, React Router, Axios, Zustand
- ESLint configurado en frontend y comprobado
- Backend creado con Laravel (si Composer/PHP disponibles). Preparado para usar Sanctum y PostgreSQL.
- Git inicializado en la raíz

Instrucciones rápidas:
- Frontend:
  - cd frontend
  - npm install
  - npm run dev (desarrollo)
  - npm run build (compilar en producción)
  - npm run lint (ejecutar ESLint)

- Backend:
  - cd backend
  - composer install
  - copiar .env.example a .env y configurar DB_CONNECTION=pgsql y credenciales
  - php artisan key:generate
  - composer require laravel/sanctum (si no está instalado)
  - php artisan migrate (después de configurar la base de datos)

Docker Compose:
- Desde la raíz del proyecto:
  - docker compose config
  - docker compose build
  - docker compose up -d
- Servicios incluidos:
  - PostgreSQL 16 en localhost:5432
  - Backend Laravel en localhost:8000
  - Frontend Vite en localhost:5173
  - n8n en localhost:5678

Notas:
- No se han implementado funcionalidades aún; sólo la estructura inicial.
- Requisitos locales: Node.js (>=20.19 recomendado), npm, PHP 8.1, Composer y Docker Desktop o Docker Engine activos.
