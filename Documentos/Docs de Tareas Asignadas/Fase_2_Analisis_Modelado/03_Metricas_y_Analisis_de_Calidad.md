# Documento de Métricas y Análisis de Calidad del Software

**Proyecto:** Drakon Store  
**Versión:** 1.0  
**Fecha de creación:** 1 de octubre de 2025  
**Autor:** Jefferson Torres

## 1. Introducción

Este documento establece las métricas de software y metodologías de análisis de calidad aplicables al proyecto Drakon Store Web. Se basa en los principios de la Ingeniería de Software para la medición de procesos, proyectos y productos, con el objetivo de mejorar la calidad del sistema de e-commerce desarrollado.

## 2. Objetivos de las Métricas

Las métricas aplicadas al proyecto Drakon Store tienen como propósito:

- **Caracterizar**: Comprender mejor los procesos, productos y recursos del sistema
- **Evaluar**: Determinar el estado actual del desarrollo con respecto al diseño planificado
- **Predecir**: Facilitar la planificación de futuras fases del proyecto
- **Mejorar**: Incrementar la calidad del producto y el rendimiento del proceso de desarrollo

## 3. Tipos de Métricas Aplicadas

### 3.1 Métricas de Proceso

**Objetivo**: Evaluar la eficacia del proceso de desarrollo del sistema Drakon Store.

**Métricas definidas**:
- Tiempo promedio de desarrollo por funcionalidad
- Número de iteraciones necesarias por módulo
- Eficiencia en la corrección de errores detectados
- Tiempo de respuesta del equipo ante cambios de requisitos

### 3.2 Métricas de Proyecto

**Objetivo**: Monitorear el estado del proyecto, detectar riesgos y ajustar el flujo de trabajo.

**Indicadores clave**:
1. **Estado del proyecto**: Porcentaje de avance por fase
2. **Seguimiento de riesgos**: Identificación temprana de problemas críticos
3. **Áreas problemáticas**: Detección antes de que se vuelvan críticas
4. **Control de calidad**: Evaluación de la habilidad del equipo

### 3.3 Métricas de Producto

**Objetivo**: Medir la calidad del sistema Drakon Store desarrollado.

**Métricas aplicables**:
- Funcionalidad del sistema de registro y login
- Eficiencia del proceso de compra
- Usabilidad de la interfaz de usuario
- Confiabilidad del sistema de gestión de productos

## 4. Análisis de Fallos - Mejora Estadística del Proceso (MEPS)

### 4.1 Metodología de Análisis

Para identificar las principales causas de errores y defectos en el sistema Drakon Store, se implementa la metodología MEPS que incluye:

1. **Categorización** de errores por origen
2. **Registro** del costo de corrección
3. **Conteo** y ordenamiento descendente por frecuencia
4. **Cálculo** del costo global por categoría
5. **Análisis** para detectar categorías de alto costo

### 4.2 Definiciones

- **Error**: Falla descubierta por los desarrolladores antes de la entrega del sistema
- **Defecto**: Falla descubierta después de la entrega al usuario final

### 4.3 Diagrama de Espina - Análisis de Causas

El diagrama de espina (fishbone diagram) se utiliza para identificar las causas potenciales de problemas de calidad en el sistema Drakon Store.

#### Estructura del Diagrama:
- **Línea central**: Representa el problema principal de calidad
- **Líneas diagonales**: Indican causas potenciales del problema
- **Subcausas**: Cada línea diagonal puede tener causas específicas asociadas

#### Aplicación al Proyecto Drakon Store:

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama de Espina.png" alt="Diagrama de Espina - Análisis de Causas de Errores" width="800">
</p>
<p align="center">
  <em>Diagrama 11: Análisis de causas potenciales de errores en el sistema Drakon Store</em>
</p>

**Descripción:**
El diagrama de espina aplicado al proyecto Drakon Store identifica las principales categorías de causas que pueden generar errores y defectos en el sistema. Cada línea diagonal representa una categoría de causa potencial, facilitando el análisis sistemático para la mejora continua del proceso de desarrollo.

### 4.4 Categorías de Errores Identificadas

Basándose en el análisis del sistema Drakon Store, se han identificado las siguientes categorías potenciales:

| Origen de errores/defectos | Causa potencial | Porcentaje estimado |
|----------------------------|----------------|-------------------|
| Especificación/Requisitos | Lógica de negocio | TBD% |
| | Manejo de datos de usuario | TBD% |
| | Estándares de e-commerce | TBD% |
| Diseño | Especificaciones de interfaz | TBD% |
| Código | Interfaz de usuario | TBD% |
| | Validación de formularios | TBD% |
| | Integración con base de datos | TBD% |

