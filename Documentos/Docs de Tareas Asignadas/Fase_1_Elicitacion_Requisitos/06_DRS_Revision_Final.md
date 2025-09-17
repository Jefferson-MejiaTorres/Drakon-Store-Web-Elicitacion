# Documento de Requisitos del Sistema (DRS) - Tarea 6: Requisitos No Funcionales

**Proyecto:** Drakon Store  
**Versión:** 1.0  
**Fecha:** 20 de mayo de 2025

## 1. Introducción

Esta tarea identifica los requisitos no funcionales del sistema Drakon Store, siguiendo la metodología de Durán & Bernárdez (2002) y empleando la plantilla recomendada (sección 5.5). Se consideran aspectos técnicos, legales y de calidad, asegurando la coherencia con los objetivos y requisitos definidos en tareas previas.

## 2. Requisitos No Funcionales

| **Código** | **Tipo**                | **Requisito**                                                                 | **Descripción/Justificación**                                                                                 | **Prioridad** | **Conflictos/Revisión**         |
|------------|-------------------------|-------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------|-------------------------------|
| RNF-01     | Comunicaciones          | El sistema debe utilizar el protocolo HTTPS para todas las comunicaciones.    | Garantiza la seguridad y confidencialidad de los datos transmitidos.                                         | Alta         | Sin conflictos actuales        |
| RNF-02     | Interfaz de usuario     | La interfaz debe ser responsiva y accesible desde dispositivos móviles y PC.  | Mejora la experiencia de usuario y amplía el alcance del sistema.                                            | Alta         | Sin conflictos actuales        |
| RNF-03     | Interfaz de usuario     | La interfaz debe seguir los principios de usabilidad y accesibilidad WCAG 2.1.| Facilita el uso a personas con discapacidad y cumple estándares internacionales.                             | Media        | Sin conflictos actuales        |
| RNF-04     | Fiabilidad              | El sistema debe tener una disponibilidad mínima del 99% mensual.              | Asegura que el sistema esté operativo la mayor parte del tiempo.                                             | Alta         | Sin conflictos actuales        |
| RNF-05     | Fiabilidad              | La tasa de fallos críticos no debe superar 2 por mes en producción.           | Reduce el impacto de errores graves en la operación.                                                         | Alta         | Sin conflictos actuales        |
| RNF-06     | Entorno de desarrollo   | El sistema debe desarrollarse usando tecnologías web estándar (HTML5, CSS3, JS, Bootstrap). | Facilita el mantenimiento y la portabilidad.                                                                 | Alta         | Sin conflictos actuales        |
| RNF-07     | Portabilidad            | El sistema debe funcionar en los navegadores Chrome, Firefox, Edge y Safari (últimas 2 versiones). | Permite el acceso desde la mayoría de dispositivos y sistemas operativos.                                    | Alta         | Sin conflictos actuales        |
| RNF-08     | Portabilidad            | El sistema debe ser accesible desde cualquier sistema operativo con navegador web moderno. | Amplía la base de usuarios y reduce dependencias de plataforma.                                              | Alta         | Sin conflictos actuales        |
| RNF-09     | Legal                   | El sistema debe cumplir con la Ley de Protección de Datos Personales vigente en Colombia. | Protege los derechos de los usuarios y evita sanciones legales.                                              | Alta         | Sin conflictos actuales        |
| RNF-10     | Seguridad               | Los datos personales y de pago deben almacenarse cifrados y solo ser accesibles por usuarios autorizados. | Minimiza riesgos de filtración y acceso no autorizado.                                                       | Alta         | Sin conflictos actuales        |

## 3. Revisión de Conflictos

No se detectaron conflictos entre los requisitos no funcionales identificados. Se recomienda revisar estos requisitos en futuras validaciones con usuarios y equipo técnico.

## 4. Técnica Aplicada

Se utilizó la plantilla de requisitos no funcionales (sección 5.5 de la metodología de Durán & Bernárdez, 2002), revisando la coherencia con los objetivos, requisitos funcionales y de información definidos en tareas previas.

## 5. Próximos pasos

* Validar los requisitos no funcionales con el equipo de desarrollo y usuarios clave.
* Actualizar la hoja de versiones y el DRS general.

**Autor:** Diego Torres  
**Revisado por:** Equipo Drakon Store
