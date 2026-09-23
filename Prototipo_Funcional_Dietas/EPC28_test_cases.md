---
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
    - "README.md"
---

# EPC28 — Test Cases

## Test Case ID: TC_EPC28_01
| Campo | Valor |
|---|---|
| Test Case ID | TC_EPC28_01 |
| Description | Verifica la búsqueda de un alimento por nombre y la visualización completa de sus atributos del catálogo. |
| Applicable for | PWA (Chrome/Edge desktop, Android, iOS) |
| Requirements | RF-EPC28-01, CA-EPC28-01 |
| Initial Conditions | Usuario autenticado con rol Médico nutricionista; catálogo de alimentos cargado con al menos 1 registro ("Manzana"). |
| Estado de cumplimiento | Cumple en la app actual |

| Step | Full / Regr | Task & Expected Result | Result |
|---|---|---|---|
| 1 | | Acceder al módulo "Catálogo de Alimentos". | Pass / Fail |
| 2 | | Ingresar "Manzana" en el buscador y ejecutar búsqueda. | Pass / Fail |
| 3 | | Verificar que el resultado muestra: nombre, definición, origen, funcionalidad metabólica, macronutrientes por 100 g, índice glucémico y alérgenos. | Pass / Fail |
| 4 | R | Buscar un alimento inexistente ("XYZ") y verificar mensaje "Sin resultados". | Pass / Fail |
| 5 | R | Limpiar filtro y verificar que se listan todos los alimentos. | Pass / Fail |

## Test Case ID: TC_EPC28_02
| Campo | Valor |
|---|---|
| Test Case ID | TC_EPC28_02 |
| Description | Verifica la búsqueda de una enfermedad nutricional y la visualización de sus atributos clínicos. |
| Applicable for | PWA (Chrome/Edge desktop, Android, iOS) |
| Requirements | RF-EPC28-02, CA-EPC28-02 |
| Initial Conditions | Usuario autenticado; catálogo de enfermedades nutricionales con al menos 1 registro. |
| Estado de cumplimiento | Cumple en la app actual |

| Step | Full / Regr | Task & Expected Result | Result |
|---|---|---|---|
| 1 | | Acceder al módulo "Catálogo de Enfermedades Nutricionales". | Pass / Fail |
| 2 | | Buscar "Desnutrición proteico-calórica". | Pass / Fail |
| 3 | | Verificar que se muestra: fisiopatología, criterios diagnósticos, diagnósticos diferenciales, dianas terapéuticas, alimentos contraindicados y micronutrientes indicados. | Pass / Fail |
| 4 | R | Verificar que los alimentos contraindicados enlazan al catálogo de alimentos. | Pass / Fail |

## Test Case ID: TC_EPC28_03
| Campo | Valor |
|---|---|
| Test Case ID | TC_EPC28_03 |
| Description | Verifica la consulta de nutrientes y de vitaminas/minerales con todos sus atributos. |
| Applicable for | PWA (Chrome/Edge desktop, Android, iOS) |
| Requirements | RF-EPC28-03, RF-EPC28-04, CA-EPC28-03, CA-EPC28-04 |
| Initial Conditions | Usuario autenticado; catálogos de nutrientes y de vitaminas/minerales cargados. |
| Estado de cumplimiento | Cumple en la app actual |

| Step | Full / Regr | Task & Expected Result | Result |
|---|---|---|---|
| 1 | | Acceder al módulo "Nutrientes". | Pass / Fail |
| 2 | | Consultar un nutriente (ej. "Proteína"). Verificar tipología, subtipo, definición fisiológica, funcionalidad, enfermedades por déficit y fuentes alimentarias clave. | Pass / Fail |
| 3 | | Acceder al módulo "Vitaminas y Minerales". | Pass / Fail |
| 4 | | Consultar "Vitamina D". Verificar clasificación (liposoluble), funciones fisiológicas, RDA, síntomas de deficiencia y límite superior seguro. | Pass / Fail |
| 5 | R | Consultar "Hierro". Verificar clasificación "mineral" y RDA correspondiente. | Pass / Fail |

