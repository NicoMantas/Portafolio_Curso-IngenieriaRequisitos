# Metadatos del proyecto

Este documento centraliza los metadatos de los artefactos que conforman la rama actual del proyecto. Su objetivo es mantener trazabilidad, consistencia documental y control de versiones entre la documentación de negocio, requisitos y cambios.

## Estructura mínima requerida

Cada artefacto deberá incluir, como mínimo, los siguientes metadatos:

- ID único.
- Versión.
- Estado final.
- Autor o revisor.
- Fecha de cierre.
- Artefactos relacionados.

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
    - "Vision_Board_Agencia/Vision_Board_AgenciaAerea.pdf"
    - "Vision_Board_Agencia/Vision_Board_AgenciaAerea.docx"
    - "product_backlog_agencia/Product_Backlog_AgenciaAerea.pdf"
    - "product_backlog_agencia/Product_Backlog_AgenciaAerea.docx"
    - "request_for_change/Request_Change_AeroAlign.pdf"
    - "request_for_change/escenario_cambios/Escenario_Cambio_AeroAlign.pdf"
```

### 2. Vision Board de la agencia

```yaml
metadatos:
  id: "VISION-BOARD-AGENCIA-001"
  version: "1.0"
  estado_final: "Cerrado"
  autor_revisor: "Equipo de negocio"
  fecha_cierre: "2026-09-23"
  artefactos_relacionados:
    - "README.md"
    - "product_backlog_agencia/Product_Backlog_AgenciaAerea.pdf"
    - "product_backlog_agencia/Product_Backlog_AgenciaAerea.docx"
    - "request_for_change/Request_Change_AeroAlign.pdf"
```

### 3. Product Backlog de la agencia

```yaml
metadatos:
  id: "PRODUCT-BACKLOG-AGENCIA-001"
  version: "1.0"
  estado_final: "Cerrado"
  autor_revisor: "Equipo de producto"
  fecha_cierre: "2026-09-23"
  artefactos_relacionados:
    - "README.md"
    - "Vision_Board_Agencia/Vision_Board_AgenciaAerea.pdf"
    - "Vision_Board_Agencia/Vision_Board_AgenciaAerea.docx"
    - "request_for_change/Request_Change_AeroAlign.pdf"
```

### 4. Request for Change

```yaml
metadatos:
  id: "RFC-AGENCIA-001"
  version: "1.0"
  estado_final: "Cerrado"
  autor_revisor: "Equipo de cambio y requisitos"
  fecha_cierre: "2026-09-23"
  artefactos_relacionados:
    - "README.md"
    - "Vision_Board_Agencia/Vision_Board_AgenciaAerea.pdf"
    - "product_backlog_agencia/Product_Backlog_AgenciaAerea.pdf"
    - "request_for_change/escenario_cambios/Escenario_Cambio_AeroAlign.pdf"
```

### 5. Escenario de cambio

```yaml
metadatos:
  id: "ESCENARIO-CAMBIO-AGENCIA-001"
  version: "1.0"
  estado_final: "Cerrado"
  autor_revisor: "Equipo de análisis de cambio"
  fecha_cierre: "2026-09-23"
  artefactos_relacionados:
    - "request_for_change/Request_Change_AeroAlign.pdf"
    - "README.md"
    - "Vision_Board_Agencia/Vision_Board_AgenciaAerea.pdf"
    - "product_backlog_agencia/Product_Backlog_AgenciaAerea.pdf"
```

## Recomendación

Se recomienda mantener este bloque de metadatos en cada artefacto de la rama para garantizar trazabilidad, auditoría, claridad documental y control de versiones del proyecto.
