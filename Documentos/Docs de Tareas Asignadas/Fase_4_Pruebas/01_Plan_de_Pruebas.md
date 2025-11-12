# Plan de Pruebas para Drakon Store Web

**Proyecto:** Drakon Store Web  
**Versión:** 1.0  
**Fecha de creación:** 12 de noviembre de 2025  
**Autor:** Equipo Drakon Store  
**Estado:** En Ejecución

---

## 1. Introducción

### 1.1 Propósito

El propósito de este documento es describir la estrategia integral de pruebas para el proyecto Drakon Store Web, un sistema de comercio electrónico especializado en la venta de gorras. Este plan establece los objetivos, alcance, metodología, recursos y criterios de aceptación necesarios para garantizar la calidad del software antes de su lanzamiento.

Las pruebas son fundamentales para validar que el sistema cumple con los requisitos funcionales y no funcionales especificados, asegurando una experiencia de usuario óptima y la confiabilidad del proceso de compra en línea.

### 1.2 Alcance

Este plan de pruebas cubre las actividades de validación y verificación para el sistema completo Drakon Store Web, incluyendo:

**Módulos Funcionales:**
- Sistema de registro y autenticación de usuarios
- Catálogo de productos con búsqueda y filtros
- Carrito de compras y gestión de favoritos
- Proceso de compra y pasarela de pagos
- Gestión de perfil de usuario
- Panel de administración de productos

**Aspectos No Funcionales:**
- Rendimiento y escalabilidad
- Seguridad y protección de datos
- Usabilidad y experiencia de usuario
- Compatibilidad multiplataforma
- Fiabilidad y disponibilidad del sistema

**Exclusiones:**
- Pruebas de infraestructura de servidores
- Pruebas de terceros (pasarelas de pago externas)
- Pruebas de carga masiva en entorno de producción

### 1.3 Objetivos de Pruebas

Los objetivos principales de este plan de pruebas son:

1. **Verificar la funcionalidad del software**: Comprobar que todas las funcionalidades del sistema operan según lo especificado en los requisitos funcionales documentados en la Fase 1.

2. **Validar el cumplimiento de requisitos**: Asegurar que el software satisface los requisitos funcionales y no funcionales, incluyendo los criterios de aceptación del cliente.

3. **Identificar y corregir defectos**: Detectar errores, inconsistencias y problemas de calidad antes del lanzamiento del sistema, reduciendo el riesgo de fallas en producción.

4. **Garantizar la seguridad**: Validar que el sistema protege adecuadamente los datos sensibles de usuarios y transacciones.

5. **Asegurar la usabilidad**: Confirmar que la interfaz es intuitiva y proporciona una experiencia de usuario satisfactoria.

6. **Evaluar el rendimiento**: Verificar que el sistema responde adecuadamente bajo diferentes condiciones de carga.

## 2. Estrategia de Pruebas

### 2.1 Enfoque de Pruebas

La estrategia de pruebas para Drakon Store Web sigue un enfoque estructurado basado en la norma **ISO/IEC/IEEE 29119** para pruebas de software, implementando múltiples niveles y tipos de pruebas:

#### 2.1.1 Niveles de Pruebas

**a) Pruebas Unitarias**
- **Responsable**: Desarrolladores
- **Alcance**: Validación de componentes individuales (funciones, métodos, clases)
- **Herramientas**: Jest para JavaScript, PHPUnit para backend
- **Criterio de éxito**: Cobertura mínima del 80% del código

**b) Pruebas de Integración**
- **Responsable**: Equipo de desarrollo
- **Alcance**: Validación de interacción entre módulos (frontend-backend, backend-base de datos)
- **Enfoque**: Integración incremental y pruebas de API
- **Criterio de éxito**: Todas las interfaces funcionan correctamente

**c) Pruebas de Sistema**
- **Responsable**: Equipo de QA
- **Alcance**: Validación del sistema completo integrado
- **Enfoque**: Pruebas end-to-end de flujos completos de negocio
- **Criterio de éxito**: Todos los casos de prueba críticos pasan exitosamente

**d) Pruebas de Aceptación del Usuario (UAT)**
- **Responsable**: Cliente y usuarios finales
- **Alcance**: Validación de que el sistema cumple las expectativas del negocio
- **Enfoque**: Escenarios reales de uso
- **Criterio de éxito**: Aprobación formal del cliente

#### 2.1.2 Tipos de Pruebas (basados en características de calidad)

Siguiendo la norma ISO/IEC/IEEE 29119, se implementarán los siguientes tipos de pruebas:

**1. Pruebas Funcionales**
- Validación de todas las funcionalidades del sistema
- Casos de prueba basados en requisitos funcionales
- Cobertura: Registro, login, catálogo, carrito, compra, perfil

**2. Pruebas de Usabilidad**
- Evaluación de la experiencia de usuario
- Navegación intuitiva y facilidad de uso
- Diseño responsivo en diferentes dispositivos

**3. Pruebas de Seguridad**
- Autenticación y autorización
- Protección de datos sensibles
- Prevención de vulnerabilidades (SQL injection, XSS, CSRF)

**4. Pruebas de Rendimiento**
- Tiempo de respuesta del sistema
- Carga de múltiples usuarios concurrentes
- Optimización de consultas a base de datos

**5. Pruebas de Compatibilidad**
- Navegadores: Chrome, Firefox, Safari, Edge
- Dispositivos: Desktop, tablet, móvil
- Sistemas operativos: Windows, macOS, Android, iOS

**6. Pruebas de Fiabilidad**
- Disponibilidad del sistema
- Recuperación ante fallos
- Consistencia de datos

**7. Pruebas de Mantenibilidad**
- Calidad del código
- Documentación técnica
- Facilidad de actualización

**8. Pruebas de Portabilidad**
- Adaptabilidad a diferentes entornos
- Migración de datos
- Configuración en diferentes servidores

