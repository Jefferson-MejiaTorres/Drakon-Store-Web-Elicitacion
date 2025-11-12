# Informe de Ejecución de Pruebas - Drakon Store Web

**Proyecto:** Drakon Store Web  
**Versión:** 1.0  
**Fecha de informe:** [DD/MM/AAAA]  
**Período de ejecución:** [Fecha inicio] - [Fecha fin]  
**Responsable de QA:** [Nombre del responsable]  
**Estado:** En Progreso / Completado

---

## 1. Resumen Ejecutivo

### 1.1 Visión General

Este documento presenta los resultados de la ejecución de pruebas del sistema Drakon Store Web, documentando el progreso, métricas clave, defectos encontrados y recomendaciones para garantizar la calidad del producto antes de su lanzamiento.

### 1.2 Métricas Principales

| Métrica | Valor | Estado |
|---------|-------|--------|
| **Total de casos de prueba planificados** | 48 | - |
| **Casos ejecutados** | [XX] | ⚠️ [XX%] |
| **Casos pasados** | [XX] | ✅ [XX%] |
| **Casos fallidos** | [XX] | ❌ [XX%] |
| **Casos bloqueados** | [XX] | ⏸️ [XX%] |
| **Casos pendientes** | [XX] | ⏭️ [XX%] |
| **Defectos encontrados** | [XX] | - |
| **Defectos críticos abiertos** | [XX] | 🔴 |
| **Cobertura de requisitos** | [XX%] | - |

### 1.3 Indicador de Salud del Proyecto

```
Estado General: 🟢 VERDE / 🟡 AMARILLO / 🔴 ROJO

Criterio:
🟢 VERDE: > 95% casos pasados, 0 defectos críticos abiertos
🟡 AMARILLO: 85-95% casos pasados, 1-2 defectos críticos abiertos
🔴 ROJO: < 85% casos pasados, > 2 defectos críticos abiertos
```

**Estado Actual:** [Descripción del estado general]

---

## 2. Progreso de Ejecución por Módulo

### 2.1 Módulo de Registro de Usuario

| ID Caso | Descripción | Prioridad | Estado | Resultado | Defectos |
|---------|-------------|-----------|--------|-----------|----------|
| CP-REG-001 | Registro exitoso con datos válidos | 🔴 CRÍTICA | Ejecutado | ✅ PASS | - |
| CP-REG-002 | Registro fallido - Email duplicado | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-REG-003 | Validación de formato de email | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-REG-004 | Validación de fortaleza de contraseña | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-REG-005 | Validación de coincidencia de contraseñas | 🟡 ALTA | Ejecutado | [Estado] | [ID] |

**Resumen del Módulo:**
- Casos ejecutados: [X/5]
- Tasa de éxito: [XX%]
- Defectos encontrados: [X]
- **Comentarios:** [Observaciones generales del módulo]

---

### 2.2 Módulo de Inicio de Sesión

| ID Caso | Descripción | Prioridad | Estado | Resultado | Defectos |
|---------|-------------|-----------|--------|-----------|----------|
| CP-LOGIN-001 | Login exitoso con credenciales válidas | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-LOGIN-002 | Login fallido - Credenciales incorrectas | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-LOGIN-003 | Bloqueo temporal por intentos fallidos | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-LOGIN-004 | Sesión persistente con "Recordarme" | 🟢 MEDIA | Ejecutado | [Estado] | [ID] |

**Resumen del Módulo:**
- Casos ejecutados: [X/4]
- Tasa de éxito: [XX%]
- Defectos encontrados: [X]
- **Comentarios:** [Observaciones generales del módulo]

---

### 2.3 Módulo de Catálogo de Productos

| ID Caso | Descripción | Prioridad | Estado | Resultado | Defectos |
|---------|-------------|-----------|--------|-----------|----------|
| CP-CAT-001 | Visualización del catálogo completo | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-CAT-002 | Búsqueda de productos por nombre | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-CAT-003 | Filtrado por categorías | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-CAT-004 | Ordenamiento de productos | 🟢 MEDIA | Ejecutado | [Estado] | [ID] |

**Resumen del Módulo:**
- Casos ejecutados: [X/4]
- Tasa de éxito: [XX%]
- Defectos encontrados: [X]
- **Comentarios:** [Observaciones generales del módulo]

---

### 2.4 Módulo de Carrito de Compras

