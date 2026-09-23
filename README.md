# Portafolio de Ingeniería de Requisitos

## ID único

- Versión: 1.0
- Estado final
- Autor o revisor: Equipo de trabajo / Revisión final
- Fecha de cierre: 2026-09-23
- Artefactos relacionados:
  - Agencia_Aerea
  - Simulador_Juego
  - Prototipo_DietasPWA
  - README general del repositorio
  - Documentos de requisitos, backlog, modelos UML y prototipo funcional

Este repositorio reúne el trabajo desarrollado en tres líneas principales del proyecto, cada una con un enfoque específico dentro del proceso de ingeniería de requisitos, análisis, documentación y prototipado de soluciones digitales.

La intención del repositorio es servir como un portafolio de referencia para comprender el contexto, la estructura y el contenido de cada rama del proyecto, así como la evolución del trabajo desde la idea inicial hasta la validación temprana del prototipo.

## Objetivo general

El repositorio presenta tres áreas de trabajo conectadas entre sí:

1. Agencia Aérea
2. Simulador de Videojuego
3. Prototipo funcional PWA de Dietas

Cada rama contiene artefactos clave para la comprensión del problema, la propuesta de solución y la validación del producto.

## Contexto del repositorio

El portafolio está organizado para permitir una navegación intuitiva por el contenido del proyecto:

- la rama Agencia Aérea agrupa la visión del producto, el backlog y la gestión de cambios,
- la rama Simulador_Juego incluye el modelado UML, los requisitos y la validación del simulador,
- la rama PWA_Dietas concentra el prototipo funcional de una aplicación web orientada a la nutrición clínica.

## Estructura general

```text
Portafolio/
├── README.md
├── Agencia_Aerea/
│   ├── README.md
│   ├── Vision_Board_Agencia/
│   ├── product_backlog_agencia/
│   └── request_for_change/
├── Simulador_Juego/
│   ├── README.md
│   ├── Modelos_UML/
│   ├── Modelos_Comportamiento/
│   ├── DocumentoSRS_Simulador_Videojuego.pdf
│   └── TestCases_Simulador_Videojuego.pdf
├── Prototipo_Funcional_Dietas/
│   ├── README.md
│   ├── src/
│   ├── public/
│   ├── EPC28_analisis.md
│   ├── EPC28_criterios_aceptacion.md
│   ├── EPC28_matriz_trazabilidad.md
│   ├── EPC28_prompt_code.md
│   ├── EPC28_requisitos_funcionales.md
│   ├── EPC28_requisitos_no_funcionales.md
│   └── EPC28_test_cases.md
├── Diagramas y artefactos complementarios
└── Documentos generales del proyecto
```

## Rama 1: Agencia_Aerea

Esta rama está enfocada en la compañía aérea y en la gestión de asignación de tripulaciones a vuelos. La documentación incluye la visión del producto, el backlog del proyecto, los escenarios de cambio y el análisis del negocio.

El propósito de esta rama es comprender la realidad del cliente, definir la solución propuesta y dejar documentado el contexto del problema antes de avanzar en el desarrollo.

## Rama 2: Simulador_Juego

Esta rama reúne el modelado del simulador, los diagramas UML, la documentación de requisitos y la validación del sistema. Aquí se documenta el problema del simulador de transmisión mecánica, así como la especificación del comportamiento esperado del sistema y su prueba.

Los modelos de clases, los requisitos y el comportamiento están respaldados por el documento SRS del videojuego y por los casos de prueba del proyecto.

## Rama 3: Prototipo_DietasPWA

Esta rama contiene el prototipo funcional de una aplicación web progresiva para la gestión nutricional y clínica. La solución está enfocada en la planificación de dietas, la gestión de pacientes, la recomendación de dietas compatibles con diagnósticos y la organización de información sanitaria.

El prototipo sirve como evidencia de validación temprana, mostrando una solución usable y funcional antes de una implementación más avanzada.

## Proceso general del proyecto

El proyecto se desarrolla siguiendo una lógica de ingeniería de requisitos en la que se parte del problema real, se identifican necesidades del cliente, se documentan requisitos y se valida el producto mediante prototipado y pruebas.

En este repositorio se contemplan actividades como:

- análisis del problema,
- identificación de stakeholders,
- elaboración de requisitos,
- modelado UML,
- prototipado funcional,
- evaluación de calidad,
- validación temprana y mejora continua.

## Importancia del prototipado

El prototipado permite obtener retroalimentación temprana sobre una solución antes de su construcción definitiva. En esta misión se trabaja con una revisión basada en criterios de calidad, con enfoque en la detección de defectos, priorización de problemas y mejora del producto.

## Lecciones aprendidas

> Sección obligatoria del informe: aquí deben responderse las preguntas clave del aprendizaje del proyecto.

Todo proyecto ofrece oportunidades de mejora y genera conocimientos valiosos para futuros desarrollos. En esta misión se debe reflexionar sobre el proceso realizado, identificando prácticas exitosas, dificultades encontradas y acciones que podrían implementarse de manera diferente en proyectos futuros.

El informe deberá responder, como mínimo, las siguientes preguntas:

### 1. ¿Qué funcionó bien y debería repetirse?

- La organización por ramas del repositorio fue una decisión útil porque permitió separar claramente los distintos contextos del proyecto: negocio, simulador y prototipo funcional, lo que me permitio volver a repasar algunos temas ya vistos en anteriores clase
- La documentación por etapas también ayudó a mantener claridad en el proceso: análisis, requisitos, modelado, validación y prototipado.
- La estructura del README y la guía de navegación facilitaron la comprensión del repositorio para cualquier usuario nuevo y para mi persona
- El prototipo funcional fue una buena herramienta para validar ideas tempranamente y comprobar si la solución tenía sentido antes de una implementación más compleja.
- La combinación de documentos técnicos, artefactos visuales y pruebas convirtió el repositorio en un portafolio útil y demostrativo, para llevar a cabo ciertas desiciones o tener claridad de lo que se hace

### 2. ¿Qué falló y cómo se detectó tarde?

- La principal dificultad fue la falta de una organización en algunas actividades o de herramientas complejas que no se sabia de su uso mas alla del basico 
- En algunos momentos, el contenido se fue acumulando sin una guía clara de navegación, lo que podía dificultar la comprensión del proyecto para terceros.
- La validación de requisitos y la revisión del prototipo se identificaron como tareas que debieron realizarse más tempranamente para detectar inconsistencias antes.

### 3. ¿Qué haríamos diferente desde el inicio?

- Definir desde el principio la estructura final del repositorio, con una rama por área y una guía general clara para cada una.
- Establecer un estándar para el contenido mínimo de cada README: contexto, objetivo, estructura, documentación y navegación.
- Iniciar la validación funcional y de requisitos antes de cerrar la propuesta del prototipo.
- Hacer una revisión más temprana de artefactos como diagramas, SRS, backlog y casos de prueba para detectar errores antes.
- Mantener una trazabilidad más fuerte entre requisitos, prototipo y pruebas, para que cada cambio tenga una justificación clara.

## Conclusión

Este repositorio funciona como un portafolio de trabajo académico y práctico en ingeniería de requisitos. Su objetivo es dejar una guía clara del contenido de cada rama y mostrar cómo el proceso de análisis, documentación y validación contribuye a la construcción de soluciones más útiles, mejor estructuradas y más alineadas con las necesidades reales del usuario.

---

> El proyecto está pensado como una referencia de navegación para entender el contenido de las tres ramas y la evolución del trabajo desde la definición del problema hasta la validación de la propuesta