**9. Pruebas de Interoperabilidad**
- Integración con pasarelas de pago
- Compatibilidad con servicios externos
- APIs de terceros

**10. Pruebas de Instalación**
- Proceso de despliegue
- Configuración inicial
- Actualización de versiones

**11. Pruebas de Procedimientos**
- Validación de procesos de negocio
- Flujos de trabajo administrativos
- Procedimientos de respaldo

**12. Pruebas de Estabilidad**
- Funcionamiento continuo prolongado
- Fugas de memoria
- Comportamiento bajo estrés

**13. Pruebas de Accesibilidad**
- Cumplimiento WCAG 2.1
- Navegación por teclado
- Soporte para lectores de pantalla

**14. Pruebas de Backup y Recuperación**
- Respaldo de datos
- Restauración de información
- Recuperación ante desastres

**15. Pruebas de Conversiones**
- Migración de datos legacy
- Transformación de formatos
- Importación/exportación de información

**16. Pruebas de Procedimientos de Recuperación de Desastres**
- Plan de contingencia
- Tiempo de recuperación (RTO)
- Punto de recuperación (RPO)

### 2.2 Recursos de Pruebas

#### 2.2.1 Personal de Pruebas

| Rol | Responsable | Responsabilidades |
|-----|------------|-------------------|
| **Líder de Pruebas** | Jefferson Mejía Torres | Coordinación general, planificación, reportes |
| **Analista de Pruebas** | Luis Miguel Lindarte | Diseño de casos de prueba, análisis de resultados |
| **Ejecutor de Pruebas** | Daniel Contreras | Ejecución de pruebas, registro de defectos |
| **Especialista en Seguridad** | David Rojas | Pruebas de seguridad y vulnerabilidades |
| **Especialista en UX** | Juan Diego Torres | Pruebas de usabilidad y experiencia de usuario |

#### 2.2.2 Ambiente de Pruebas

**Entorno de Desarrollo:**
- Servidor local con datos de prueba
- Base de datos MySQL en localhost
- Uso para pruebas unitarias y de integración

**Entorno de Staging:**
- Servidor de pruebas dedicado
- Réplica de la configuración de producción
- Base de datos con datos sintéticos
- URL: staging.drakonstore.com

**Entorno de Producción (pruebas limitadas):**
- Pruebas de aceptación final
- Monitoreo post-despliegue
- URL: www.drakonstore.com

**Configuración de Ambientes:**
- **Hardware**: Servidor con 4GB RAM, 50GB almacenamiento
- **Software**: Apache/Nginx, PHP 8.x, MySQL 8.x
- **Navegadores**: Últimas 2 versiones de Chrome, Firefox, Safari, Edge
- **Dispositivos móviles**: Android 10+, iOS 13+

#### 2.2.3 Herramientas de Pruebas

| Tipo de Prueba | Herramienta | Propósito |
|----------------|-------------|-----------|
| **Gestión de Pruebas** | Jira / TestRail | Planificación y seguimiento de casos de prueba |
| **Pruebas Funcionales** | Selenium WebDriver | Automatización de pruebas funcionales |
| **Pruebas de API** | Postman | Testing de endpoints REST API |
| **Pruebas de Rendimiento** | JMeter | Pruebas de carga y estrés |
| **Pruebas de Seguridad** | OWASP ZAP | Análisis de vulnerabilidades |
| **Gestión de Defectos** | Jira | Registro y seguimiento de bugs |
| **Pruebas Unitarias** | Jest / PHPUnit | Testing de código |
| **Análisis de Código** | SonarQube | Calidad y cobertura de código |

### 2.3 Planificación de Pruebas

#### 2.3.1 Calendario de Pruebas

| Fase | Tipo de Prueba | Fecha Inicio | Fecha Fin | Duración | Responsable |
|------|----------------|--------------|-----------|----------|-------------|
| **Fase 1** | Pruebas Unitarias | 15/11/2025 | 20/11/2025 | 5 días | Desarrolladores |
| **Fase 2** | Pruebas de Integración | 21/11/2025 | 25/11/2025 | 4 días | Equipo Dev |
| **Fase 3** | Pruebas Funcionales | 26/11/2025 | 02/12/2025 | 6 días | Equipo QA |
| **Fase 4** | Pruebas de Seguridad | 26/11/2025 | 29/11/2025 | 3 días | Especialista |
| **Fase 5** | Pruebas de Usabilidad | 03/12/2025 | 05/12/2025 | 2 días | UX Specialist |
| **Fase 6** | Pruebas de Rendimiento | 03/12/2025 | 05/12/2025 | 2 días | Equipo QA |
| **Fase 7** | Pruebas de Compatibilidad | 06/12/2025 | 08/12/2025 | 2 días | Equipo QA |
| **Fase 8** | UAT (Aceptación Usuario) | 09/12/2025 | 13/12/2025 | 4 días | Cliente |
| **Fase 9** | Pruebas de Regresión | 14/12/2025 | 16/12/2025 | 2 días | Equipo QA |
| **Fase 10** | Pruebas Finales | 17/12/2025 | 18/12/2025 | 1 día | Líder QA |

**Fecha de Lanzamiento Proyectada**: 20 de diciembre de 2025

#### 2.3.2 Hitos Críticos

- **20/11/2025**: Completar pruebas unitarias
- **02/12/2025**: Completar pruebas funcionales críticas
- **08/12/2025**: Completar todas las pruebas técnicas
- **13/12/2025**: Obtener aprobación UAT del cliente
- **18/12/2025**: Cierre de pruebas y listo para producción

### 2.4 Criterios de Aceptación

Para considerar que las pruebas han sido exitosas y el sistema está listo para producción, se deben cumplir los siguientes criterios:

#### 2.4.1 Criterios de Entrada

Para iniciar cada fase de pruebas se requiere:
- ✅ Código completo y desplegado en ambiente de pruebas
- ✅ Documentación de requisitos actualizada
- ✅ Casos de prueba revisados y aprobados
- ✅ Ambiente de pruebas configurado y funcional
- ✅ Datos de prueba preparados