| ID Caso | Descripción | Prioridad | Estado | Resultado | Defectos |
|---------|-------------|-----------|--------|--------|----------|
| CP-CARR-001 | Agregar producto al carrito | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-CARR-002 | Modificar cantidad de producto | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-CARR-003 | Eliminar producto del carrito | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-CARR-004 | Persistencia del carrito | 🟢 MEDIA | Ejecutado | [Estado] | [ID] |
| CP-CARR-005 | Validación de stock antes de compra | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |

**Resumen del Módulo:**
- Casos ejecutados: [X/5]
- Tasa de éxito: [XX%]
- Defectos encontrados: [X]
- **Comentarios:** [Observaciones generales del módulo]

---

### 2.5 Módulo de Proceso de Compra

| ID Caso | Descripción | Prioridad | Estado | Resultado | Defectos |
|---------|-------------|-----------|--------|-----------|----------|
| CP-COMP-001 | Checkout exitoso completo | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-COMP-002 | Checkout fallido - Pago rechazado | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-COMP-003 | Aplicación de cupón de descuento | 🟢 MEDIA | Ejecutado | [Estado] | [ID] |
| CP-COMP-004 | Validación de campos obligatorios | 🟡 ALTA | Ejecutado | [Estado] | [ID] |

**Resumen del Módulo:**
- Casos ejecutados: [X/4]
- Tasa de éxito: [XX%]
- Defectos encontrados: [X]
- **Comentarios:** [Observaciones generales del módulo]

---

### 2.6 Módulo de Perfil de Usuario

| ID Caso | Descripción | Prioridad | Estado | Resultado | Defectos |
|---------|-------------|-----------|--------|-----------|----------|
| CP-PERF-001 | Visualización de perfil | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-PERF-002 | Actualización de datos personales | 🟡 ALTA | Ejecutado | [Estado] | [ID] |
| CP-PERF-003 | Cambio de contraseña | 🔴 CRÍTICA | Ejecutado | [Estado] | [ID] |
| CP-PERF-004 | Historial de pedidos | 🟡 ALTA | Ejecutado | [Estado] | [ID] |

**Resumen del Módulo:**
- Casos ejecutados: [X/4]
- Tasa de éxito: [XX%]
- Defectos encontrados: [X]
- **Comentarios:** [Observaciones generales del módulo]

---

### 2.7 Módulo de Favoritos

| ID Caso | Descripción | Prioridad | Estado | Resultado | Defectos |
|---------|-------------|-----------|--------|-----------|----------|
| CP-FAV-001 | Agregar producto a favoritos | 🟢 MEDIA | Ejecutado | [Estado] | [ID] |
| CP-FAV-002 | Visualización de lista de favoritos | 🟢 MEDIA | Ejecutado | [Estado] | [ID] |
| CP-FAV-003 | Eliminar producto de favoritos | 🟢 MEDIA | Ejecutado | [Estado] | [ID] |

**Resumen del Módulo:**
- Casos ejecutados: [X/3]
- Tasa de éxito: [XX%]
- Defectos encontrados: [X]
- **Comentarios:** [Observaciones generales del módulo]

---

## 3. Pruebas No Funcionales

### 3.1 Pruebas de Rendimiento

| ID Caso | Descripción | Objetivo | Resultado | Estado |
|---------|-------------|----------|-----------|--------|
| CP-REND-001 | Tiempo de carga página principal | < 3s | [Xs] | [✅/❌] |
| CP-REND-002 | Usuarios concurrentes | 100 usuarios | [X usuarios] | [✅/❌] |

**Comentarios:** [Observaciones sobre el rendimiento del sistema]

---

### 3.2 Pruebas de Seguridad

| ID Caso | Descripción | Estado | Resultado | Defectos |
|---------|-------------|--------|-----------|----------|
| CP-SEG-001 | Prevención de inyección SQL | Ejecutado | [Estado] | [ID] |
| CP-SEG-002 | Protección contra XSS | Ejecutado | [Estado] | [ID] |
| CP-SEG-003 | Validación de tokens | Ejecutado | [Estado] | [ID] |

**Comentarios:** [Observaciones sobre seguridad]

---

### 3.3 Pruebas de Usabilidad

| ID Caso | Descripción | Objetivo | Resultado | Estado |
|---------|-------------|----------|-----------|--------|
| CP-USAB-001 | Navegación intuitiva | 80% éxito | [XX%] | [✅/❌] |

