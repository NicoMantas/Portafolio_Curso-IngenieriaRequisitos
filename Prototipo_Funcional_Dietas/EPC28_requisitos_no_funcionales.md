# EPC28 — Requisitos No Funcionales

| ID | Nombre | Tipo | Prioridad | Descripción |
|---|---|---|---|---|
| RNF-EPC28-01 | Rendimiento de búsqueda | Requisito | Alta | La búsqueda en catálogos debe responder en ≤ 2 s para un dataset de hasta 10.000 registros por catálogo. |
| RNF-EPC28-02 | Seguridad y roles | Restricción | Alta | Solo usuarios con rol "Médico nutricionista" (o superior) pueden crear/editar catálogos; consulta permitida a roles clínicos. |
| RNF-EPC28-03 | Trazabilidad / Auditoría | Requisito | Media | Toda modificación de un catálogo debe registrar usuario, fecha/hora y valores previos/nuevos. |
| RNF-EPC28-04 | Integridad referencial | Restricción | Alta | Un alimento referenciado en una dieta no puede eliminarse sin validación de integridad. |
| RNF-EPC28-05 | Interoperabilidad | Requisito | Media | Los catálogos deben ser consumibles por la épica de Asignación de tratamiento nutricional (motor de cruce). |
| RNF-EPC28-06 | Disponibilidad | Requisito | Alta | Servicio disponible 99.5% mensual (SLA Azure). |
| RNF-EPC28-07 | Escalabilidad | Requisito | Media | Soporte de crecimiento horizontal en Azure App Service / AKS. |
| RNF-EPC28-08 | PWA Instalable | Requisito | Alta | La app debe cumplir criterios Lighthouse PWA: manifest válido, service worker registrado, HTTPS, iconos 192/512, display standalone. |
| RNF-EPC28-09 | Offline-first | Requisito | Alta | Estrategia de caché (Workbox): precache de shell + runtime caching para API de catálogos con IndexedDB. |
| RNF-EPC28-10 | Responsive / Accesibilidad | Requisito | Alta | Diseño responsive mobile-first, WCAG 2.1 AA, navegación por teclado. |
| RNF-EPC28-11 | Sincronización en background | Requisito | Media | Uso de Background Sync API para reintentar mutaciones pendientes al recuperar conexión. |