# Portfolio Developer Application

## Overview

This is a modern full-stack portfolio application built to showcase a developer's skills, projects, and experience. The application features a sleek, dark-themed design with neon accents and interactive particle effects. It includes sections for personal information, skills, projects, work experience, and a contact form. The portfolio is designed to be responsive and visually appealing with smooth animations and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built using **React 18** with **TypeScript** for type safety. The application uses **Vite** as the build tool for fast development and optimized production builds. Component styling is handled through **Tailwind CSS** with a comprehensive design system using CSS custom properties for theming.

**UI Components**: The application leverages **shadcn/ui** components built on top of **Radix UI** primitives, providing accessible and customizable UI elements. Components follow the compound component pattern and are designed with dark theme support.

**State Management**: Uses **TanStack Query (React Query)** for server state management, providing efficient data fetching, caching, and synchronization capabilities.

**Routing**: Implements **Wouter** as a lightweight routing solution for client-side navigation.

**Form Handling**: Utilizes **React Hook Form** with **Zod** schema validation for type-safe form management and validation.

### Backend Architecture
The server is built with **Express.js** running on **Node.js** with TypeScript. The architecture follows a simple REST API pattern with modular route organization.

**Development Setup**: In development mode, the application integrates Vite's dev server as middleware, enabling hot module replacement and fast refresh during development.

**API Structure**: RESTful endpoints handle contact form submissions and message retrieval, with proper error handling and validation.

**Request Handling**: Implements comprehensive request logging and error handling middleware for monitoring and debugging.

### Data Storage Solutions
The application is designed with flexibility in mind, supporting both in-memory storage for development and PostgreSQL for production environments.

**ORM**: Uses **Drizzle ORM** for type-safe database operations with PostgreSQL dialect configuration.

**Schema Management**: Database schemas are defined using Drizzle's schema builder with proper TypeScript types generated automatically.

**Storage Abstraction**: Implements a storage interface pattern allowing easy switching between memory-based storage (for development) and database-backed storage (for production).

### Authentication and Authorization
Currently implements a basic user schema foundation with username/password fields, providing the groundwork for future authentication implementation.

### External Dependencies

**Database**: Configured for **PostgreSQL** via **Neon Database** serverless connection (@neondatabase/serverless)

**UI Framework**: **Radix UI** components (@radix-ui/*) for accessible, unstyled UI primitives

**Styling**: **Tailwind CSS** for utility-first CSS framework with custom design tokens

**Form Management**: **React Hook Form** with **Zod** for form validation and type safety

**State Management**: **TanStack Query** for server state management and data fetching

**Development Tools**: **Vite** for build tooling, **TypeScript** for type safety, **ESBuild** for server bundling

**UI Enhancements**: **Embla Carousel** for carousel components, **Lucide React** for icons, **date-fns** for date manipulation

**Routing**: **Wouter** for lightweight client-side routing

The application follows modern full-stack development practices with strong typing throughout the entire stack, from database schemas to API responses to UI components.