*TBD: To Be Determined - Valores a determinar mediante recopilación de datos*

## 5. Métricas Orientadas a la Función

### 5.1 Análisis de Puntos de Función para Drakon Store

Los puntos de función se calculan basándose en la funcionalidad que el sistema realiza para el usuario final.

#### Parámetros de Medición:

| Parámetros de medición | Cuenta | Factor de ponderación | Total |
|----------------------|--------|---------------------|-------|
| | | Simple | Medio | Complejo | |
| **Entradas de usuario** | | 3 | 4 | 6 | |
| - Formulario de registro | 1 | | X | | 4 |
| - Formulario de login | 1 | X | | | 3 |
| - Datos de compra | 1 | | | X | 6 |
| **Salidas de usuario** | | 4 | 5 | 7 | |
| - Catálogo de productos | 1 | | X | | 5 |
| - Confirmación de compra | 1 | X | | | 4 |
| - Perfil de usuario | 1 | X | | | 4 |
| **Peticiones de usuario** | | 3 | 4 | 6 | |
| - Búsqueda de productos | 1 | | X | | 4 |
| - Agregar al carrito | 1 | X | | | 3 |
| **Archivos** | | 7 | 10 | 15 | |
| - Base de datos usuarios | 1 | | X | | 10 |
| - Base de datos productos | 1 | | X | | 10 |
| **Interfaces externas** | | 5 | 7 | 10 | |
| - Sistema de pagos | 1 | | | X | 10 |

**Cuenta Total**: 63 puntos de función (valor inicial)

### 5.2 Factores de Ajuste de Complejidad

*[Aquí se incluirán los 14 factores de ajuste evaluados en escala 0-5 específicos para Drakon Store]*

## 6. Métricas de Calidad del Software

### 6.1 Corrección
- **Métrica**: Defectos por función implementada
- **Objetivo**: Medir el grado en que el software cumple su función

### 6.2 Facilidad de Mantenimiento
- **Métrica**: Tiempo Medio de Cambio (TMC)
- **Incluye**: Análisis de petición, diseño de modificación, implementación y pruebas

### 6.3 Integridad
- **Métricas**:
  - Amenaza: Probabilidad de ataque en tiempo determinado
  - Seguridad: Probabilidad de repeler ataques
  - Fórmula: [(1-amenaza) x (1-seguridad)]

### 6.4 Facilidad de Uso
- **Métricas**:
  - Curva de aprendizaje del sistema
  - Tiempo para uso eficiente
  - Aumento de productividad
  - Satisfacción del usuario

### 6.5 Eficacia de Eliminación de Defectos (EED)

**Fórmula**: EED = E / (E + D)

Donde:
- E = Errores encontrados antes de la entrega
- D = Defectos encontrados después de la entrega

**Objetivo**: EED = 1 (valor ideal - sin defectos post-entrega)

## 7. Integración de Métricas en el Proceso

### 7.1 Línea Base de Métricas

**Pasos implementados**:

1. **Recopilación de datos**: 
   - Registro de tiempos de desarrollo por funcionalidad
   - Documentación de errores y defectos encontrados
   - Medición de satisfacción del usuario

2. **Cálculo de métricas**:
   - Métricas orientadas al tamaño (líneas de código)
   - Métricas orientadas a la función (puntos de función)
   - Métricas de calidad del producto

3. **Evaluación de métricas**:
   - Aplicación en estimación de futuras funcionalidades
   - Control de avance del proyecto
   - Identificación de áreas de mejora

## 8. Beneficios Esperados

La implementación de estas métricas en el proyecto Drakon Store proporcionará beneficios a nivel de:

### **Proceso**
- Mejora continua en la metodología de desarrollo
- Optimización de tiempos de entrega
- Reducción de errores recurrentes

### **Proyecto**
- Mejor control del avance y calidad
- Detección temprana de riesgos
- Ajuste oportuno de recursos

### **Producto**
- Mayor calidad del sistema final
- Mejor experiencia de usuario
- Reducción de defectos post-entrega

## 9. Conclusiones

La aplicación sistemática de métricas de software al proyecto Drakon Store permitirá:

1. Mantener un control efectivo sobre la calidad del desarrollo
2. Identificar y corregir problemas de manera proactiva
3. Optimizar los procesos de desarrollo para futuras iteraciones
4. Garantizar un producto final que cumpla con los estándares de calidad establecidos

## 10. Próximos Pasos

1. Implementación del diagrama de espina con datos específicos del proyecto
2. Recopilación de datos históricos para establecer línea base
3. Definición de umbrales de calidad para cada métrica
4. Establecimiento de reportes periódicos de métricas

---

**Revisado por:** Equipo Drakon Store  
**Fecha de última actualización:** 1 de octubre de 2025