#### 2.4.2 Criterios de Salida

Para finalizar exitosamente las pruebas:

**Criterios Cuantitativos:**
- ✅ 100% de casos de prueba críticos ejecutados
- ✅ 95% de casos de prueba de alta prioridad ejecutados
- ✅ 0 defectos críticos abiertos
- ✅ 0 defectos de alta prioridad abiertos
- ✅ Menos de 5 defectos de prioridad media abiertos
- ✅ Cobertura de código ≥ 80%

**Criterios Cualitativos:**
- ✅ Todas las funcionalidades core operativas
- ✅ Sistema estable sin caídas frecuentes
- ✅ Rendimiento dentro de parámetros aceptables
- ✅ Sin vulnerabilidades de seguridad críticas
- ✅ Usabilidad aprobada por usuarios piloto
- ✅ Aprobación formal del cliente

#### 2.4.3 Criterios de Suspensión

Las pruebas se suspenderán si:
- ⚠️ Más de 5 defectos críticos abiertos simultáneamente
- ⚠️ El ambiente de pruebas está inestable por más de 24 horas
- ⚠️ Cambios mayores en requisitos durante ejecución
- ⚠️ Falta de recursos críticos (personal, herramientas)

#### 2.4.4 Criterios de Reanudación

Las pruebas se reanudarán cuando:
- ✅ Defectos críticos corregidos y verificados
- ✅ Ambiente de pruebas restaurado y validado
- ✅ Nuevos requisitos integrados y aprobados
- ✅ Recursos necesarios disponibles nuevamente

## 3. Casos de Prueba

### 3.1 Identificación de Casos de Prueba

Se han identificado un total de **120 casos de prueba** distribuidos en las siguientes categorías:

#### 3.1.1 Pruebas Funcionales (60 casos)

**Módulo de Autenticación (12 casos)**
- CP-FUNC-001: Registro exitoso de nuevo usuario
- CP-FUNC-002: Registro con email duplicado
- CP-FUNC-003: Registro con datos inválidos
- CP-FUNC-004: Login exitoso con credenciales válidas
- CP-FUNC-005: Login fallido con contraseña incorrecta
- CP-FUNC-006: Login fallido con email no registrado
- CP-FUNC-007: Recuperación de contraseña
- CP-FUNC-008: Cambio de contraseña
- CP-FUNC-009: Cierre de sesión
- CP-FUNC-010: Sesión expirada
- CP-FUNC-011: Validación de formato de email
- CP-FUNC-012: Validación de fortaleza de contraseña

**Módulo de Catálogo (15 casos)**
- CP-FUNC-013: Visualización de catálogo completo
- CP-FUNC-014: Búsqueda de productos por nombre
- CP-FUNC-015: Filtro por categoría
- CP-FUNC-016: Filtro por precio
- CP-FUNC-017: Ordenamiento por precio ascendente
- CP-FUNC-018: Ordenamiento por precio descendente
- CP-FUNC-019: Visualización de detalle de producto
- CP-FUNC-020: Zoom de imagen de producto
- CP-FUNC-021: Navegación entre productos
- CP-FUNC-022: Paginación de resultados
- CP-FUNC-023: Productos sin stock
- CP-FUNC-024: Búsqueda sin resultados
- CP-FUNC-025: Carga de imágenes de productos
- CP-FUNC-026: Información de disponibilidad
- CP-FUNC-027: Productos destacados

**Módulo de Carrito de Compras (18 casos)**
- CP-FUNC-028: Agregar producto al carrito
- CP-FUNC-029: Eliminar producto del carrito
- CP-FUNC-030: Actualizar cantidad de producto
- CP-FUNC-031: Carrito vacío
- CP-FUNC-032: Visualización del total
- CP-FUNC-033: Aplicar código de descuento
- CP-FUNC-034: Código de descuento inválido
- CP-FUNC-035: Persistencia del carrito en sesión
- CP-FUNC-036: Límite de cantidad por producto
- CP-FUNC-037: Validación de stock disponible
- CP-FUNC-038: Cálculo de impuestos
- CP-FUNC-039: Cálculo de envío
- CP-FUNC-040: Actualización automática de totales
- CP-FUNC-041: Vaciar carrito completo
- CP-FUNC-042: Guardar carrito para después
- CP-FUNC-043: Sincronización carrito usuario registrado
- CP-FUNC-044: Carrito con productos múltiples
- CP-FUNC-045: Límite máximo de productos en carrito

**Módulo de Favoritos (6 casos)**
- CP-FUNC-046: Agregar producto a favoritos
- CP-FUNC-047: Eliminar producto de favoritos
- CP-FUNC-048: Visualizar lista de favoritos
- CP-FUNC-049: Favoritos vacíos
- CP-FUNC-050: Mover favorito al carrito
- CP-FUNC-051: Persistencia de favoritos

**Módulo de Compra (15 casos)**
- CP-FUNC-052: Proceso de checkout completo
- CP-FUNC-053: Ingreso de dirección de envío
- CP-FUNC-054: Selección de método de envío
- CP-FUNC-055: Selección de método de pago
- CP-FUNC-056: Pago con tarjeta exitoso
- CP-FUNC-057: Pago rechazado
- CP-FUNC-058: Pago con PayPal
- CP-FUNC-059: Confirmación de pedido
- CP-FUNC-060: Email de confirmación
- CP-FUNC-061: Generación de factura
- CP-FUNC-062: Validación de datos de pago
- CP-FUNC-063: Timeout en pasarela de pago
- CP-FUNC-064: Cancelación de compra
- CP-FUNC-065: Resumen de pedido
- CP-FUNC-066: Historial de pedidos

