# Análisis y Gestión de Riesgos del Software

**Proyecto:** Drakon Store Web  
**Versión:** 1.0  
**Fecha de creación:** 10 de octubre de 2025  
**Autor:** Equipo Drakon Store  
**Documento:** 04_Analisis_Gestion_Riesgos.md

## 1. Introducción

### 1.1 Alcance y Propósito del Documento

Este documento presenta el análisis exhaustivo y la gestión de riesgos para el proyecto Drakon Store Web. Su propósito es identificar, evaluar y establecer estrategias de mitigación para los riesgos potenciales que pueden afectar el desarrollo, implementación y éxito del sistema de comercio electrónico.

El análisis de riesgos es fundamental para el proyecto ya que permite al equipo de desarrollo comprender y gestionar la incertidumbre asociada con el desarrollo de un sistema e-commerce completo, desde la elicitación de requisitos hasta la entrega final del producto.

### 1.2 Visión General de los Riesgos Principales

Los riesgos identificados para el proyecto Drakon Store Web se clasifican en las siguientes categorías principales:

- **Riesgos del Proyecto:** Factores que pueden afectar el cronograma, presupuesto y recursos
- **Riesgos Técnicos:** Aspectos tecnológicos que pueden comprometer la calidad y viabilidad técnica
- **Riesgos del Negocio:** Elementos que pueden impactar la viabilidad comercial del producto

### 1.3 Responsabilidades

#### Gestión
- Supervisar la implementación del plan de gestión de riesgos
- Asignar recursos para la mitigación de riesgos críticos
- Tomar decisiones estratégicas basadas en el análisis de riesgos
- Revisar y aprobar planes de contingencia

#### Personal Técnico
- Identificar riesgos técnicos emergentes durante el desarrollo
- Implementar medidas de reducción de riesgos
- Monitorear indicadores de riesgo específicos
- Reportar cambios en el estado de los riesgos identificados

## 2. Metodología de Análisis de Riesgos

### 2.1 Proceso de Gestión de Riesgos

El proceso seguido para la gestión de riesgos del proyecto incluye los siguientes pasos:

1. **Identificación del Riesgo:** Reconocimiento de problemas potenciales que pueden afectar el proyecto
2. **Análisis del Riesgo:** Determinación de la probabilidad de ocurrencia y el impacto potencial
3. **Priorización de Riesgos:** Clasificación basada en probabilidad e impacto
4. **Planificación de Respuesta:** Desarrollo de estrategias de mitigación y planes de contingencia

### 2.2 Estrategia Adoptada

Para el proyecto Drakon Store se adopta una **estrategia proactiva** que incluye:

- Identificación sistemática de riesgos potenciales
- Evaluación previa y continua de riesgos
- Establecimiento de planes de contingencia
- Monitoreo continuo de factores de riesgo

### 2.3 Escala de Evaluación

#### Probabilidad de Ocurrencia
- **Alta:** 70% - 90%
- **Media:** 30% - 69%
- **Baja:** 5% - 29%
- **Muy Baja:** < 5%

#### Escala de Impacto
- **1 - Catastrófico:** Puede causar el fracaso completo del proyecto
- **2 - Crítico:** Impacto severo en cronograma, costo o calidad
- **3 - Marginal:** Impacto moderado que requiere ajustes menores
- **4 - Despreciable:** Impacto mínimo en el proyecto

## 3. Identificación de Riesgos por Categorías

### 3.1 Riesgos Relacionados con el Tamaño del Producto (TP)

| ID | Descripción del Riesgo | Factores de Riesgo |
|----|------------------------|-------------------|
| TP-01 | Subestimación del tamaño real del sistema | Complejidad del e-commerce subestimada |
| TP-02 | Crecimiento no controlado del alcance | Requisitos adicionales no previstos |
| TP-03 | Limitaciones en la base de datos de productos | Volumen de datos mayor al estimado |
| TP-04 | Integración compleja con sistemas de pago | Múltiples pasarelas de pago requeridas |

### 3.2 Riesgos de Impacto en la Organización (IO)

