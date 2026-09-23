# Simulador de Videojuego / Simulador de Transmisión Mecánica

## ¿Qué es esta rama?

Esta rama reúne la documentación, el modelado y la validación del caso del simulador de un vehículo de competición, centrado en el comportamiento de la transmisión mecánica. El objetivo principal es capturar la estructura funcional del sistema, los requisitos del software y la validación de calidad del documento SRS.

## Contexto del caso de negocio

Una empresa de videojuegos pretende desarrollar un simulador de un vehículo de competición. La parte representada en el diagrama de clases corresponde a la transmisión mecánica del vehículo.

La transmisión del vehículo tiene como finalidad trasladar el movimiento generado por el motor, a un número determinado de revoluciones, a las ruedas con diferentes velocidades de giro según las condiciones de marcha que se deseen. El conductor puede cambiar de marcha para obtener un mejor rendimiento del vehículo dependiendo de las circunstancias del recorrido.

Este tipo de simulador requiere representar correctamente:

- las relaciones entre componentes del sistema,
- las condiciones de marcha,
- los cambios de velocidad y rendimiento,
- la lógica de comportamiento del vehículo,
- la validación del sistema frente a requisitos previstos.

## Objetivo de la rama

La rama Simulador_Juego tiene como propósito documentar y organizar:

- los modelos UML del sistema,
- los modelos de comportamiento,
- el documento de requisitos de software (SRS),
- la evidencia de validación y pruebas,
- la trazabilidad del caso del simulador.

## Estructura principal de la rama

```text
Simulador_Juego/
├── README.md
├── Modelos_UML/
│   ├── Diagrama Caso de Uso Mudanza.qea
│   ├── Diagrama de Clases Mudanza.qea
│   └── Diagrama E-R Mudanza 1.qea
├── Modelos_Comportamiento/
│   └── Documentos y artefactos de comportamiento del simulador
├── DocumentoSRS_Simulador_Videojuego.pdf
├── TestCases_Simulador_Videojuego.pdf
└── Otros artefactos del proyecto
```

## Navegación guiada por carpetas

### 1. Modelos_UML

En esta carpeta se encuentran los artefactos del modelado estructural del sistema, especialmente los diagramas UML del caso del simulador.

Archivos principales:

- [Diagrama Caso de Uso Mudanza.qea](../Diagrama%20Caso%20de%20Uso%20Mudanza.qea)
- [Diagrama de Clases Mudanza.qea](../Diagrama%20de%20Clases%20Mudanza.qea)
- [Diagrama E-R Mudanza 1.qea](../Diagrama%20E-R%20Mudanza%201.qea)

Estos modelos permiten representar:

- casos de uso del sistema,
- estructura de clases del dominio,
- relaciones y entidades principales del problema.

### 2. Modelos_Comportamiento

Esta carpeta tiene como finalidad documentar la lógica de funcionamiento del simulador y el comportamiento del sistema en condiciones de operación reales.

Incluye:

- flujo de trabajo del simulador,
- evolución del proceso de transmisión,
- comportamiento del vehículo según la marcha seleccionada,
- reglas de cambio de velocidad y rendimiento.

### 3. Documento SRS del simulador

El documento de requisitos de software es la pieza central de esta rama, ya que recoge la especificación formal del sistema.

Archivo principal:

- [DocumentoSRS_Simulador_Videojuego.pdf](../DocumentoSRS_Simulador_Videojuego.pdf)

En este documento se encuentran:

- objetivos del sistema,
- requisitos funcionales,
- requisitos no funcionales,
- restricciones del dominio,
- casos y condiciones de uso,
- definición del comportamiento esperado del simulador.

> Los modelos de clases, los requisitos y la descripción del comportamiento están documentados dentro del SRS del videojuego, por lo que este documento actúa como la referencia principal para la comprensión del sistema.

### 4. Casos de prueba

La validación del sistema se documenta mediante los casos de prueba del simulador.

Archivo principal:

- [TestCases_Simulador_Videojuego.pdf](../TestCases_Simulador_Videojuego.pdf)

Estos casos permiten verificar:

- que el comportamiento del sistema coincide con los requisitos,
- que la transmisión responde correctamente al cambio de marcha,
- que el modelo cumple con las expectativas funcionales del usuario,
- que la calidad del producto se revisa de forma objetiva.

## Validación de calidad y walkthrough formal

El guardián de la calidad verifica que los requisitos documentados representen adecuadamente las necesidades identificadas y cumplan criterios de calidad. Para ello, se realiza un walkthrough formal del documento SRS y se documentan los hallazgos obtenidos durante la validación.

Este proceso incluye:

- revisión de requisitos frente al problema real,
- comprobación de claridad y completitud,
- identificación de inconsistencias o ambigüedades,
- análisis de trazabilidad entre necesidades y requisitos,
- validación del documento antes de continuar con el diseño o la implementación.

## Relación con el caso de estudio

El caso de simulador de transmisión mecánica conecta directamente con la idea de una solución orientada a la competencia y al rendimiento del vehículo. El sistema debe modelar cómo se transmite el movimiento del motor a las ruedas y cómo el conductor puede seleccionar marchas para ajustar el rendimiento según la situación.

Esto implica representar correctamente:

- el conjunto de componentes implicados,
- la interacción entre motor, transmisión y ruedas,
- la selección de marcha,
- la influencia de las condiciones de marcha,
- la lógica de cálculo del rendimiento.

## Recomendación de lectura

Para navegar de manera intuitiva en esta rama, se recomienda seguir este orden:

1. Leer este README.
2. Revisar el modelo UML.
3. Consultar el documento SRS.
4. Revisar los modelos de comportamiento.
5. Validar con los casos de prueba.

De esta forma, el usuario comprende primero el contexto del problema, posteriormente la solución modelada y finalmente la validación del sistema.

## Resultado esperado

Al finalizar la revisión de esta rama, el usuario debe ser capaz de entender:

- el dominio del problema,
- la estructura del simulador,
- el papel de los modelos UML,
- la importancia del documento SRS,
- cómo se valida la calidad del software mediante pruebas y revisión formal.

---

> Esta rama actúa como una guía documental del simulador, concentrando el modelado, la especificación de requisitos y la validación del caso de transmisión mecánica.
