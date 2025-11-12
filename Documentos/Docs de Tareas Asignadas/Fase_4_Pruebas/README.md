# Fase 4: Pruebas del Sistema - Drakon Store Web

**Proyecto:** Drakon Store Web  
**Fase:** 4 - Pruebas y Validación  
**Versión:** 1.0  
**Fecha de creación:** 12 de noviembre de 2025  
**Estado:** En Ejecución

---

## 📋 Descripción de la Fase

La Fase 4 representa la etapa de **Pruebas y Validación** del proyecto Drakon Store Web. En esta fase se realizan todas las actividades necesarias para garantizar la calidad del sistema antes de su lanzamiento a producción, incluyendo pruebas funcionales, no funcionales, de integración, seguridad, rendimiento y aceptación del usuario.

---

## 🎯 Objetivos de la Fase

1. **Verificar la funcionalidad del sistema** conforme a los requisitos especificados en Fase 1
2. **Validar el cumplimiento de estándares** de calidad, seguridad y rendimiento
3. **Identificar y documentar defectos** antes del lanzamiento a producción
4. **Asegurar la experiencia de usuario** mediante pruebas de usabilidad
5. **Certificar la preparación del sistema** para entorno de producción

---

## 📁 Estructura de la Fase

```
Fase_4_Pruebas/
├── 01_Plan_de_Pruebas.md                    # Plan maestro de pruebas
├── 02_Casos_de_Prueba_Detallados.md         # Especificación de casos de prueba
├── 03_Informe_Ejecucion_Pruebas.md          # Informe de resultados
├── README.md                                 # Este archivo
├── Evidencias/                               # Evidencias de pruebas
│   ├── README.md
│   ├── Screenshots/                          # Capturas de pantalla
│   │   └── README.md
│   ├── Videos/                               # Grabaciones de pruebas
│   │   └── README.md
│   └── Logs/                                 # Archivos de registro
│       └── README.md
├── Reportes/                                 # Reportes periódicos
│   ├── README.md
│   ├── Diarios/                              # Reportes diarios
│   │   └── Template_Reporte_Diario.md
│   ├── Semanales/                            # Reportes semanales
│   │   └── Template_Reporte_Semanal.md
│   └── Final/                                # Reporte final
│       └── Template_Reporte_Final.md
└── Defectos/                                 # Gestión de defectos
    └── README.md
```

---

## 📄 Documentos Principales

### 1. Plan de Pruebas (01_Plan_de_Pruebas.md)

**Propósito:** Define la estrategia integral de pruebas del proyecto

**Contenido:**
- Introducción y objetivos
- Alcance de las pruebas
- Estrategia de pruebas (niveles y tipos)
- Recursos necesarios (humanos, hardware, software)
- Cronograma de pruebas
- Criterios de entrada y salida
- Riesgos y mitigación
- Entregables esperados
- Roles y responsabilidades

**Basado en:** Norma ISO/IEC/IEEE 29119 para pruebas de software

---

### 2. Casos de Prueba Detallados (02_Casos_de_Prueba_Detallados.md)

**Propósito:** Especificación completa de todos los casos de prueba

**Contenido:**
- 48 casos de prueba documentados
- Casos por módulo:
  - Registro de Usuario (5 casos)
  - Inicio de Sesión (4 casos)
  - Catálogo de Productos (4 casos)
  - Carrito de Compras (5 casos)
  - Proceso de Compra (4 casos)
  - Perfil de Usuario (4 casos)
  - Favoritos (3 casos)
  - Pruebas No Funcionales (19 casos)
- Matriz de trazabilidad
- Resumen de cobertura

**Cada caso incluye:**
- ID único
- Descripción
- Prioridad (Crítica/Alta/Media/Baja)
- Precondiciones
- Datos de entrada
- Pasos de ejecución detallados
- Resultado esperado
- Criterios de aceptación

---

### 3. Informe de Ejecución de Pruebas (03_Informe_Ejecucion_Pruebas.md)