**Participantes:** [Número de usuarios que participaron]  
**Comentarios:** [Feedback de usuarios]

---

### 3.4 Pruebas de Compatibilidad

| Navegador | Versión | Estado | Comentarios |
|-----------|---------|--------|-------------|
| Chrome | [Versión] | [✅/❌] | [Observaciones] |
| Firefox | [Versión] | [✅/❌] | [Observaciones] |
| Safari | [Versión] | [✅/❌] | [Observaciones] |
| Edge | [Versión] | [✅/❌] | [Observaciones] |

**Dispositivos Móviles:**

| Dispositivo | Resolución | Estado | Comentarios |
|-------------|------------|--------|-------------|
| iPhone 12 | 390x844 | [✅/❌] | [Observaciones] |
| Samsung Galaxy S21 | 360x800 | [✅/❌] | [Observaciones] |
| iPad | 768x1024 | [✅/❌] | [Observaciones] |

---

## 4. Resumen de Defectos

### 4.1 Defectos por Severidad

| Severidad | Abiertos | En Progreso | Resueltos | Cerrados | Total |
|-----------|----------|-------------|-----------|----------|-------|
| 🔴 Crítico | [X] | [X] | [X] | [X] | [X] |
| 🟠 Alto | [X] | [X] | [X] | [X] | [X] |
| 🟡 Medio | [X] | [X] | [X] | [X] | [X] |
| 🟢 Bajo | [X] | [X] | [X] | [X] | [X] |
| **TOTAL** | **[X]** | **[X]** | **[X]** | **[X]** | **[X]** |

### 4.2 Defectos por Módulo

| Módulo | Críticos | Altos | Medios | Bajos | Total |
|--------|----------|-------|--------|-------|-------|
| Registro | [X] | [X] | [X] | [X] | [X] |
| Login | [X] | [X] | [X] | [X] | [X] |
| Catálogo | [X] | [X] | [X] | [X] | [X] |
| Carrito | [X] | [X] | [X] | [X] | [X] |
| Compra | [X] | [X] | [X] | [X] | [X] |
| Perfil | [X] | [X] | [X] | [X] | [X] |
| Favoritos | [X] | [X] | [X] | [X] | [X] |
| No Funcionales | [X] | [X] | [X] | [X] | [X] |

### 4.3 Top 5 Defectos Críticos

| ID | Descripción | Módulo | Estado | Fecha Detección | Responsable |
|----|-------------|--------|--------|-----------------|-------------|
| DEF-001 | [Descripción del defecto] | [Módulo] | [Estado] | [DD/MM/AAAA] | [Nombre] |
| DEF-002 | [Descripción del defecto] | [Módulo] | [Estado] | [DD/MM/AAAA] | [Nombre] |
| DEF-003 | [Descripción del defecto] | [Módulo] | [Estado] | [DD/MM/AAAA] | [Nombre] |
| DEF-004 | [Descripción del defecto] | [Módulo] | [Estado] | [DD/MM/AAAA] | [Nombre] |
| DEF-005 | [Descripción del defecto] | [Módulo] | [Estado] | [DD/MM/AAAA] | [Nombre] |

**Nota:** Para detalles completos de todos los defectos, consultar el archivo `Defectos/Reporte_Defectos_Consolidado.xlsx`

---

## 5. Análisis de Tendencias

### 5.1 Tendencia de Ejecución de Pruebas

```
Gráfico de ejecución semanal (a completar con datos reales):

Semana 1: [X] casos ejecutados
Semana 2: [X] casos ejecutados
Semana 3: [X] casos ejecutados
Semana 4: [X] casos ejecutados
```

### 5.2 Tendencia de Defectos

```
Defectos detectados por semana:

Semana 1: [X] defectos encontrados, [X] resueltos
Semana 2: [X] defectos encontrados, [X] resueltos
Semana 3: [X] defectos encontrados, [X] resueltos
Semana 4: [X] defectos encontrados, [X] resueltos
```

### 5.3 Distribución de Esfuerzo

| Actividad | Horas Estimadas | Horas Reales | Variación |
|-----------|----------------|--------------|-----------|
| Preparación de casos de prueba | [X] | [X] | [±X%] |
| Ejecución de pruebas funcionales | [X] | [X] | [±X%] |
| Ejecución de pruebas no funcionales | [X] | [X] | [±X%] |
| Reporte de defectos | [X] | [X] | [±X%] |
| Re-testing | [X] | [X] | [±X%] |
| Documentación | [X] | [X] | [±X%] |
| **TOTAL** | **[X]** | **[X]** | **[±X%]** |

