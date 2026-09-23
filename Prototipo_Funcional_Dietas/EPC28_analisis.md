---
metadatos:
  id: "EPC28-ANALISIS-001"
  version: "1.0"
  estado_final: "Cerrado"
  autor_revisor: "Equipo de análisis"
  fecha_cierre: "2026-09-23"
  artefactos_relacionados:
    - "README.md"
    - "EPC28_requisitos_funcionales.md"
    - "EPC28_requisitos_no_funcionales.md"
    - "EPC28_criterios_aceptacion.md"
    - "EPC28_matriz_trazabilidad.md"
    - "EPC28_test_cases.md"
---

# EPC28 — Gestión de Catálogos
## Análisis de Requisitos

### 1. Identificación de la Épica
| Campo | Valor |
|---|---|
| ID Épica | EPC28 |
| Nombre | Gestión de Catálogos |
| Rol | Médico nutricionista |
| Descripción | Como médico nutricionista quiero catálogos gestionables para gestión de alimentos, nutrientes, vitaminas y minerales, dietas prediseñadas y enfermedades nutricionales. |
| Valor de negocio | Centralizar y consultar información clínico-nutricional confiable para soportar la toma de decisiones terapéuticas. |

### 2. Features de la Épica
| ID Feature | Nombre | Descripción |
|---|---|---|
| F-EPC28-01 | Catálogo de Alimentos | Nombre, definición, origen (Animal, Vegetal, Fermentado, etc.), funcionalidad metabólica, macronutrientes por 100 g, índice glucémico y alérgenos de declaración obligatoria. |
| F-EPC28-02 | Catálogo de Enfermedades Nutricionales | Fisiopatología, criterios diagnósticos, diagnósticos diferenciales, dianas terapéuticas, alimentos contraindicados y micronutrientes indicados. |
| F-EPC28-03 | Catálogo de Nutrientes, Vitaminas y Minerales | Nutrientes: tipología y subtipo, definición fisiológica, funcionalidad, enfermedades por déficit y fuentes alimentarias clave. Vitaminas y Minerales: clasificación (liposoluble/hidrosoluble/mineral), funciones fisiológicas, RDA, síntomas de deficiencia y límites superiores seguros. |
| F-EPC28-04 | Catálogo de Dietas Prediseñadas | Objetivos terapéuticos, aporte calórico, distribución de macronutrientes, alimentos componentes y desaconsejados, vía de administración, duración, pauta posológica y suplementación sinérgica. |

### 3. Contexto de otras épicas (solo referencia)
- **Gestión integral de historias clínicas:** provee perfil clínico del paciente (alergias, antecedentes, antropometría, analítica).
- **Asignación de tratamiento nutricional:** consume los catálogos EPC28 para el motor de cruce perfil clínico vs. dietas (idoneidad clínica, contraindicaciones críticas).

### 4. Dependencias de EPC28
- EPC28 es **proveedora** de datos maestros para la épica de Asignación de tratamiento nutricional.
- EPC28 se **alimenta** del perfil clínico del paciente gestionado por la épica de Historias clínicas (para validaciones de alérgenos y contraindicaciones).

### 5. Consideraciones PWA
- La aplicación debe funcionar como **PWA instalable** en escritorio y móvil.
- Debe soportar **modo offline parcial** para consulta de catálogos previamente sincronizados.
- Debe contar con **Service Worker** para caché de assets y datos maestros.
- Debe incluir **manifest.json** con iconos, theme_color y display standalone.
- Debe permitir **sincronización en background** cuando se recupere conexión.