**Módulo de Perfil de Usuario (8 casos)**
- CP-FUNC-067: Visualizar perfil
- CP-FUNC-068: Editar información personal
- CP-FUNC-069: Cambiar contraseña desde perfil
- CP-FUNC-070: Agregar dirección de envío
- CP-FUNC-071: Eliminar dirección
- CP-FUNC-072: Establecer dirección predeterminada
- CP-FUNC-073: Ver historial de compras
- CP-FUNC-074: Descargar factura anterior

#### 3.1.2 Pruebas de Usabilidad (15 casos)

- CP-USAB-001: Navegación intuitiva del sitio
- CP-USAB-002: Claridad de mensajes de error
- CP-USAB-003: Feedback visual en acciones
- CP-USAB-004: Tiempo de aprendizaje del sistema
- CP-USAB-005: Facilidad para encontrar productos
- CP-USAB-006: Claridad del proceso de compra
- CP-USAB-007: Accesibilidad para personas con discapacidad
- CP-USAB-008: Consistencia de diseño
- CP-USAB-009: Legibilidad de textos
- CP-USAB-010: Tamaño de botones y elementos interactivos
- CP-USAB-011: Indicadores de progreso en checkout
- CP-USAB-012: Ayuda y documentación disponible
- CP-USAB-013: Recuperación de errores
- CP-USAB-014: Satisfacción general del usuario
- CP-USAB-015: Adaptabilidad a diferentes dispositivos

#### 3.1.3 Pruebas de Seguridad (12 casos)

- CP-SEG-001: Protección contra SQL Injection
- CP-SEG-002: Protección contra XSS
- CP-SEG-003: Protección CSRF
- CP-SEG-004: Encriptación de contraseñas
- CP-SEG-005: Seguridad en transmisión de datos (HTTPS)
- CP-SEG-006: Validación de entrada de datos
- CP-SEG-007: Control de acceso basado en roles
- CP-SEG-008: Sesiones seguras
- CP-SEG-009: Timeout de sesión inactiva
- CP-SEG-010: Protección de datos sensibles
- CP-SEG-011: Logs de seguridad
- CP-SEG-012: Intentos de login fallidos

#### 3.1.4 Pruebas de Rendimiento (10 casos)

- CP-REND-001: Tiempo de carga página principal
- CP-REND-002: Tiempo de respuesta búsqueda
- CP-REND-003: Carga de imágenes de productos
- CP-REND-004: Tiempo de procesamiento de compra
- CP-REND-005: Concurrencia de 50 usuarios
- CP-REND-006: Concurrencia de 100 usuarios
- CP-REND-007: Optimización de consultas DB
- CP-REND-008: Caché de contenido
- CP-REND-009: Compresión de recursos
- CP-REND-010: Escalabilidad del sistema

#### 3.1.5 Pruebas de Compatibilidad (10 casos)

- CP-COMP-001: Chrome última versión
- CP-COMP-002: Firefox última versión
- CP-COMP-003: Safari última versión
- CP-COMP-004: Edge última versión
- CP-COMP-005: Dispositivos Android
- CP-COMP-006: Dispositivos iOS
- CP-COMP-007: Tablets
- CP-COMP-008: Resoluciones de pantalla variadas
- CP-COMP-009: Navegadores versiones anteriores
- CP-COMP-010: Orientación horizontal/vertical

#### 3.1.6 Pruebas de Fiabilidad (8 casos)

- CP-FIAB-001: Disponibilidad del sistema 24/7
- CP-FIAB-002: Recuperación ante caídas
- CP-FIAB-003: Integridad de datos
- CP-FIAB-004: Consistencia de transacciones
- CP-FIAB-005: Manejo de errores
- CP-FIAB-006: Tolerancia a fallos
- CP-FIAB-007: Backup automático
- CP-FIAB-008: Restauración de datos

#### 3.1.7 Otras Pruebas (5 casos)

- CP-OTRO-001: Instalación del sistema
- CP-OTRO-002: Actualización de versión
- CP-OTRO-003: Exportación de datos
- CP-OTRO-004: Importación de productos
- CP-OTRO-005: Mantenibilidad del código

### 3.2 Descripción de Casos de Prueba

**Nota**: Las fichas técnicas detalladas de cada caso de prueba se encuentran en el documento complementario **"02_Casos_de_Prueba_Detallados.md"**, el cual incluye para cada caso:

- Código de identificación único
- Nombre descriptivo del caso de prueba
- Objetivos específicos
- Precondiciones necesarias
- Procedimiento paso a paso
- Datos de prueba requeridos
- Resultados esperados
- Criterios de éxito/fallo
- Prioridad del caso
- Dependencias con otros casos

**Resumen de Casos de Prueba Críticos:**

Los siguientes casos son considerados críticos para el funcionamiento del sistema y deben ejecutarse en todas las iteraciones:

1. **CP-FUNC-001**: Registro exitoso de nuevo usuario
2. **CP-FUNC-004**: Login exitoso con credenciales válidas
3. **CP-FUNC-028**: Agregar producto al carrito
4. **CP-FUNC-052**: Proceso de checkout completo
5. **CP-FUNC-056**: Pago con tarjeta exitoso
6. **CP-SEG-001**: Protección contra SQL Injection
7. **CP-SEG-005**: Seguridad en transmisión de datos (HTTPS)
8. **CP-REND-001**: Tiempo de carga página principal
9. **CP-COMP-001**: Funcionalidad en Chrome
10. **CP-FIAB-003**: Integridad de datos

## 4. Ejecución de Pruebas

### 4.1 Procedimientos de Ejecución

#### 4.1.1 Preparación para Ejecución

**Antes de iniciar las pruebas:**
1. Verificar que el ambiente de pruebas esté disponible y configurado
2. Confirmar que el build correcto está desplegado
3. Revisar que todos los datos de prueba estén cargados
4. Validar accesos y permisos del equipo de pruebas
5. Preparar herramientas de registro y captura

