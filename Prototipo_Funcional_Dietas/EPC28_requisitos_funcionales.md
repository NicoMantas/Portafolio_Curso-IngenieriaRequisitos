---
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
    - "README.md"
---

# EPC28 — Requisitos Funcionales

## 3.2.1 Requisito funcional 1
| Campo | Valor |
|---|---|
| Número de requisito | RF-EPC28-01 |
| Nombre de requisito | Búsqueda en catálogo de alimentos |
| Tipo | [X] Requisito  [] Restricción |
| Fuente del requisito | Épica EPC28 – Feature F-EPC28-01 – CA-EPC28-01 |
| Prioridad del requisito | [X] Alta/Esencial  [] Media/Deseado  [] Baja/Opcional |
| Descripción | El sistema debe permitir al médico nutricionista buscar alimentos por nombre y visualizar: definición, origen (Animal, Vegetal, Fermentado, etc.), funcionalidad metabólica, macronutrientes por 100 g, índice glucémico y alérgenos de declaración obligatoria. |

## 3.2.2 Requisito funcional 2
| Campo | Valor |
|---|---|
| Número de requisito | RF-EPC28-02 |
| Nombre de requisito | Búsqueda en catálogo de enfermedades nutricionales |
| Tipo | [X] Requisito  [] Restricción |
| Fuente del requisito | Épica EPC28 – Feature F-EPC28-02 – CA-EPC28-02 |
| Prioridad del requisito | [X] Alta/Esencial  [] Media/Deseado  [] Baja/Opcional |
| Descripción | El sistema debe permitir buscar enfermedades nutricionales y mostrar: fisiopatología, criterios diagnósticos, diagnósticos diferenciales, dianas terapéuticas, alimentos contraindicados y micronutrientes indicados. |

## 3.2.3 Requisito funcional 3
| Campo | Valor |
|---|---|
| Número de requisito | RF-EPC28-03 |
| Nombre de requisito | Consulta de nutrientes |
| Tipo | [X] Requisito  [] Restricción |
| Fuente del requisito | Épica EPC28 – Feature F-EPC28-03 – CA-EPC28-03 |
| Prioridad del requisito | [X] Alta/Esencial  [] Media/Deseado  [] Baja/Opcional |
| Descripción | El sistema debe permitir consultar nutrientes mostrando: tipología y subtipo, definición fisiológica, funcionalidad, enfermedades por déficit y fuentes alimentarias clave. |

## 3.2.4 Requisito funcional 4
| Campo | Valor |
|---|---|
| Número de requisito | RF-EPC28-04 |
| Nombre de requisito | Consulta de vitaminas y minerales |
| Tipo | [X] Requisito  [] Restricción |
| Fuente del requisito | Épica EPC28 – Feature F-EPC28-03 – CA-EPC28-04 |
| Prioridad del requisito | [X] Alta/Esencial  [] Media/Deseado  [] Baja/Opcional |
| Descripción | El sistema debe permitir consultar vitaminas y minerales mostrando: clasificación (liposoluble/hidrosoluble/mineral), funciones fisiológicas, RDA, síntomas de deficiencia y límites superiores seguros. |

## 3.2.5 Requisito funcional 5
| Campo | Valor |
|---|---|
| Número de requisito | RF-EPC28-05 |
| Nombre de requisito | Creación de dietas prediseñadas |
| Tipo | [X] Requisito  [] Restricción |
| Fuente del requisito | Épica EPC28 – Feature F-EPC28-04 – CA-EPC28-05 |
| Prioridad del requisito | [X] Alta/Esencial  [] Media/Deseado  [] Baja/Opcional |
| Descripción | El sistema debe permitir crear dietas prediseñadas con: objetivos terapéuticos, aporte calórico, distribución de macronutrientes, alimentos componentes y desaconsejados, vía de administración, duración, pauta posológica y suplementación sinérgica. |

## 3.2.6 Requisito funcional 6
| Campo | Valor |
|---|---|
| Número de requisito | RF-EPC28-06 |
| Nombre de requisito | Gestión CRUD de catálogos |
| Tipo | [X] Requisito  [] Restricción |
| Fuente del requisito | Épica EPC28 – CA-EPC28-06 |
| Prioridad del requisito | [X] Alta/Esencial  [] Media/Deseado  [] Baja/Opcional |
| Descripción | El sistema debe permitir crear, consultar, actualizar y listar los registros de los catálogos de alimentos, enfermedades nutricionales, nutrientes, vitaminas/minerales y dietas prediseñadas. |

## 3.2.7 Requisito funcional 7
| Campo | Valor |
|---|---|
| Número de requisito | RF-EPC28-07 |
| Nombre de requisito | Funcionamiento offline de consulta de catálogos |
| Tipo | [X] Requisito  [] Restricción |
| Fuente del requisito | Épica EPC28 – CA-EPC28-07 |
| Prioridad del requisito | [X] Alta/Esencial  [] Media/Deseado  [] Baja/Opcional |
| Descripción | La PWA debe permitir consultar catálogos previamente sincronizados sin conexión a internet, mostrando un indicador de estado offline y sincronizando cambios al recuperar conexión. |