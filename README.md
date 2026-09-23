# Agencia Aérea

## ¿Qué es esta rama?

Esta rama contiene la documentación y los artefactos del caso de negocio de una compañía aérea que necesita un sistema para gestionar la asignación de tripulaciones a vuelos. El enfoque principal está en la definición del problema, la visión del producto, los requisitos y los cambios esperados del sistema.

## Contexto del negocio

Una compañía aérea desea implantar un sistema informático para el control de la asignación de tripulaciones a los diferentes vuelos que opera. Cada tripulación está compuesta por un piloto y un copiloto. La asignación debe buscar la tripulación más adecuada según las aptitudes profesionales del piloto y las condiciones del vuelo.

El sistema debe permitir:

- Consultar los vuelos asignados a cada tripulación.
- Revisar las características de los vuelos, como fecha, origen, destino, meteorología y visibilidad.
- Registrar datos de tripulantes, tripulaciones y vuelos.
- Evaluar el desempeño de los pilotos mediante escenarios de simulación.
- Asignar tripulaciones a los vuelos según la similitud entre el escenario del vuelo y los escenarios estándar del simulador.

## Objetivo de la rama

Esta rama sirve como base documental para:

- comprender el problema de negocio,
- definir la visión del producto,
- construir el backlog del proyecto,
- documentar los cambios requeridos,
- orientar la etapa de análisis y requisitos.

## Estructura de la rama

```text
Agencia_Aerea/
├── README.md
├── Vision_Board_Agencia/
│   ├── Vision_Board_AgenciaAerea.pdf
│   └── Vision_Board_AgenciaAerea.docx
├── product_backlog_agencia/
│   ├── Product_Backlog_AgenciaAerea.pdf
│   └── Product_Backlog_AgenciaAerea.docx
└── request_for_change/
    ├── Request_Change_AeroAlign.pdf
    └── escenario_cambios/
        └── Escenario_Cambio_AeroAlign.pdf
```

## Navegación guiada por carpetas

### 1. Vision_Board_Agencia

Carpeta destinada a la visión del producto y al contexto del negocio.

Aquí encontrarás:

- la propuesta de valor del sistema,
- los objetivos del proyecto,
- el alcance general de la solución,
- la visión compartida del producto para los stakeholders.

Se recomienda revisar este documento primero para entender el problema de negocio y el propósito del sistema.

### 2. product_backlog_agencia

Carpeta del backlog del proyecto.

Aquí se documentan:

- historias de usuario,
- requisitos funcionales,
- requisitos no funcionales,
- priorización con MoSCoW,
- criterios de aceptación,
- funcionalidad clave del sistema y su orden de desarrollo.

Esta carpeta representa la base para la planificación y la priorización del producto.

### 3. request_for_change

Carpeta dedicada a la gestión de cambios del sistema.

Incluye:

- solicitudes de cambio,
- escenarios de evolución del sistema,
- análisis de impacto y adaptación a nuevas necesidades del cliente.

Es útil cuando se requiere ajustar el producto a nuevas condiciones de negocio, nuevos requisitos o escenarios operativos no contemplados inicialmente.

## Contexto funcional clave

El sistema debe gestionar la información de:

- tripulantes,
- tripulaciones,
- escenarios de simulación,
- vuelos,
- parámetros meteorológicos, de visibilidad y de relieve,
- asignaciones de vuelo.

Además, debe permitir:

- que cada piloto consulte sus resultados en escenarios estándar,
- que los operadores de vuelo comparen condiciones reales con escenarios simulados,
- que se asigne la tripulación más adecuada al vuelo según la puntuación del piloto.

## Stakeholders relevantes

Los principales interesados del proyecto son:

- la compañía aérea,
- el personal administrativo,
- los pilotos,
- los operadores de vuelos,
- la dirección del proyecto,
- el equipo de analistas y desarrolladores.

## Necesidades identificadas

A partir del caso, se identifican necesidades como:

- registrar y consultar información de vuelos y tripulaciones,
- evaluar pilotos en escenarios de simulación,
- comparar condiciones reales con escenarios estándar,
- automatizar la recomendación de tripulaciones,
- mantener trazabilidad de cambios y ajustes del sistema.

## Enfoque de Ingeniería de Requisitos

Esta rama está orientada a los procesos de:

- análisis del negocio,
- identificación de stakeholders,
- levantamiento de requisitos,
- documentación de necesidades,
- priorización de historias de usuario,
- validación mediante criterios de aceptación.

## Recomendación de lectura

Para una navegación intuitiva del repositorio, sigue este orden:

1. Leer este README.
2. Revisar la carpeta Vision_Board_Agencia.
3. Consultar la carpeta product_backlog_agencia.
4. Revisar la carpeta request_for_change.

Este orden permite empezar por la visión general del negocio, continuar con la definición del producto y terminar con la gestión de cambios.

## Resultado esperado

Al finalizar la revisión de esta rama, el usuario debe comprender:

- el problema del cliente,
- el propósito del sistema,
- la estructura del producto,
- su alcance funcional,
- cómo se gestionan requisitos y cambios dentro del proyecto.

---

> Esta rama funciona como una guía de contexto para el análisis del caso de Agencia Aérea y para la construcción del producto desde una perspectiva de ingeniería de requisitos.