---

## 6. Cobertura de Requisitos

### 6.1 Requisitos Funcionales

| ID Requisito | Descripción | Casos de Prueba | Ejecutados | Estado |
|--------------|-------------|-----------------|------------|--------|
| RF-001 | Registro de usuario | 5 | [X] | [%] |
| RF-002 | Inicio de sesión | 4 | [X] | [%] |
| RF-003 | Catálogo de productos | 4 | [X] | [%] |
| RF-004 | Carrito de compras | 5 | [X] | [%] |
| RF-005 | Proceso de compra | 4 | [X] | [%] |
| RF-006 | Perfil de usuario | 4 | [X] | [%] |
| RF-007 | Favoritos | 3 | [X] | [%] |

**Cobertura de Requisitos Funcionales:** [XX%]

### 6.2 Requisitos No Funcionales

| ID Requisito | Descripción | Casos de Prueba | Ejecutados | Estado |
|--------------|-------------|-----------------|------------|--------|
| RNF-001 | Seguridad | 3 | [X] | [%] |
| RNF-002 | Rendimiento | 2 | [X] | [%] |
| RNF-003 | Usabilidad | 1 | [X] | [%] |
| RNF-004 | Compatibilidad | 2 | [X] | [%] |

**Cobertura de Requisitos No Funcionales:** [XX%]

---

## 7. Riesgos y Problemas

### 7.1 Riesgos Identificados

| ID | Riesgo | Probabilidad | Impacto | Mitigación | Estado |
|----|--------|--------------|---------|------------|--------|
| R-001 | [Descripción del riesgo] | Alta/Media/Baja | Alto/Medio/Bajo | [Estrategia de mitigación] | [Estado] |
| R-002 | [Descripción del riesgo] | Alta/Media/Baja | Alto/Medio/Bajo | [Estrategia de mitigación] | [Estado] |
| R-003 | [Descripción del riesgo] | Alta/Media/Baja | Alto/Medio/Bajo | [Estrategia de mitigación] | [Estado] |

### 7.2 Problemas Actuales

| ID | Problema | Impacto | Responsable | Fecha Límite | Estado |
|----|----------|---------|-------------|--------------|--------|
| P-001 | [Descripción del problema] | [Impacto] | [Nombre] | [DD/MM/AAAA] | [Estado] |
| P-002 | [Descripción del problema] | [Impacto] | [Nombre] | [DD/MM/AAAA] | [Estado] |

---

## 8. Evidencias de Prueba

### 8.1 Ubicación de Evidencias

Las evidencias de las pruebas ejecutadas se encuentran organizadas en las siguientes carpetas:

**Screenshots:**
- Ubicación: `Evidencias/Screenshots/`
- Contenido: Capturas de pantalla de casos de prueba ejecutados
- Nomenclatura: `[ID_CASO]_[FECHA]_[DESCRIPCION].png`

**Videos:**
- Ubicación: `Evidencias/Videos/`
- Contenido: Grabaciones de flujos completos y defectos
- Nomenclatura: `[ID_CASO]_[FECHA]_[DESCRIPCION].mp4`

**Logs:**
- Ubicación: `Evidencias/Logs/`
- Contenido: Logs del sistema, errores de consola, peticiones HTTP
- Nomenclatura: `[ID_CASO]_[FECHA]_[TIPO_LOG].txt`

### 8.2 Índice de Evidencias Destacadas

| ID Caso | Tipo | Descripción | Ubicación |
|---------|------|-------------|-----------|
| CP-REG-001 | Screenshot | Registro exitoso | `Screenshots/CP-REG-001_registro_exitoso.png` |
| CP-COMP-001 | Video | Flujo completo de compra | `Videos/CP-COMP-001_checkout_completo.mp4` |
| DEF-001 | Screenshot + Log | Error crítico en pago | `Screenshots/DEF-001_error_pago.png` |

---

## 9. Lecciones Aprendidas

### 9.1 Lo que Funcionó Bien

1. [Aspecto positivo del proceso de pruebas]
2. [Herramienta o técnica efectiva]
3. [Colaboración o comunicación exitosa]

### 9.2 Áreas de Mejora

1. [Aspecto que requiere mejora]
2. [Proceso que podría optimizarse]
3. [Recurso o habilidad que faltó]

