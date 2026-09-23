# Dietas al Día

## Descripción general

Este prototipo funcional corresponde a una aplicación web PWA orientada a la gestión nutricional y clínica. Su objetivo es apoyar la organización de dietas, pacientes, alimentos y diagnósticos, facilitando la recomendación de planes alimenticios adecuados a cada caso.

La aplicación está diseñada como una herramienta de apoyo para profesionales de la salud, con especial foco en la nutrición clínica, la monitorización de pacientes y la gestión de información relevante para la planificación dietética.

## Contexto del problema

En entornos clínicos y asistenciales, la planificación de dietas requiere tener en cuenta múltiples variables, como:

- el paciente activo,
- sus enfermedades o condiciones médicas,
- las contraindicaciónes alimentarias,
- los hábitos o necesidades nutricionales,
- la disponibilidad de alimentos y nutrientes,
- la compatibilidad entre dietas y diagnósticos.

Una herramienta digital permite centralizar este conocimiento, reducir errores de gestión y facilitar la toma de decisiones basada en información estructurada.

## Objetivo del prototipo

El objetivo principal de esta aplicación es demostrar una solución funcional para:

- gestionar pacientes,
- catalogar alimentos, nutrientes y vitaminas,
- registrar enfermedades y dietas,
- seleccionar un paciente activo,
- sugerir dietas compatibles con el diagnóstico,
- mantener un historial o estado local de la sesión,
- ofrecer una experiencia usable en dispositivos móviles y escritorio.

## Funcionalidades principales

El prototipo incluye capacidades clave como:

- Dashboard con indicadores y auditoría
- Gestión de catálogos de alimentos, nutrientes, vitaminas y enfermedades
- Administración de pacientes y dietas
- Selección del paciente activo en la sesión actual
- Recomendación de dietas compatibles según diagnóstico y restricciones
- Persistencia local del estado de la aplicación
- Diseño adaptable para móvil y escritorio
- Compatibilidad con servicio PWA y uso básico offline
- Acceso accesible y navegación simple

## Público objetivo

La solución está orientada a:

- profesionales nutricionales,
- equipos clínicos,
- personal de apoyo sanitario,
- usuarios que necesiten una herramienta de planificación dietética con enfoque documental y asistencial.

## Tecnologías utilizadas

- React 18 + TypeScript
- Vite
- React Router
- LocalStorage para persistencia
- PWA con manifest y service worker
- Vitest + Testing Library
- Diseño responsive y accesible

## Estructura del proyecto

```text
Prototipo_Funcional_Dietas/
├── README.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── public/
│   ├── manifest.webmanifest
│   └── sw.js
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   ├── assets/
│   ├── context/
│   ├── services/
│   └── test/
├── EPC28_analisis.md
├── EPC28_criterios_aceptacion.md
├── EPC28_matriz_trazabilidad.md
├── EPC28_prompt_code.md
├── EPC28_requisitos_funcionales.md
├── EPC28_requisitos_no_funcionales.md
├── EPC28_test_cases.md
└── eslint.config.js
```

## Navegación rápida

- [Análisis](EPC28_analisis.md)
- [Criterios de aceptación](EPC28_criterios_aceptacion.md)
- [Matriz de trazabilidad](EPC28_matriz_trazabilidad.md)
- [Prompt base](EPC28_prompt_code.md)
- [Requisitos funcionales](EPC28_requisitos_funcionales.md)
- [Requisitos no funcionales](EPC28_requisitos_no_funcionales.md)
- [Casos de prueba](EPC28_test_cases.md)

## Cómo ejecutar la aplicación

```bash
npm install
npm run dev
```

## Verificación del proyecto

```bash
npm test
npm run build
```

## Documentación asociada

### 1. Análisis
Se documenta la situación problemática, el dominio del sistema y la propuesta funcional del asistente nutricional.

### 2. Criterios de aceptación
Definen qué debe cumplirse para considerar la solución aceptable desde la perspectiva del usuario y del cliente.

### 3. Matriz de trazabilidad
Relación entre requisitos, necesidades y validación del sistema.

### 4. Prompt base / código
Referencia para generar o ajustar la lógica funcional del prototipo.

### 5. Requisitos funcionales
Describen qué debe hacer la aplicación.

### 6. Requisitos no funcionales
Definen restricciones, calidad, rendimiento, accesibilidad y usabilidad.

### 7. Casos de prueba
Validan el comportamiento del prototipo y verifican que cumple con los requisitos definidos.

## Estado del prototipo

El proyecto se encuentra en un estado funcional de prototipo, orientado a demostración, validación y evaluación de requisitos de ingeniería de software.

Su finalidad es mostrar una solución viable para la gestión nutricional clínica, sin requerir todavía un despliegue productivo completo.

---

> Este repositorio representa una implementación demostrativa de una aplicación de apoyo nutricional con enfoque PWA, validada como prototipo funcional dentro del contexto académico y de ingeniería de requisitos.