| ID | Descripción del Riesgo | Factores de Riesgo |
|----|------------------------|-------------------|
| IO-01 | Cambios en los objetivos del negocio | Evolución de la estrategia empresarial |
| IO-02 | Presión por fechas de entrega irreales | Expectativas de mercado y competencia |
| IO-03 | Recursos financieros insuficientes | Limitaciones presupuestarias |
| IO-04 | Falta de apoyo de la alta dirección | Cambios en prioridades organizacionales |

### 3.3 Riesgos del Tipo de Cliente (TC)

| ID | Descripción del Riesgo | Factores de Riesgo |
|----|------------------------|-------------------|
| TC-01 | Requisitos ambiguos o cambiantes | Falta de claridad en especificaciones |
| TC-02 | Limitada disponibilidad del cliente | Dificultades en comunicación y validación |
| TC-03 | Expectativas no realistas del cliente | Desalineación entre expectativas y viabilidad |
| TC-04 | Falta de experiencia del cliente en e-commerce | Curva de aprendizaje prolongada |

### 3.4 Riesgos del Proceso de Producción (PP)

| ID | Descripción del Riesgo | Factores de Riesgo |
|----|------------------------|-------------------|
| PP-01 | Metodología de desarrollo inadecuada | Falta de experiencia en metodologías ágiles |
| PP-02 | Deficiencias en el control de calidad | Procedimientos de testing insuficientes |
| PP-03 | Gestión inadecuada de la configuración | Control de versiones y cambios deficiente |
| PP-04 | Documentación insuficiente | Falta de estándares de documentación |

### 3.5 Riesgos del Entorno de Desarrollo (ED)

| ID | Descripción del Riesgo | Factores de Riesgo |
|----|------------------------|-------------------|
| ED-01 | Herramientas de desarrollo inadecuadas | Limitaciones en herramientas disponibles |
| ED-02 | Falta de integración entre herramientas | Incompatibilidades tecnológicas |
| ED-03 | Infraestructura de desarrollo insuficiente | Limitaciones de hardware y red |
| ED-04 | Falta de capacitación en herramientas | Curva de aprendizaje del equipo |

### 3.6 Riesgos Tecnológicos (T)

| ID | Descripción del Riesgo | Factores de Riesgo |
|----|------------------------|-------------------|
| T-01 | Tecnologías nuevas o no probadas | Implementación de frameworks recientes |
| T-02 | Problemas de rendimiento del sistema | Optimización insuficiente para e-commerce |
| T-03 | Vulnerabilidades de seguridad | Amenazas de seguridad en transacciones |
| T-04 | Incompatibilidad entre componentes | Integración compleja de sistemas |
| T-05 | Escalabilidad limitada | Crecimiento futuro del sistema |

### 3.7 Riesgos de Experiencia Técnica (ET)

| ID | Descripción del Riesgo | Factores de Riesgo |
|----|------------------------|-------------------|
| ET-01 | Falta de experiencia en e-commerce | Equipo sin experiencia previa en tiendas online |
| ET-02 | Rotación del personal clave | Pérdida de conocimiento crítico |
| ET-03 | Capacitación insuficiente del equipo | Brecha de conocimientos técnicos |
| ET-04 | Sobrecarga de trabajo del equipo | Recursos humanos limitados |

## 4. Tabla de Riesgos del Proyecto

### 4.1 Proyección y Priorización de Riesgos

| Riesgo | Categoría | Probabilidad | Impacto | ER (P×C) | Prioridad |
|--------|-----------|-------------|---------|----------|-----------|
| Vulnerabilidades de seguridad en transacciones | T | 60% | 1 | 0.60 | Alta |
| Falta de experiencia en e-commerce del equipo | ET | 70% | 2 | 1.40 | Alta |
| Requisitos ambiguos o cambiantes del cliente | TC | 50% | 2 | 1.00 | Alta |
| Problemas de rendimiento del sistema | T | 40% | 2 | 0.80 | Media |
| Tecnologías nuevas o no probadas | T | 45% | 2 | 0.90 | Media |
| Presión por fechas de entrega irreales | IO | 55% | 2 | 1.10 | Media |
| Subestimación del tamaño real del sistema | TP | 35% | 2 | 0.70 | Media |
| Rotación del personal clave | ET | 25% | 2 | 0.50 | Media |
| Metodología de desarrollo inadecuada | PP | 30% | 3 | 0.90 | Baja |
| Herramientas de desarrollo inadecuadas | ED | 20% | 3 | 0.60 | Baja |
| Recursos financieros insuficientes | IO | 15% | 2 | 0.30 | Baja |
| Incompatibilidad entre componentes | T | 25% | 3 | 0.75 | Baja |