**Durante la ejecución:**
1. Seguir exactamente los pasos descritos en cada caso de prueba
2. Registrar observaciones detalladas
3. Capturar evidencias (screenshots, videos)
4. Documentar cualquier desviación del comportamiento esperado
5. Reportar defectos inmediatamente

**Después de la ejecución:**
1. Actualizar estado de casos de prueba en la herramienta de gestión
2. Consolidar evidencias
3. Generar reporte de ejecución
4. Comunicar resultados al equipo
5. Planificar re-ejecución de casos fallidos

#### 4.1.2 Responsabilidades de Ejecución

**Líder de Pruebas:**
- Asignar casos de prueba al equipo
- Supervisar la ejecución
- Resolver bloqueos y dudas
- Consolidar reportes
- Comunicar con stakeholders

**Ejecutores de Pruebas:**
- Ejecutar casos de prueba asignados
- Registrar resultados detalladamente
- Reportar defectos encontrados
- Solicitar clarificaciones cuando sea necesario
- Mantener actualizado el estado de ejecución

**Desarrolladores:**
- Corregir defectos reportados
- Proporcionar builds para re-pruebas
- Aclarar dudas técnicas
- Participar en sesiones de triaje de defectos

#### 4.1.3 Ciclo de Ejecución

**Ciclo Iterativo:**
1. **Ejecución Inicial**: Todos los casos de prueba planificados
2. **Corrección de Defectos**: Desarrolladores corrigen bugs
3. **Re-prueba**: Validación de correcciones (retesting)
4. **Pruebas de Regresión**: Verificar que las correcciones no introdujeron nuevos problemas
5. **Iteración**: Repetir hasta cumplir criterios de aceptación

**Frecuencia de Ejecución:**
- **Pruebas Unitarias**: Ejecución automática en cada commit
- **Pruebas de Integración**: Diariamente
- **Pruebas Funcionales**: Por sprint/iteración
- **Pruebas de Regresión**: Antes de cada release
- **Pruebas de Aceptación**: Al finalizar desarrollo de funcionalidad mayor

### 4.2 Registro de Defectos

#### 4.2.1 Proceso de Gestión de Defectos

**Identificación y Registro:**
1. Al encontrar un defecto, el ejecutor debe verificar que no esté ya reportado
2. Crear un nuevo ticket en Jira con toda la información requerida
3. Asignar severidad y prioridad inicial
4. Adjuntar evidencias (screenshots, logs, videos)
5. Notificar al Líder de Pruebas

**Clasificación de Severidad:**

| Severidad | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Crítica** | Impide el funcionamiento del sistema o funcionalidad core | Sistema no permite realizar compras |
| **Alta** | Funcionalidad importante no opera correctamente | Carrito no actualiza cantidades |
| **Media** | Problema que afecta usabilidad pero tiene workaround | Búsqueda lenta pero funcional |
| **Baja** | Defecto menor cosmético o de documentación | Alineación de texto incorrecta |

**Clasificación de Prioridad:**

| Prioridad | Descripción | Tiempo de Resolución |
|-----------|-------------|---------------------|
| **P1** | Debe corregirse inmediatamente | 24 horas |
| **P2** | Debe corregirse antes del release | 3 días |
| **P3** | Puede corregirse en siguiente versión | 1 semana |
| **P4** | Backlog - evaluar inclusión futura | Indefinido |

#### 4.2.2 Plantilla de Reporte de Defectos

**Información Requerida:**

- **ID del Defecto**: Código único generado por Jira
- **Título**: Descripción breve y clara del problema
- **Descripción Detallada**: Explicación completa del defecto
- **Pasos para Reproducir**: Secuencia exacta para reproducir el error
- **Resultado Esperado**: Comportamiento correcto según especificación
- **Resultado Actual**: Comportamiento observado (incorrecto)
- **Evidencias**: Screenshots, videos, logs
- **Ambiente**: Navegador, SO, versión del build
- **Severidad**: Crítica / Alta / Media / Baja
- **Prioridad**: P1 / P2 / P3 / P4
- **Caso de Prueba Relacionado**: CP-XXX-###
- **Módulo Afectado**: Registro / Carrito / Compra / etc.
- **Reportado Por**: Nombre del ejecutor
- **Fecha de Reporte**: DD/MM/YYYY

**Ejemplo de Reporte:**

```
ID: BUG-001
Título: Error al agregar producto al carrito desde detalle
Descripción: Al intentar agregar un producto al carrito desde la página de 
detalle, el sistema muestra error 500 y el producto no se añade.

Pasos para Reproducir:
1. Navegar al catálogo de productos
2. Seleccionar cualquier producto
3. En la página de detalle, hacer clic en "Agregar al Carrito"
4. Observar el error

Resultado Esperado: Producto se añade al carrito y se muestra mensaje de 
confirmación.

Resultado Actual: Error 500 "Internal Server Error" y producto no se añade.

Ambiente: Chrome 119, Windows 11, Build v1.2.3
Severidad: Crítica
Prioridad: P1
```

#### 4.2.3 Flujo de Estados de Defectos

**Estados del Ciclo de Vida:**

1. **Nuevo**: Defecto recién reportado, pendiente de triaje
2. **Abierto**: Defecto confirmado y asignado a desarrollador
3. **En Progreso**: Desarrollador trabajando en la corrección
4. **Resuelto**: Corrección implementada, pendiente de verificación
5. **Reabierto**: Defecto persiste después de la corrección
6. **Cerrado**: Defecto corregido y verificado exitosamente
7. **Rechazado**: No es un defecto o no se reproducirá

**Transiciones:**
- Nuevo → Abierto (después de triaje)
- Abierto → En Progreso (asignado a desarrollador)
- En Progreso → Resuelto (corrección completada)
- Resuelto → Cerrado (verificación exitosa)
- Resuelto → Reabierto (corrección no efectiva)
- Reabierto → En Progreso (nueva corrección)
- Cualquier estado → Rechazado (si aplica)

#### 4.2.4 Métricas de Defectos

