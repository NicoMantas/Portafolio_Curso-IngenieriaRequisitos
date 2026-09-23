# Metadatos del proyecto

Este documento centraliza los metadatos de los artefactos que conforman la rama del prototipo funcional del proyecto. Su finalidad es mantener trazabilidad, control de versiones y relación entre la documentación, los requisitos, la validación y la implementación.


## Catálogo de artefactos de la rama

### 1. README principal de la rama

```yaml
metadatos:
  id: "ROOT-README-001"
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

### 2. README del prototipo funcional

```yaml
metadatos:
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

### 3. Análisis del proyecto

```yaml
metadatos:
  id: "EPC28-ANALISIS-001"
  version: "1.0"
  estado_final: "Cerrado"
  autor_revisor: "Equipo de análisis"
  fecha_cierre: "2026-09-23"
  artefactos_relacionados:
    - "README.md"
    - "Prototipo_Funcional_Dietas/README.md"
    - "EPC28_requisitos_funcionales.md"
    - "EPC28_requisitos_no_funcionales.md"
    - "EPC28_criterios_aceptacion.md"
    - "EPC28_matriz_trazabilidad.md"
    - "EPC28_test_cases.md"
```

### 4. Criterios de aceptación

```yaml
metadatos:
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
    - "Prototipo_Funcional_Dietas/README.md"
```

### 5. Matriz de trazabilidad

```yaml
metadatos:
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
    - "Prototipo_Funcional_Dietas/README.md"
```

### 6. Prompt base / referencia técnica

```yaml
metadatos:
  id: "EPC28-PROMPT-CODE-001"
  version: "1.0"
  estado_final: "Cerrado"
  autor_revisor: "Equipo técnico"
  fecha_cierre: "2026-09-23"
  artefactos_relacionados:
    - "README.md"
    - "Prototipo_Funcional_Dietas/README.md"
    - "EPC28_analisis.md"
    - "EPC28_requisitos_funcionales.md"
    - "EPC28_requisitos_no_funcionales.md"
    - "EPC28_criterios_aceptacion.md"
    - "EPC28_test_cases.md"
```

### 7. Requisitos funcionales

```yaml
metadatos:
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
    - "Prototipo_Funcional_Dietas/README.md"
```

### 8. Requisitos no funcionales

```yaml
metadatos:
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
    - "Prototipo_Funcional_Dietas/README.md"
```

### 9. Casos de prueba

```yaml
metadatos:
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
    - "Prototipo_Funcional_Dietas/README.md"
```

### 10. Documento maestro de metadatos

```yaml
metadatos:
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

## Recomendación

Se recomienda mantener este bloque de metadatos en cada artefacto de la rama para garantizar trazabilidad, auditoría, claridad documental y control de versiones del proyecto.