**Línea de Corte:** Riesgos con ER ≥ 0.80 requieren atención prioritaria y planes de contingencia detallados.

### 4.2 Evaluación del Impacto del Riesgo

La exposición al riesgo (ER) se calcula mediante la fórmula:

**ER = P × C**

Donde:
- P = Probabilidad de ocurrencia (expresada como decimal)
- C = Costo relativo del impacto (1 = Catastrófico, 2 = Crítico, 3 = Marginal, 4 = Despreciable)

Los riesgos con mayor exposición (ER > 0.80) requieren planes de mitigación inmediatos y recursos dedicados.

## 5. Plan RSGR (Reducción, Supervisión y Gestión del Riesgo)

### 5.1 Riesgo T-03: Vulnerabilidades de Seguridad

#### a. Reducción
**Estrategia General:** Implementar múltiples capas de seguridad y seguir mejores prácticas de desarrollo seguro.

**Pasos Específicos:**
- Implementar HTTPS en todas las comunicaciones
- Usar tokens de autenticación seguros (JWT)
- Validación estricta de datos de entrada
- Encriptación de datos sensibles
- Auditorías de seguridad regulares
- Implementar protección CSRF y XSS

#### b. Supervisión
**Factores a Supervisar:**
- Intentos de acceso no autorizado
- Errores de validación de datos
- Logs de seguridad anómalos
- Actualizaciones de seguridad pendientes

**Enfoque de Supervisión:**
- Monitoreo continuo de logs de seguridad
- Revisiones de código enfocadas en seguridad
- Pruebas de penetración periódicas

#### c. Gestión
**Plan de Contingencia:**
- Protocolo de respuesta a incidentes de seguridad
- Backup y recuperación rápida de datos
- Comunicación inmediata con stakeholders
- Actualizaciones de seguridad de emergencia

### 5.2 Riesgo ET-01: Falta de Experiencia en E-commerce

#### a. Reducción
**Estrategia General:** Capacitación intensiva y mentoría especializada en desarrollo de comercio electrónico.

**Pasos Específicos:**
- Capacitación en frameworks de e-commerce
- Estudio de casos de éxito similares
- Consultoría externa especializada
- Implementación de prototipo de aprendizaje
- Documentación detallada de lecciones aprendidas

#### b. Supervisión
**Factores a Supervisar:**
- Calidad del código desarrollado
- Cumplimiento de mejores prácticas
- Tiempo de desarrollo vs. estimaciones
- Errores relacionados con funcionalidades e-commerce

**Enfoque de Supervisión:**
- Revisiones de código más frecuentes
- Sesiones de pair programming
- Evaluaciones de progreso semanales

#### c. Gestión
**Plan de Contingencia:**
- Contratación de consultor externo
- Reasignación de tareas críticas
- Extensión de cronograma si es necesario
- Capacitación adicional intensiva

### 5.3 Riesgo TC-01: Requisitos Ambiguos o Cambiantes

#### a. Reducción
**Estrategia General:** Establecer procesos claros de gestión de requisitos y comunicación efectiva con el cliente.

**Pasos Específicos:**
- Documentación detallada de requisitos
- Sesiones de validación frecuentes
- Prototipos tempranos para validación
- Proceso formal de gestión de cambios
- Acuerdos claros sobre el alcance del proyecto

#### b. Supervisión
**Factores a Supervisar:**
- Frecuencia de cambios en requisitos
- Claridad en la comunicación del cliente
- Tiempo dedicado a re-trabajo
- Satisfacción del cliente con prototipos

**Enfoque de Supervisión:**
- Reuniones semanales de seguimiento
- Documentación de todos los cambios
- Validación continua de entregables

#### c. Gestión
**Plan de Contingencia:**
- Proceso de escalación para cambios mayores
- Re-negociación de cronograma y alcance
- Documentación formal de impactos
- Sesiones de clarificación intensivas

### 5.4 Riesgo T-02: Problemas de Rendimiento del Sistema

#### a. Reducción
**Estrategia General:** Diseño orientado al rendimiento desde el inicio y testing continuo de performance.