**Indicadores a Monitorear:**
- Total de defectos reportados
- Defectos por severidad
- Defectos por módulo
- Tiempo promedio de resolución
- Tasa de reapertura de defectos
- Defectos abiertos vs cerrados
- Densidad de defectos (defectos por KLOC o PF)

## 5. Riesgos y Contingencias

### 5.1 Riesgos Identificados

Los siguientes riesgos pueden afectar la ejecución exitosa del plan de pruebas:

#### 5.1.1 Riesgos de Recursos

**R-RECUR-001: Disponibilidad limitada del equipo de pruebas**
- **Probabilidad**: Media (40%)
- **Impacto**: Alto
- **Descripción**: Miembros del equipo pueden no estar disponibles por enfermedad, vacaciones o conflictos de asignación
- **Indicadores**: Ausencias no planificadas, sobrecarga de trabajo

**R-RECUR-002: Falta de experiencia en herramientas**
- **Probabilidad**: Media (35%)
- **Impacto**: Medio
- **Descripción**: El equipo puede no estar familiarizado con algunas herramientas de pruebas automatizadas
- **Indicadores**: Retrasos en configuración, consultas frecuentes

**R-RECUR-003: Ambiente de pruebas no disponible**
- **Probabilidad**: Baja (20%)
- **Impacto**: Crítico
- **Descripción**: Problemas técnicos pueden hacer el ambiente inestable o inaccesible
- **Indicadores**: Caídas frecuentes, lentitud extrema

#### 5.1.2 Riesgos de Cronograma

**R-CRONO-001: Retrasos en entrega de builds**
- **Probabilidad**: Alta (60%)
- **Impacto**: Alto
- **Descripción**: Desarrollo puede no entregar a tiempo versiones estables para probar
- **Indicadores**: Retrasos en commits, builds inestables

**R-CRONO-002: Tiempo insuficiente para pruebas**
- **Probabilidad**: Media (45%)
- **Impacto**: Alto
- **Descripción**: Presión por fechas puede reducir el tiempo asignado a pruebas
- **Indicadores**: Solicitudes de adelantar fechas de entrega

**R-CRONO-003: Re-trabajo extenso por defectos críticos**
- **Probabilidad**: Media (40%)
- **Impacto**: Alto
- **Descripción**: Defectos graves pueden requerir correcciones que consuman tiempo significativo
- **Indicadores**: Alta tasa de defectos críticos

#### 5.1.3 Riesgos Técnicos

**R-TEC-001: Integración compleja con pasarela de pagos**
- **Probabilidad**: Media (50%)
- **Impacto**: Alto
- **Descripción**: Pruebas de integración con servicios externos pueden presentar dificultades
- **Indicadores**: Fallos en pruebas de pago, timeouts

**R-TEC-002: Problemas de rendimiento no detectados temprano**
- **Probabilidad**: Baja (25%)
- **Impacto**: Crítico
- **Descripción**: Problemas de performance pueden manifestarse solo en etapas tardías
- **Indicadores**: Quejas de lentitud, tiempos de respuesta elevados

**R-TEC-003: Vulnerabilidades de seguridad complejas**
- **Probabilidad**: Media (35%)
- **Impacto**: Crítico
- **Descripción**: Pueden descubrirse vulnerabilidades que requieren refactoring significativo
- **Indicadores**: Resultados negativos en escaneos de seguridad

#### 5.1.4 Riesgos de Alcance

**R-ALCAN-001: Cambios en requisitos durante pruebas**
- **Probabilidad**: Alta (55%)
- **Impacto**: Alto
- **Descripción**: Modificaciones en requisitos pueden invalidar casos de prueba ya ejecutados
- **Indicadores**: Solicitudes de cambio frecuentes

**R-ALCAN-002: Requisitos ambiguos**
- **Probabilidad**: Media (40%)
- **Impacto**: Medio
- **Descripción**: Falta de claridad en requisitos dificulta crear casos de prueba precisos
- **Indicadores**: Múltiples interpretaciones, clarificaciones constantes

### 5.2 Estrategias de Mitigación

#### 5.2.1 Mitigación de Riesgos de Recursos

**Para R-RECUR-001 (Disponibilidad limitada):**
- **Prevención**: 
  - Entrenar a múltiples personas en cada rol
  - Documentar procedimientos detalladamente
  - Mantener matriz de conocimiento del equipo
- **Contingencia**:
  - Redistribuir casos de prueba entre el equipo disponible
  - Contratar recurso temporal si es necesario
  - Priorizar casos críticos

**Para R-RECUR-002 (Falta de experiencia):**
- **Prevención**:
  - Capacitación anticipada en herramientas
  - Sesiones de pair testing
  - Documentación de procesos
- **Contingencia**:
  - Soporte de expertos externos
  - Simplificar enfoque de pruebas inicialmente
  - Extensión de cronograma de aprendizaje

**Para R-RECUR-003 (Ambiente no disponible):**
- **Prevención**:
  - Configuración redundante de ambientes
  - Monitoreo proactivo de infraestructura
  - Plan de mantenimiento preventivo
- **Contingencia**:
  - Ambiente de respaldo disponible
  - Priorizar pruebas que no requieren ambiente específico
  - Trabajar en actualización de documentación mientras se resuelve

#### 5.2.2 Mitigación de Riesgos de Cronograma

**Para R-CRONO-001 (Retrasos en builds):**
- **Prevención**:
  - Integración continua automatizada
  - Daily builds programados
  - Criterios claros de "definition of done"
- **Contingencia**:
  - Pruebas parciales con builds incompletos
  - Enfoque en áreas completadas
  - Comunicación inmediata de impactos

**Para R-CRONO-002 (Tiempo insuficiente):**
- **Prevención**:
  - Buffer de tiempo en planificación (20%)
  - Priorización temprana de casos críticos
  - Automatización de pruebas repetitivas
