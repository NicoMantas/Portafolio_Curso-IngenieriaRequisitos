# PROMPT ÚNICO PARA AGENTE DE VS CODE
## Proyecto: Dietas al Día – App progresiva para nutrición clínica
## Instrucción: leer los .md del workspace y generar la aplicación completa de una sola vez

---

## 🎯 INSTRUCCIÓN PRINCIPAL

Actúa como desarrollador frontend senior especializado en React 18 + TypeScript + Vite + styled-components + PWA, con foco en prototipos de alta fidelidad para entornos clínicos y persistencia local en localStorage.

Tarea:
1. Lee primero todos los archivos .md que estén en la raíz del workspace y úsalo como especificación vinculante.
2. Genera la aplicación completa en una sola pasada, creando directamente los archivos en el proyecto y dejando todo listo para ejecutarse.
3. No pidas confirmación intermedia ni dividas el trabajo en fases. Hazlo de una vez.
4. Si falta algún archivo .md relevante, resuélvelo con la opción más simple y deja un comentario breve donde haga falta.
5. Documenta o deja comentarios en partes del codigo complejo

---

## 📚 FUENTE DE VERDAD

La fuente de verdad para este trabajo es la documentación del proyecto y la épica EPC28. Debes dejar la app alineada con los requisitos funcionales, criterios de aceptación, trazabilidad y casos de prueba que están definidos en los .md del workspace.

No inventes requisitos que no estén en la especificación. Si algo está incompleto, implementa la solución más razonable y añade un comentario breve para dejar constancia.

---

## 🧩 RESUMEN DEL PRODUCTO

Crear una app progresiva llamada Dietas al Día - Asignación tratamiento nutricional.

Propósito:
- Prototipo de alta fidelidad, visual y funcionalmente muy cercano al producto final.
- Materializar los requisitos de la solución en una experiencia útil para médicos nutricionistas.

Usuarios objetivo:
- Médicos nutricionistas.

Funcionalidad principal:
- Gestión del catálogo de alimentos.
- Gestión de nutrientes.
- Gestión de vitaminas y minerales.
- Gestión de dietas prediseñadas.
- Gestión del catálogo de enfermedades nutricionales.
- Gestión de la historia clínica del paciente.
- Diagnóstico y recomendación de dietas compatibles con el paciente.

---

## ✅ REQUISITOS FUNCIONALES PRINCIPALES (MVP)

RF1 Gestionar el catálogo de alimentos (nombre, definición, origen, funcionalidad principal).
RF2 Gestionar nutrientes (nombre, definición, funcionalidad, tipo/subtipo, enfermedades por déficit, fuentes alimentarias).
RF3 Gestionar vitaminas y minerales (funciones asociadas, ración dietética recomendada).
RF4 Gestionar dietas prediseñadas (objetivos, definición técnica, aporte calórico, componentes, ingesta necesaria, vía de administración, duración, dosificación, pauta, suplementos), compuestas de alimentos.
RF5 Gestionar el catálogo de enfermedades nutricionales (causas, diagnosis, diagnósticos diferenciales, tratamiento y objetivo del tratamiento).
RF6 Gestionar la historia clínica del paciente (datos personales, peso, talla, incompatibilidades, alergias, antecedentes familiares, enfermedades asociadas).

---

## 🏥 ÉPICA EPC28: ASIGNACIÓN DE TRATAMIENTO NUTRICIONAL

Como médico del Departamento de Nutrición quiero consultar las dietas compatibles con el diagnóstico de un paciente, señalando explícitamente si alguna dieta contiene alimentos incompatibles con sus alergias registradas, para elegir con seguridad un tratamiento sin cruzar manualmente la historia clínica con el catálogo de dietas.

Criterios de aceptación:
- CA1: Dado un paciente con una enfermedad registrada, el sistema muestra las dietas asociadas en un único paso.
- CA2: Si una dieta recomendada incluye un alimento alérgeno/incompatible del paciente, el sistema lo señala de forma inequívoca antes de confirmar.
- CA3: El médico accede a la ficha técnica completa de la dieta sin perder el contexto del paciente.
- CA4: Un usuario nuevo elige una dieta segura en menos de 90 segundos sin pasar por alto ninguna alerta.

La implementación debe cumplir esta épica explícitamente y dejarla visible en la experiencia de usuario del flujo principal.

---

## 🛠️ STACK TÉCNICO

Frontend: React
Estilos: styled-components
Backend/datos: ninguno
Persistencia: localStorage
PWA: sí

Tecnologías recomendadas:
- React 18 + TypeScript
- Vite
- styled-components
- React Router
- Context API + useReducer
- localStorage para persistencia local
- Validación con Zod o una alternativa ligera si hace falta
- Testing con Vitest + React Testing Library

No se debe implementar backend real ni base de datos externa.

---

## 🎨 DISEÑO Y UX

Estilo visual: minimalista / claro
Paleta de colores: coherente con apps de salud, preferiblemente tonalidades azules suaves, blancos y gris claro
Referencia estética: una app clínica premium, moderna y fácil de leer
Responsive: sí