**Propósito:** Template para documentar resultados de la ejecución de pruebas

**Contenido:**
- Resumen ejecutivo con métricas principales
- Progreso de ejecución por módulo
- Análisis de defectos
- Cobertura de requisitos
- Tendencias y proyecciones
- Riesgos y problemas identificados
- Evidencias generadas
- Lecciones aprendidas
- Recomendaciones y próximos pasos

---

## 📊 Métricas y KPIs Principales

### Métricas de Ejecución

| Métrica | Descripción | Objetivo |
|---------|-------------|----------|
| **Cobertura de Pruebas** | % de requisitos cubiertos por casos de prueba | ≥ 95% |
| **Tasa de Éxito** | % de casos de prueba que pasan exitosamente | ≥ 95% |
| **Defectos Críticos** | Número de defectos de severidad crítica abiertos | 0 |
| **Velocidad de Ejecución** | Casos de prueba ejecutados por día | [X] casos/día |

### Métricas de Calidad

| Métrica | Descripción | Objetivo |
|---------|-------------|----------|
| **Densidad de Defectos** | Defectos encontrados / Casos ejecutados | < 0.15 |
| **Tasa de Resolución** | % de defectos resueltos vs. encontrados | ≥ 90% |
| **Tiempo de Resolución** | Días promedio para resolver un defecto | < 5 días |
| **Tasa de Reapertura** | % de defectos que son reabiertos | < 10% |

---

## 🗂️ Estructura de Evidencias

### Screenshots
**Ubicación:** `Evidencias/Screenshots/`

Capturas de pantalla organizadas de:
- Casos de prueba ejecutados (exitosos y fallidos)
- Defectos encontrados con evidencia visual
- Validaciones de interfaz y mensajes del sistema

**Nomenclatura:** `[ID_CASO]_[FECHA]_[DESCRIPCION].png`

---

### Videos
**Ubicación:** `Evidencias/Videos/`

Grabaciones de:
- Flujos completos end-to-end
- Reproducción de defectos complejos
- Sesiones de pruebas de usabilidad
- Demostraciones de funcionalidades

**Nomenclatura:** `[ID_CASO]_[FECHA]_[DESCRIPCION].mp4`  
**Formato:** MP4 (H.264), Duración máx: 5 minutos

---

### Logs
**Ubicación:** `Evidencias/Logs/`

Archivos de registro que incluyen:
- Console logs del navegador
- Network logs (peticiones HTTP)
- Error logs del sistema
- Logs de base de datos
- Logs de rendimiento

**Nomenclatura:** `[ID_CASO]_[FECHA]_[TIPO_LOG].txt`

---

## 📈 Estructura de Reportes

### Reportes Diarios
**Ubicación:** `Reportes/Diarios/`

**Frecuencia:** Diaria  
**Propósito:** Seguimiento del progreso diario de pruebas  
**Audiencia:** Equipo de QA, Dev Lead

**Contenido clave:**
- Casos ejecutados hoy
- Resultados (PASS/FAIL/BLOCKED)
- Defectos encontrados
- Bloqueadores identificados
- Plan para mañana

---

### Reportes Semanales
**Ubicación:** `Reportes/Semanales/`

**Frecuencia:** Semanal  
**Propósito:** Resumen ejecutivo para stakeholders  
**Audiencia:** Project Manager, Tech Lead, Cliente

**Contenido clave:**
- Resumen de la semana
- Métricas acumuladas
- Análisis de tendencias
- Top defectos de la semana
- Riesgos y plan para próxima semana

---

### Reporte Final
**Ubicación:** `Reportes/Final/`

**Frecuencia:** Una vez (al finalizar pruebas)  
**Propósito:** Documentación completa de cierre  
**Audiencia:** Todos los stakeholders