- **Contingencia**:
  - Ejecución solo de casos críticos y de alta prioridad
  - Pruebas de regresión automatizadas
  - Negociación de extensión de fechas

**Para R-CRONO-003 (Re-trabajo extenso):**
- **Prevención**:
  - Pruebas tempranas y continuas
  - Revisiones de código frecuentes
  - Testing unitario completo por desarrolladores
- **Contingencia**:
  - Sesiones de triaje diarias para priorizar defectos
  - Equipo dedicado a correcciones urgentes
  - Postponer funcionalidades no críticas

#### 5.2.3 Mitigación de Riesgos Técnicos

**Para R-TEC-001 (Integración con pasarelas):**
- **Prevención**:
  - Pruebas de integración tempranas
  - Sandbox de pruebas de pasarela configurado
  - Mocks para simular respuestas
- **Contingencia**:
  - Ambiente de pruebas de la pasarela dedicado
  - Consultoría con proveedor de pasarela
  - Implementación de fallback manual temporal

**Para R-TEC-002 (Problemas de rendimiento):**
- **Prevención**:
  - Pruebas de rendimiento desde fases tempranas
  - Monitoreo continuo de métricas de performance
  - Revisión de código orientada a optimización
- **Contingencia**:
  - Optimización intensiva de consultas críticas
  - Implementación de caché agresivo
  - Escalado horizontal de infraestructura

**Para R-TEC-003 (Vulnerabilidades de seguridad):**
- **Prevención**:
  - Escaneos de seguridad automatizados frecuentes
  - Revisiones de código con enfoque en seguridad
  - Formación del equipo en desarrollo seguro
- **Contingencia**:
  - Auditoría de seguridad externa urgente
  - Patches de seguridad prioritarios
  - Comunicación transparente con stakeholders

#### 5.2.4 Mitigación de Riesgos de Alcance

**Para R-ALCAN-001 (Cambios en requisitos):**
- **Prevención**:
  - Proceso formal de gestión de cambios
  - Análisis de impacto obligatorio
  - Sign-off de requisitos antes de iniciar pruebas
- **Contingencia**:
  - Re-priorización de casos de prueba
  - Análisis de impacto en casos existentes
  - Comunicación de impacto en cronograma

**Para R-ALCAN-002 (Requisitos ambiguos):**
- **Prevención**:
  - Sesiones de clarificación con cliente
  - Prototipos para validación visual
  - Documentación detallada de requisitos
- **Contingencia**:
  - Sesiones de aclaración urgentes
  - Decisiones documentadas del equipo
  - Validación incremental con cliente

### 5.3 Plan de Contingencia General

**En caso de crisis mayor en el proyecto de pruebas:**

1. **Activación**: Líder de Pruebas convoca reunión de crisis
2. **Evaluación**: Determinar severidad y alcance del problema
3. **Decisión**: Elegir entre:
   - Continuar con ajustes
   - Pausar temporalmente
   - Replantear estrategia completa
4. **Comunicación**: Informar a stakeholders sobre situación y plan
5. **Ejecución**: Implementar acciones correctivas
6. **Monitoreo**: Seguimiento cercano de la situación
7. **Normalización**: Retorno gradual a operación normal

**Contactos de Escalación:**
- Líder de Pruebas: Jefferson Mejía Torres
- Líder de Proyecto: [Nombre del PM]
- Stakeholder Clave: [Nombre del Cliente]

## 6. Entregables

### 6.1 Informes de Pruebas

#### 6.1.1 Informe Diario de Progreso

**Frecuencia**: Diario durante ejecución activa  
**Audiencia**: Equipo de pruebas y desarrollo  
**Contenido**:
- Casos de prueba ejecutados (cantidad y porcentaje)
- Casos pasados vs fallados
- Nuevos defectos reportados
- Defectos cerrados
- Bloqueos y problemas
- Plan para el siguiente día

#### 6.1.2 Informe Semanal de Estado

**Frecuencia**: Semanal  
**Audiencia**: Stakeholders, gerencia de proyecto  
**Contenido**:
- Resumen ejecutivo de progreso
- Métricas de ejecución (gráficos y tablas)
- Estado de defectos (abiertos, cerrados, tendencias)
- Riesgos y problemas actuales
- Cumplimiento de cronograma
- Proyecciones y recomendaciones

#### 6.1.3 Informe Final de Pruebas

**Frecuencia**: Al finalizar el ciclo completo de pruebas  
**Audiencia**: Todos los stakeholders  
**Contenido**:
- Resumen ejecutivo
- Objetivos vs resultados obtenidos
- Cobertura de pruebas alcanzada
- Estadísticas completas de ejecución
- Análisis de defectos encontrados y corregidos
- Evaluación de calidad del producto
- Lecciones aprendidas
- Recomendaciones para producción
- Criterios de aceptación cumplidos
- Aprobación para lanzamiento (Go/No-Go)

#### 6.1.4 Métricas de Pruebas

**Métricas a Reportar:**

| Métrica | Descripción | Fórmula |
|---------|-------------|---------|
| **Cobertura de Pruebas** | % de requisitos cubiertos por casos de prueba | (Requisitos cubiertos / Total requisitos) × 100 |
| **Progreso de Ejecución** | % de casos de prueba ejecutados | (Casos ejecutados / Total casos) × 100 |
| **Tasa de Éxito** | % de casos que pasaron | (Casos pasados / Casos ejecutados) × 100 |
| **Densidad de Defectos** | Defectos por punto de función | Total defectos / Puntos de función |
| **Efectividad de Pruebas** | % de defectos encontrados vs producción | Defectos encontrados en pruebas / Total defectos |
| **Tiempo Promedio de Resolución** | Días promedio para cerrar un defecto | Σ(Días de resolución) / Total defectos |
| **Defectos Pendientes** | Cantidad de defectos abiertos | Total defectos - Defectos cerrados |