Dirección visual:
- Interfaz limpia, profesional y clara.
- Buena separación visual entre secciones de gestión, historial clínico y recomendaciones.
- Tarjetas con jerarquía clara para datos médicos.
- Botones de acción visibles y accesibles.
- Diseño pensado para médicos, no para usuarios generales.

---

## 🔄 COMPORTAMIENTO E INTERACCIÓN

Al iniciar la app:
- Registro de usuario.

Flujo principal del usuario:
- Registro de usuario.
- Gestión de información dietas.
- Consulta de historia clínica del paciente.
- Diagnóstico del paciente.
- Asignación de dieta.

Casos límite:
- Solo usuarios registrados con cuenta Google.
- Si una dieta contiene alergias o incompatibilidades del paciente, debe mostrarse una alerta clara antes de confirmar.
- Cuando el médico consulte una dieta recomendada, debe mantener el contexto del paciente sin perderse en la navegación.

---

## 🚫 RESTRICCIONES

- Nivel de complejidad: prototipo rápido.
- No implementar backend real ni APIs externas.
- No incluir datos reales de pacientes.
- Todo debe funcionar de forma local y offline-friendly.
- La app debe ser fácil de ejecutar en local.
- Se debe dejar el código funcional, limpio y con comentarios breves donde la lógica no sea obvia.

---

## 📦 ENTREGABLE

Genera el código completo y funcional de la aplicación, listo para ejecutar.

Debe incluir:
- Estructura de proyecto React + Vite funcional.
- Pantallas para autenticación, dashboard, catálogos y flujo de diagnóstico/dieta.
- Persistencia local con localStorage.
- Estado global para gestión de datos.
- Formularios para crear y editar alimentos, nutrientes, vitaminas/minerales, dietas, enfermedades y pacientes.
- Flujo de recomendación de dietas con validación de incompatibilidades y alergias.
- Soporte para PWA básico (instalación y funcionamiento offline).
- Diseño minimalista claro y responsive.
- Comentarios cortos en puntos clave del código.

---

## 🔎 CRITERIOS DE CALIDAD OBLIGATORIOS

- La app debe verse como una herramienta profesional de nutrición clínica.
- El flujo principal debe evidenciar la compatibilidad de dietas con diagnósticos y alergias.
- Las alertas de incompatibilidad deben ser inequívocas y visibles antes de confirmar.
- Debe ser intuitiva para un médico nutricionista que usa la app en minutos.
- Debe ser ejecutable sin configuración compleja.

---

## ✅ INSTRUCCIÓN FINAL PARA EL AGENTE

Genera todo el proyecto en una sola respuesta, respetando esta especificación y asegurándote de que la épica EPC28 de asignación de tratamiento nutricional quede implementada de forma clara y funcional. La solución debe poder ejecutarse localmente, debe ser visualmente cuidada y debe priorizar la seguridad clínica del proceso de recomendación de dietas.

No te limites solo a listas o maquetas; crea una app real, usable y coherentemente conectada entre catálogos, pacientes, diagnósticos y dieta recomendada.
- Accesibilidad WCAG 2.1 AA obligatoria.
- Responsive mobile-first.

---

## 📝 FORMATO DE SALIDA

- **Crea los archivos directamente en el workspace** (no los imprimas solo en el chat).
- Bloques de código por archivo, con ruta relativa indicada como comentario superior.
- Al final, un resumen con:
  - Lista de archivos creados.
  - Cómo ejecutar en local.
  - Cómo probar la PWA.
  - Flujo `mockData → storage → AppContext → UI`.

---

## 🚀 COMANDO FINAL

**Hazlo todo de una sola vez.** No me pidas confirmación entre bloques. No dividas en fases. Genera todos los archivos, créalos en el workspace y al final entrega el resumen.

**Orden de generación sugerido (para que no te pierdas):**
1. Configuración base: `package.json`, `vite.config.ts`, `tsconfig*.json`, `tailwind.config.js`, `postcss.config.js`, `.eslintrc.cjs`, `.prettierrc`, `.gitignore`, `index.html`.
2. PWA: `public/manifest.webmanifest`, iconos placeholder, meta tags iOS en `index.html`.
3. Tipos: `src/types/*.ts`.
4. Esquemas Zod: `src/features/*/schemas.ts`.
5. Datos mock: `src/services/mockData.ts`.
6. Persistencia: `src/services/storage.ts`.
7. Hooks: `src/hooks/*.ts`.
8. Contexto: `src/context/AppContext.tsx`.
9. Componentes comunes: `src/components/common/*.tsx`.
10. Layout: `src/components/layout/*.tsx`.
11. Features (5 catálogos): `src/features/*/**`.
12. App + Router + Main: `src/App.tsx`, `src/router.tsx`, `src/main.tsx`, `src/index.css`.
13. Tests: `tests/*.test.tsx`.
14. `README.md`.

**Empieza ahora. Genera todo.**