### 9.3 Recomendaciones para Futuros Proyectos

1. [Recomendación basada en la experiencia]
2. [Mejora propuesta para el proceso]
3. [Herramienta o práctica a considerar]

---

## 10. Recomendaciones y Próximos Pasos

### 10.1 Recomendaciones

**Para el Equipo de Desarrollo:**
1. [Recomendación específica]
2. [Área que requiere atención]
3. [Mejora técnica sugerida]

**Para el Equipo de QA:**
1. [Ajuste al proceso de pruebas]
2. [Cobertura adicional necesaria]
3. [Automatización recomendada]

**Para la Gerencia del Proyecto:**
1. [Consideración estratégica]
2. [Recurso necesario]
3. [Decisión pendiente]

### 10.2 Criterios de Aceptación para Producción

- [ ] Al menos 95% de casos críticos pasados
- [ ] 0 defectos críticos abiertos
- [ ] Todos los defectos altos resueltos o con plan de mitigación
- [ ] Cobertura de requisitos ≥ 95%
- [ ] Pruebas de seguridad aprobadas
- [ ] Pruebas de rendimiento cumplen objetivos
- [ ] Aprobación de pruebas de aceptación del usuario (UAT)
- [ ] Documentación completa
- [ ] Plan de rollback definido

### 10.3 Próximos Pasos

1. **Inmediatos (esta semana):**
   - [Acción prioritaria 1]
   - [Acción prioritaria 2]
   - [Acción prioritaria 3]

2. **Corto plazo (próximas 2 semanas):**
   - [Acción planificada 1]
   - [Acción planificada 2]
   - [Acción planificada 3]

3. **Mediano plazo (próximo mes):**
   - [Acción futura 1]
   - [Acción futura 2]
   - [Acción futura 3]

---

## 11. Firmas y Aprobaciones

### 11.1 Preparado por

**Nombre:** [Nombre del responsable de QA]  
**Rol:** QA Lead / Tester  
**Fecha:** [DD/MM/AAAA]  
**Firma:** ___________________

### 11.2 Revisado por

**Nombre:** [Nombre del líder técnico]  
**Rol:** Technical Lead  
**Fecha:** [DD/MM/AAAA]  
**Firma:** ___________________

### 11.3 Aprobado por

**Nombre:** [Nombre del gerente del proyecto]  
**Rol:** Project Manager  
**Fecha:** [DD/MM/AAAA]  
**Firma:** ___________________

---

## 12. Anexos

### Anexo A: Glosario de Términos

| Término | Definición |
|---------|------------|
| PASS | Caso de prueba ejecutado exitosamente sin defectos |
| FAIL | Caso de prueba que no cumple con el resultado esperado |
| BLOCKED | Caso de prueba que no puede ejecutarse por dependencias |
| SKIP | Caso de prueba omitido intencionalmente |
| RETEST | Caso de prueba que requiere re-ejecución tras corrección |

### Anexo B: Referencias

- `01_Plan_de_Pruebas.md` - Plan maestro de pruebas
- `02_Casos_de_Prueba_Detallados.md` - Especificación de casos de prueba
- `Defectos/Reporte_Defectos_Consolidado.xlsx` - Registro detallado de defectos
- Documentación de requisitos - Fase 1 del proyecto

### Anexo C: Contactos del Equipo

| Rol | Nombre | Email | Teléfono |
|-----|--------|-------|----------|
| QA Lead | [Nombre] | [email] | [teléfono] |
| Tester 1 | [Nombre] | [email] | [teléfono] |
| Tester 2 | [Nombre] | [email] | [teléfono] |
| Dev Lead | [Nombre] | [email] | [teléfono] |
| Project Manager | [Nombre] | [email] | [teléfono] |

---

## 13. Control de Versiones del Documento

| Versión | Fecha | Autor | Cambios Realizados |
|---------|-------|-------|-------------------|
| 1.0 | [DD/MM/AAAA] | [Nombre] | Creación inicial del informe |
| 1.1 | [DD/MM/AAAA] | [Nombre] | [Descripción de cambios] |
| 1.2 | [DD/MM/AAAA] | [Nombre] | [Descripción de cambios] |

---

**Fin del Informe**

**Nota:** Este es un documento vivo que debe actualizarse regularmente durante el ciclo de pruebas. Se recomienda actualización diaria de las métricas principales y revisión completa al finalizar cada sprint o fase de pruebas.
