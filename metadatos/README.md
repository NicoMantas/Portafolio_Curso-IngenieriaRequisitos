# Metadatos del proyecto

Este documento consolida el contexto de metadatos del prototipo funcional de Dietas al Día. Cada artefacto del repositorio mantiene la información mínima requerida para garantizar trazabilidad, auditoría y control de versiones.

## Esquema obligatorio de metadatos

Cada artefacto debe incluir como mínimo:

- ID único.
- Versión.
- Estado final.
- Autor o revisor.
- Fecha de cierre.
- Artefactos relacionados.

## Catálogo maestro de artefactos

### 1. README principal del repositorio

```yaml
id: "PROTO-ROOT-README-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de desarrollo"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "Prototipo_Funcional_Dietas/README.md"
  - "Prototipo_Funcional_Dietas/EPC28_analisis.md"
  - "Prototipo_Funcional_Dietas/EPC28_requisitos_funcionales.md"
  - "Prototipo_Funcional_Dietas/EPC28_requisitos_no_funcionales.md"
  - "Prototipo_Funcional_Dietas/EPC28_criterios_aceptacion.md"
  - "Prototipo_Funcional_Dietas/EPC28_matriz_trazabilidad.md"
  - "Prototipo_Funcional_Dietas/EPC28_test_cases.md"
  - "Prototipo_Funcional_Dietas/EPC28_prompt_code.md"
```

### 2. README del prototipo funcional

```yaml
id: "PROTO-APP-README-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de desarrollo"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "README.md"
  - "EPC28_analisis.md"
  - "EPC28_requisitos_funcionales.md"
  - "EPC28_requisitos_no_funcionales.md"
  - "EPC28_criterios_aceptacion.md"
  - "EPC28_matriz_trazabilidad.md"
  - "EPC28_test_cases.md"
  - "EPC28_prompt_code.md"
```

### 3. Análisis de requisitos

```yaml
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
```

### 4. Criterios de aceptación

```yaml
id: "EPC28-CRITERIOS-ACEPTACION-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de validación"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "EPC28_analisis.md"
  - "EPC28_requisitos_funcionales.md"
  - "EPC28_matriz_trazabilidad.md"
  - "EPC28_test_cases.md"
  - "README.md"
```

### 5. Matriz de trazabilidad

```yaml
id: "EPC28-MATRIZ-TRAZABILIDAD-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de trazabilidad"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "EPC28_analisis.md"
  - "EPC28_requisitos_funcionales.md"
  - "EPC28_criterios_aceptacion.md"
  - "EPC28_test_cases.md"
  - "README.md"
```

### 6. Prompt base para generación de código

```yaml
id: "EPC28-PROMPT-CODE-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo técnico"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "README.md"
  - "EPC28_analisis.md"
  - "EPC28_requisitos_funcionales.md"
  - "EPC28_requisitos_no_funcionales.md"
  - "EPC28_criterios_aceptacion.md"
  - "EPC28_test_cases.md"
```

### 7. Requisitos funcionales

```yaml
id: "EPC28-REQ-FUNC-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de requisitos"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "EPC28_analisis.md"
  - "EPC28_criterios_aceptacion.md"
  - "EPC28_matriz_trazabilidad.md"
  - "EPC28_test_cases.md"
  - "README.md"
```

### 8. Requisitos no funcionales

```yaml
id: "EPC28-REQ-NOFUNC-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de requisitos"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "EPC28_analisis.md"
  - "EPC28_requisitos_funcionales.md"
  - "EPC28_criterios_aceptacion.md"
  - "EPC28_test_cases.md"
  - "README.md"
```

### 9. Casos de prueba

```yaml
id: "EPC28-TEST-CASES-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de QA"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "EPC28_analisis.md"
  - "EPC28_requisitos_funcionales.md"
  - "EPC28_requisitos_no_funcionales.md"
  - "EPC28_criterios_aceptacion.md"
  - "EPC28_matriz_trazabilidad.md"
  - "README.md"
```

### 10. Documento maestro de metadatos

```yaml
id: "META-PROYECTO-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de documentación"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "README.md"
  - "Prototipo_Funcional_Dietas/README.md"
  - "Prototipo_Funcional_Dietas/EPC28_analisis.md"
  - "Prototipo_Funcional_Dietas/EPC28_requisitos_funcionales.md"
  - "Prototipo_Funcional_Dietas/EPC28_requisitos_no_funcionales.md"
  - "Prototipo_Funcional_Dietas/EPC28_criterios_aceptacion.md"
  - "Prototipo_Funcional_Dietas/EPC28_matriz_trazabilidad.md"
  - "Prototipo_Funcional_Dietas/EPC28_test_cases.md"
  - "Prototipo_Funcional_Dietas/EPC28_prompt_code.md"
```

### 11. Matriz de trazabilidad

```yaml
id: "EPC28-MATRIZ-TRAZABILIDAD-001"
version: "1.0"
estado_final: "Cerrado"
autor_revisor: "Equipo de trazabilidad"
fecha_cierre: "2026-09-23"
artefactos_relacionados:
  - "README.md"
  - "Prototipo_Funcional_Dietas/README.md"
  - "Prototipo_Funcional_Dietas/EPC28_analisis.md"
  - "Prototipo_Funcional_Dietas/EPC28_requisitos_funcionales.md"
  - "Prototipo_Funcional_Dietas/EPC28_requisitos_no_funcionales.md"
  - "Prototipo_Funcional_Dietas/EPC28_criterios_aceptacion.md"
  - "Prototipo_Funcional_Dietas/EPC28_test_cases.md"
  - "Prototipo_Funcional_Dietas/EPC28_prompt_code.md"
```

## Recomendación

Esta referencia central permite mantener una trazabilidad completa del proyecto y asegurar que cada artefacto esté documentado con la misma estructura de metadatos. La información aquí consolidada debe mantenerse alineada con la cabecera incluida en cada archivo Markdown del repositorio.