## Test Case ID: TC_EPC28_04
| Campo | Valor |
|---|---|
| Test Case ID | TC_EPC28_04 |
| Description | Verifica la creación de una dieta prediseñada con todos los campos obligatorios. |
| Applicable for | PWA (Chrome/Edge desktop, Android, iOS) |
| Requirements | RF-EPC28-05, CA-EPC28-05 |
| Initial Conditions | Usuario autenticado con rol Médico nutricionista; catálogos de alimentos y nutrientes disponibles. |
| Estado de cumplimiento | Cumple en la app actual |

| Step | Full / Regr | Task & Expected Result | Result |
|---|---|---|---|
| 1 | | Acceder a "Dietas prediseñadas" → "Nueva dieta". | Pass / Fail |
| 2 | | Completar: objetivos terapéuticos, aporte calórico, distribución de macronutrientes, alimentos componentes y desaconsejados, vía de administración, duración, pauta posológica y suplementación sinérgica. | Pass / Fail |
| 3 | | Guardar la dieta y verificar mensaje de éxito. | Pass / Fail |
| 4 | R | Intentar guardar sin "aporte calórico" y verificar validación de campo obligatorio. | Pass / Fail |
| 5 | R | Verificar que la dieta aparece en el listado y puede consultarse. | Pass / Fail |

## Test Case ID: TC_EPC28_05
| Campo | Valor |
|---|---|
| Test Case ID | TC_EPC28_05 |
| Description | Verifica el CRUD completo y la trazabilidad sobre los catálogos. |
| Applicable for | PWA (Chrome/Edge desktop, Android, iOS) |
| Requirements | RF-EPC28-06, RNF-EPC28-02, RNF-EPC28-03 |
| Initial Conditions | Usuario autenticado con rol Médico nutricionista; al menos un catálogo con registros. |
| Estado de cumplimiento | Cumple en la app actual |

| Step | Full / Regr | Task & Expected Result | Result |
|---|---|---|---|
| 1 | | Crear un registro nuevo en el catálogo de alimentos. | Pass / Fail |
| 2 | | Consultar el registro creado. | Pass / Fail |
| 3 | | Editar un campo (ej. índice glucémico) y guardar. | Pass / Fail |
| 4 | | Verificar en auditoría: usuario, fecha/hora y valores previo/nuevo. | Pass / Fail |
| 5 | R | Listar todos los registros y verificar paginación/orden. | Pass / Fail |
| 6 | R | Autenticarse con rol sin permisos e intentar editar; verificar denegación. | Pass / Fail |

## Test Case ID: TC_EPC28_06
| Campo | Valor |
|---|---|
| Test Case ID | TC_EPC28_06 |
| Description | Verifica la instalación como PWA y el funcionamiento offline de consulta de catálogos. |
| Applicable for | PWA (Chrome/Edge desktop, Android, iOS) |
| Requirements | RF-EPC28-07, CA-EPC28-07, RNF-EPC28-08, RNF-EPC28-09, RNF-EPC28-11 |
| Initial Conditions | Usuario autenticado; PWA desplegada en HTTPS; catálogos sincronizados al menos una vez. |

| Step | Full / Regr | Task & Expected Result | Result |
|---|---|---|---|
| 1 | | Abrir la app en Chrome/Edge y verificar icono de instalación en barra de direcciones. | Pass / Fail |
| 2 | | Instalar la PWA y verificar apertura en modo standalone. | Pass / Fail |
| 3 | | Desconectar red (DevTools → Offline) y recargar la app. | Pass / Fail |
| 4 | | Verificar acceso al catálogo de alimentos previamente sincronizado. | Pass / Fail |
| 5 | | Verificar indicador visual de "modo offline". | Pass / Fail |
| 6 | R | Restaurar conexión y verificar sincronización automática de cambios pendientes. | Pass / Fail |
| 7 | R | Ejecutar auditoría Lighthouse y verificar puntuación PWA ≥ 90. | Pass / Fail |