**Pasos Específicos:**
- Arquitectura escalable desde el diseño
- Optimización de base de datos
- Implementación de caché estratégico
- Testing de carga durante desarrollo
- Monitoreo de métricas de rendimiento

#### b. Supervisión
**Factores a Supervisar:**
- Tiempos de respuesta del sistema
- Uso de recursos (CPU, memoria, red)
- Carga de usuarios concurrentes
- Métricas de base de datos

**Enfoque de Supervisión:**
- Herramientas de monitoreo automático
- Testing de performance regular
- Análisis de métricas de rendimiento

#### c. Gestión
**Plan de Contingencia:**
- Optimización de código crítico
- Escalado horizontal de infraestructura
- Implementación de CDN
- Refactoring de componentes críticos

## 6. Planificación Temporal de Revisión del Plan RSGR

### 6.1 Cronograma de Revisiones

| Tipo de Revisión | Frecuencia | Responsable | Actividades |
|------------------|------------|-------------|-------------|
| Revisión Semanal | Semanal | Líder de Proyecto | Actualización de estado de riesgos prioritarios |
| Revisión Mensual | Mensual | Equipo Completo | Evaluación completa de todos los riesgos |
| Revisión de Hitos | Por Hito | Stakeholders | Revisión estratégica y ajuste de planes |
| Revisión de Crisis | Según Necesidad | Equipo de Crisis | Activación de planes de contingencia |

### 6.2 Indicadores de Activación

- **Revisión Extraordinaria:** Cuando un riesgo de prioridad alta se materializa
- **Escalación:** Cuando múltiples riesgos se materializan simultáneamente
- **Re-evaluación:** Cuando cambian significativamente las condiciones del proyecto

## 7. Métricas y Supervisión Continua

### 7.1 Indicadores Clave de Riesgo (KRI)

| Indicador | Umbral de Alerta | Frecuencia de Medición |
|-----------|------------------|----------------------|
| Desviación en cronograma | > 15% | Semanal |
| Errores de seguridad detectados | > 2 por sprint | Continuo |
| Rotación del equipo | > 1 persona por mes | Mensual |
| Cambios en requisitos | > 10% por mes | Semanal |
| Problemas de rendimiento | Tiempo respuesta > 3s | Continuo |

### 7.2 Proceso de Escalación

1. **Nivel 1:** Líder técnico maneja riesgos operativos
2. **Nivel 2:** Líder de proyecto para riesgos que afectan cronograma
3. **Nivel 3:** Stakeholders para riesgos que afectan objetivos del proyecto
4. **Nivel 4:** Alta dirección para riesgos catastróficos

## 8. Resumen y Conclusiones

### 8.1 Riesgos Críticos Identificados

Los riesgos de mayor prioridad para el proyecto Drakon Store son:

1. **Vulnerabilidades de seguridad** - Requiere atención inmediata dado el manejo de transacciones
2. **Falta de experiencia en e-commerce** - Necesita capacitación intensiva del equipo
3. **Requisitos ambiguos** - Demanda comunicación estrecha con el cliente

### 8.2 Estrategia Global de Mitigación

La estrategia de gestión de riesgos del proyecto se basa en:

- **Prevención proactiva** a través de identificación temprana
- **Mitigación continua** mediante monitoreo constante
- **Respuesta rápida** con planes de contingencia preparados
- **Aprendizaje organizacional** para proyectos futuros

### 8.3 Beneficios Esperados

La implementación de este plan de gestión de riesgos proporcionará:

- Reducción de la probabilidad de fracaso del proyecto
- Mayor predictibilidad en cronograma y costos
- Mejora en la calidad del producto final
- Incremento en la satisfacción del cliente
- Fortalecimiento de las capacidades del equipo

### 8.4 Consideraciones Finales

El éxito en la gestión de riesgos depende de:

- Compromiso total del equipo con el proceso
- Comunicación abierta sobre problemas potenciales
- Flexibilidad para adaptar estrategias según evoluciona el proyecto
- Inversión adecuada en medidas preventivas

---

**Documento revisado por:** Equipo de Proyecto Drakon Store  
**Próxima revisión programada:** 17 de octubre de 2025  
**Versión del documento:** 1.0