**Contenido clave:**
- Resumen ejecutivo con veredicto
- Métricas finales completas
- Análisis exhaustivo de calidad
- Recomendación GO/NO-GO para producción
- Lecciones aprendidas
- Plan de monitoreo post-lanzamiento

---

## 🐛 Gestión de Defectos

### Sistema de Tracking
**Ubicación:** `Defectos/Reporte_Defectos_Consolidado.xlsx`

**Información por defecto:**
- ID único (DEF-XXX)
- Fecha de detección
- Descripción detallada
- Módulo afectado
- Severidad (Crítico/Alto/Medio/Bajo)
- Prioridad (P1/P2/P3/P4)
- Estado (Abierto/En Progreso/Resuelto/Cerrado)
- Pasos para reproducir
- Evidencias asociadas
- Asignación y resolución

### Severidades Definidas

| Severidad | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Crítico** | Bloquea funcionalidad principal, sin workaround | Sistema de pago no funciona |
| **Alto** | Funcionalidad principal afectada, workaround difícil | Búsqueda de productos falla intermitentemente |
| **Medio** | Funcionalidad secundaria afectada | Favoritos no se actualizan en tiempo real |
| **Bajo** | Problema cosmético o menor | Error de alineación en botón |

---

## 🔄 Proceso de Pruebas

### Flujo de Trabajo

```
1. PLANIFICACIÓN
   ├─ Revisión de requisitos
   ├─ Diseño de casos de prueba
   └─ Preparación de entorno

2. EJECUCIÓN
   ├─ Ejecución de casos funcionales
   ├─ Ejecución de casos no funcionales
   ├─ Reporte de defectos
   └─ Recolección de evidencias

3. ANÁLISIS
   ├─ Análisis de resultados
   ├─ Generación de reportes
   ├─ Identificación de tendencias
   └─ Evaluación de riesgos

4. RE-TEST
   ├─ Verificación de correcciones
   ├─ Pruebas de regresión
   └─ Validación final

5. CIERRE
   ├─ Reporte final
   ├─ Métricas de calidad
   ├─ Recomendación GO/NO-GO
   └─ Lecciones aprendidas
```

---

## 👥 Roles y Responsabilidades

### QA Lead
- Planificación general de pruebas
- Revisión y aprobación de casos de prueba
- Asignación de tareas al equipo
- Reporte a stakeholders
- Decisión final sobre calidad

### Testers / QA Engineers
- Ejecución de casos de prueba
- Reporte de defectos
- Recolección de evidencias
- Reportes diarios
- Re-testing de correcciones

### Tech Lead / Development Lead
- Revisión técnica de defectos
- Asignación a desarrolladores
- Validación de correcciones
- Apoyo en troubleshooting

### Project Manager
- Seguimiento de cronograma
- Gestión de recursos
- Comunicación con cliente
- Decisión GO/NO-GO final

---

## 📅 Cronograma de la Fase

| Semana | Actividad Principal | Entregables |
|--------|---------------------|-------------|
| **Semana 1** | Preparación y pruebas funcionales básicas | Plan de pruebas, Casos de prueba Módulos 1-3 |
| **Semana 2** | Pruebas funcionales avanzadas | Casos de prueba Módulos 4-7, Reportes diarios |
| **Semana 3** | Pruebas no funcionales y de integración | Informe semanal, Pruebas de rendimiento/seguridad |
| **Semana 4** | Re-testing, regresión y UAT | Reporte final, Recomendación GO/NO-GO |

**Duración Total:** 4 semanas (20 días laborables)  
**Esfuerzo Estimado:** [XXX] horas-persona

---

## ✅ Criterios de Aceptación de la Fase

### Criterios de Salida (Exit Criteria)

La Fase 4 se considera completa cuando:

- [ ] ≥ 95% de casos de prueba ejecutados
- [ ] ≥ 95% de casos críticos pasan exitosamente
- [ ] 0 defectos críticos abiertos
- [ ] Todos los defectos altos tienen plan de resolución
- [ ] Cobertura de requisitos ≥ 95%
- [ ] Pruebas de seguridad aprobadas (sin vulnerabilidades críticas)
- [ ] Pruebas de rendimiento cumplen objetivos
- [ ] Pruebas de UAT completadas con aprobación del cliente
- [ ] Reporte final generado y aprobado
- [ ] Evidencias completas archivadas
- [ ] Recomendación GO/NO-GO documentada

---

## 🎓 Metodología y Estándares

### Normas Aplicadas
- **ISO/IEC/IEEE 29119**: Pruebas de software
- **ISO 25010**: Calidad del producto de software (SQuaRE)
- **ISTQB**: Fundamentos de pruebas de software

### Mejores Prácticas
- Test-Driven Development (TDD) concepts
- Behavior-Driven Development (BDD) para casos de uso
- Continuous Testing cuando sea aplicable
- Risk-Based Testing para priorización

---

## 🔗 Referencias Cruzadas

### Fases Anteriores
- **Fase 1:** `../Fase_1_Elicitacion_Requisitos/` - Requisitos funcionales y no funcionales
- **Fase 2:** `../Fase_2_Analisis_Modelado/` - Diagramas y modelo del sistema
- **Fase 3:** `../Fase_3_Prototipado/` - Prototipos de interfaz

### Documentos Relacionados
- Código de Conducta: `../../Codigo_de_Conducta.md`
- Contribuciones: `../../Contribuciones.md`
- Versionado: `../../versionado.md`
- README Principal: `../../README.md`

---

## 📊 Estado Actual de la Fase

**Fecha de inicio:** [DD/MM/AAAA]  
**Fecha estimada de finalización:** [DD/MM/AAAA]  
**Progreso actual:** [XX%]

### Resumen de Avance

| Actividad | Estado | Completitud |
|-----------|--------|-------------|
| Planificación | ✅ Completa | 100% |
| Diseño de casos de prueba | ✅ Completa | 100% |
| Preparación de entorno | 🔄 En progreso | [XX%] |
| Ejecución de pruebas | ⏳ Pendiente | 0% |
| Reporte de defectos | ⏳ Pendiente | 0% |
| Análisis y cierre | ⏳ Pendiente | 0% |

---

## 📞 Contactos del Equipo

### Equipo de QA

**QA Lead:**  
Nombre: [Nombre]  
Email: [email]  
Slack/Teams: [usuario]

**Testers:**  
- [Nombre Tester 1] - [email]
- [Nombre Tester 2] - [email]

### Liderazgo Técnico

**Tech Lead:**  
Nombre: [Nombre]  
Email: [email]

**Project Manager:**  
Nombre: [Nombre]  
Email: [email]

---

## 📚 Recursos Adicionales

### Herramientas Utilizadas
- **Gestión de Pruebas:** [Jira/TestRail/Zephyr]
- **Automatización:** [Selenium/Cypress/Jest]
- **Performance:** [JMeter/Lighthouse/WebPageTest]
- **Seguridad:** [OWASP ZAP/Burp Suite]
- **Colaboración:** [Slack/Teams/Confluence]

### Documentación de Referencia
- [ISO/IEC/IEEE 29119 Overview](https://www.iso.org/)
- [ISTQB Syllabus](https://www.istqb.org/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

---

## 🔄 Control de Versiones del README

| Versión | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | 12/11/2025 | Jefferson Mejía Torres | Creación inicial de la documentación de Fase 4 |

---

**Última actualización:** 12 de noviembre de 2025  
**Mantenido por:** Equipo de QA - Drakon Store  
**Estado del documento:** Activo

---

## Notas Finales

> Esta fase es **crítica** para el éxito del proyecto. La calidad del sistema Drakon Store Web depende de la rigurosidad y completitud de las pruebas realizadas. Todos los miembros del equipo deben comprometerse con los estándares de calidad establecidos y seguir las metodologías documentadas.

**¡Éxito en las pruebas!** 🚀