**Gráficos a Incluir:**
- Burndown de casos de prueba
- Distribución de defectos por severidad
- Tendencia de defectos abiertos vs cerrados
- Defectos por módulo
- Velocidad de ejecución de pruebas
- Comparativa de estimado vs real

### 6.2 Documentación Actualizada

#### 6.2.1 Documentos a Mantener Actualizados

**Plan de Pruebas (este documento)**
- Actualizar después de cada iteración importante
- Reflejar cambios en cronograma, recursos o alcance
- Versión controlada con historial de cambios

**Casos de Prueba**
- Actualizar según cambios en requisitos
- Agregar casos para nuevas funcionalidades
- Marcar como obsoletos casos que ya no aplican
- Incluir lecciones aprendidas en ejecuciones

**Matriz de Trazabilidad**
- Mantener mapping actualizado entre requisitos y casos de prueba
- Identificar gaps en cobertura
- Documentar requisitos sin cobertura

**Registro de Defectos**
- Actualizar estado de defectos en tiempo real
- Incluir análisis de causa raíz cuando esté disponible
- Documentar workarounds y soluciones

**Informe de Lecciones Aprendidas**
- Documentar mejores prácticas identificadas
- Registrar problemas recurrentes y sus soluciones
- Recomendaciones para futuros proyectos

#### 6.2.2 Repositorio de Documentación

**Ubicación**: Carpeta compartida del proyecto `/Documentos/Fase_4_Pruebas/`

**Estructura**:
```
Fase_4_Pruebas/
├── 01_Plan_de_Pruebas.md
├── 02_Casos_de_Prueba_Detallados.md
├── 03_Informe_Ejecucion_Pruebas.md (se creará)
├── Evidencias/
│   ├── Screenshots/
│   ├── Videos/
│   └── Logs/
├── Reportes/
│   ├── Diarios/
│   ├── Semanales/
│   └── Final/
└── Defectos/
    └── Reporte_Defectos_Consolidado.xlsx
```

**Control de Versiones**:
- Todos los documentos en control de versiones (Git)
- Convención de nombrado con fecha: `Documento_YYYYMMDD.md`
- Backup diario de documentos críticos

## 7. Aprobación

### 7.1 Proceso de Aprobación del Cliente

#### 7.1.1 Aprobación del Plan de Pruebas

**Requiere aprobación de**:
- Cliente / Product Owner
- Líder de Proyecto
- Líder de Pruebas
- Líder de Desarrollo

**Proceso**:
1. Revisión del plan completo por stakeholders
2. Sesión de Q&A para clarificaciones
3. Ajustes según feedback recibido
4. Firma digital o física del documento
5. Distribución del plan aprobado

**Fecha límite de aprobación**: 15 de noviembre de 2025

#### 7.1.2 Aprobación de Inicio de Pruebas

**Checklist de Aprobación**:
- [ ] Build estable disponible en ambiente de pruebas
- [ ] Casos de prueba revisados y aprobados
- [ ] Ambiente de pruebas configurado y validado
- [ ] Equipo de pruebas capacitado y listo
- [ ] Herramientas de pruebas configuradas
- [ ] Datos de prueba cargados

**Aprobadores**:
- Líder de Pruebas: _________________ Fecha: _______
- Líder de Proyecto: ________________ Fecha: _______

#### 7.1.3 Aprobación de Finalización de Pruebas

**Criterios para Aprobación Final**:
- ✅ Todos los criterios de salida cumplidos
- ✅ Informe final de pruebas presentado
- ✅ Demostración exitosa al cliente
- ✅ Plan de lanzamiento revisado
- ✅ Capacitación de usuarios completada (si aplica)

**Decisión Go/No-Go para Producción**:

**GO** (Aprobado para producción) si:
- Todos los casos críticos pasaron
- 0 defectos críticos abiertos
- Menos de 2 defectos de alta prioridad abiertos
- Cliente satisfecho con funcionalidad
- Plan de soporte post-lanzamiento establecido

**NO-GO** (No aprobado) si:
- Existen defectos críticos abiertos
- Más de 5 defectos de alta prioridad abiertos
- Funcionalidad core no opera correctamente
- Cliente no da aprobación
- Riesgos inaceptables identificados

**Aprobadores Finales**:
- Cliente / Product Owner: _________________ Fecha: _______
- Líder de Proyecto: _____________________ Fecha: _______
- Líder de Pruebas: ______________________ Fecha: _______
- Líder Técnico: _________________________ Fecha: _______

### 7.2 Entrega Final

**Paquete de Entrega incluye**:
1. Informe Final de Pruebas
2. Registro completo de defectos (abiertos y cerrados)
3. Evidencias de pruebas ejecutadas
4. Métricas finales de calidad
5. Recomendaciones post-lanzamiento
6. Plan de monitoreo en producción
7. Casos de prueba de smoke testing para producción

**Fecha de Entrega Proyectada**: 18 de diciembre de 2025

## 8. Historial de Revisiones

| Versión | Descripción del Cambio | Autor | Fecha |
|---------|----------------------|-------|--------|
| 1.0 | Creación inicial del Plan de Pruebas para Drakon Store Web | Jefferson Mejía Torres | 12/11/2025 |
| | | | |
| | | | |
| | | | |

---

**Documento aprobado por:**

**Cliente / Product Owner:**  
Nombre: _______________________  
Firma: ________________________  
Fecha: ________________________

**Líder de Proyecto:**  
Nombre: _______________________  
Firma: ________________________  
Fecha: ________________________

**Líder de Pruebas:**  
Nombre: Jefferson Mejía Torres  
Firma: ________________________  
Fecha: ________________________

---

**Próximo documento**: `02_Casos_de_Prueba_Detallados.md` - Fichas técnicas completas de todos los casos de prueba identificados.

**Nota**: Este plan de pruebas es un documento vivo que se actualizará según evolucione el proyecto. Cualquier cambio significativo requerirá una nueva aprobación de los stakeholders correspondientes.