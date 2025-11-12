# Gestión de Defectos - Drakon Store Web

**Proyecto:** Drakon Store Web  
**Propósito:** Registro y seguimiento de defectos encontrados durante las pruebas

---

## 📋 Reporte de Defectos Consolidado

### Ubicación del Archivo Principal
`Reporte_Defectos_Consolidado.xlsx`

**Nota:** Debido a limitaciones técnicas, el archivo Excel no está incluido en este repositorio. A continuación se proporciona la estructura completa y un template en formato Markdown para referencia.

---

## 📊 Estructura del Archivo Excel

El archivo `Reporte_Defectos_Consolidado.xlsx` debe contener las siguientes hojas (sheets):

### Hoja 1: Defectos Activos
Defectos que están actualmente en proceso o pendientes de resolución

### Hoja 2: Defectos Resueltos
Defectos que han sido corregidos y cerrados

### Hoja 3: Estadísticas
Métricas y gráficos de defectos

### Hoja 4: Análisis por Módulo
Distribución de defectos por módulo del sistema

### Hoja 5: Tendencias
Análisis de tendencias semanales de defectos

---

## 📝 Plantilla de Columnas (Excel)

### Columnas Principales del Reporte

| Columna | Tipo de Dato | Descripción | Ejemplo |
|---------|--------------|-------------|---------|
| **ID** | Texto | Identificador único del defecto | DEF-001 |
| **Fecha Detección** | Fecha | Fecha en que se encontró el defecto | 12/11/2025 |
| **Título** | Texto | Resumen corto del defecto | Error al procesar pago |
| **Descripción** | Texto largo | Descripción detallada del problema | Al intentar completar una compra con tarjeta de crédito, el sistema arroja error 500... |
| **Módulo** | Lista desplegable | Módulo afectado | Proceso de Compra |
| **Severidad** | Lista desplegable | Nivel de severidad | Crítico / Alto / Medio / Bajo |
| **Prioridad** | Lista desplegable | Prioridad de resolución | P1 / P2 / P3 / P4 |
| **Estado** | Lista desplegable | Estado actual del defecto | Abierto / En Progreso / Resuelto / Cerrado / Reabierto |
| **Caso de Prueba** | Texto | ID del caso de prueba relacionado | CP-COMP-002 |
| **Reportado Por** | Texto | Nombre del tester | Juan Pérez |
| **Asignado A** | Texto | Desarrollador asignado | María López |
| **Pasos para Reproducir** | Texto largo | Pasos detallados para reproducir | 1. Iniciar sesión...<br>2. Agregar producto...<br>3. Ir a checkout... |
| **Resultado Esperado** | Texto | Comportamiento esperado | El pago debe procesarse correctamente |
| **Resultado Actual** | Texto | Comportamiento observado | Error 500: Internal Server Error |
| **Evidencia** | Hipervínculo | Enlace a screenshot/video/log | ../Evidencias/Screenshots/DEF-001.png |
| **Entorno** | Texto | Entorno donde se encontró | QA / Staging / Production |
| **Navegador/SO** | Texto | Detalles del navegador y SO | Chrome 118 / Windows 10 |
| **Versión del Sistema** | Texto | Versión donde se encontró | v1.0.0 |
| **Fecha de Resolución** | Fecha | Fecha en que se resolvió | 15/11/2025 |
| **Comentarios** | Texto largo | Notas adicionales | Se requiere actualizar validación de tarjeta |
| **Build/Commit** | Texto | Build o commit donde se corrigió | commit #a1b2c3d |
| **Tiempo Resolución (días)** | Número | Días desde detección hasta resolución | 3 |

---

## 🎯 Valores Permitidos (Listas Desplegables)

### Módulo
- Registro
- Login
- Catálogo de Productos
- Carrito de Compras
- Proceso de Compra
- Perfil de Usuario
- Favoritos
- Panel de Administración
- Infraestructura
- Base de Datos
- API / Backend
- UI / Frontend
- Otro

### Severidad
- **Crítico**: Bloquea funcionalidad principal, sin workaround
- **Alto**: Funcionalidad principal afectada, con workaround difícil
- **Medio**: Funcionalidad secundaria afectada
- **Bajo**: Problema cosmético o menor

### Prioridad
- **P1 (Inmediata)**: Debe resolverse antes de cualquier release
- **P2 (Alta)**: Debe resolverse en el sprint actual
- **P3 (Media)**: Puede resolverse en próximo sprint
- **P4 (Baja)**: Puede postergarse según capacidad

### Estado
- **Abierto**: Defecto registrado, pendiente de asignación
- **En Progreso**: Desarrollador trabajando en la corrección
- **Resuelto**: Corrección implementada, pendiente de verificación
- **Cerrado**: Verificado y confirmado como resuelto
- **Reabierto**: El defecto persiste después de supuesta corrección
- **Rechazado**: No es un defecto (working as designed)
- **Duplicado**: Ya existe otro defecto con el mismo problema

### Entorno
- Development
- QA / Testing
- Staging
- Pre-Production
- Production

---

## 📋 Plantilla de Defecto (Markdown)

A continuación se muestra un template de defecto en formato Markdown para referencia rápida:

```markdown
## DEF-[ID] - [Título del Defecto]

**Fecha de Detección:** [DD/MM/AAAA]  
**Reportado por:** [Nombre del Tester]  
**Módulo:** [Módulo Afectado]  
**Severidad:** [Crítico/Alto/Medio/Bajo]  
**Prioridad:** [P1/P2/P3/P4]  
**Estado:** [Estado Actual]

---

### Descripción
[Descripción detallada del problema encontrado]

### Entorno
- **Sistema Operativo:** [Windows/Mac/Linux/iOS/Android]
- **Navegador:** [Chrome/Firefox/Safari/Edge - versión]
- **Resolución de Pantalla:** [1920x1080 / etc]
- **Versión del Sistema:** [v1.0.0]
- **Entorno:** [QA/Staging/Production]

### Pasos para Reproducir
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]
4. [Resultado observado]

### Resultado Esperado
[Descripción del comportamiento esperado]

### Resultado Actual
[Descripción del comportamiento observado]

### Evidencias
- Screenshot: [Enlace o ruta]
- Video: [Enlace o ruta]
- Log: [Enlace o ruta]

### Caso de Prueba Relacionado
**ID:** [CP-XXX-XXX]  
**Nombre:** [Nombre del caso de prueba]

### Notas Adicionales
[Cualquier información adicional relevante]

---

### Historial de Cambios

| Fecha | Usuario | Acción | Comentario |
|-------|---------|--------|------------|
| [DD/MM/AAAA] | [Nombre] | Creado | Defecto reportado inicialmente |
| [DD/MM/AAAA] | [Nombre] | Asignado | Asignado a [Desarrollador] |
| [DD/MM/AAAA] | [Nombre] | En Progreso | Comenzó corrección |
| [DD/MM/AAAA] | [Nombre] | Resuelto | Corrección implementada en commit #abc123 |
| [DD/MM/AAAA] | [Nombre] | Cerrado | Verificado exitosamente |
```

---

## 🔢 Convención de Numeración

### Formato de ID
```
DEF-[NÚMERO]

Ejemplos:
DEF-001
DEF-002
...
DEF-150
```

### Asignación de Números
- **DEF-001 a DEF-099**: Defectos de Módulos Funcionales
- **DEF-100 a DEF-199**: Defectos No Funcionales (Rendimiento, Seguridad, etc.)
- **DEF-200 a DEF-299**: Defectos de UI/UX
- **DEF-300 a DEF-399**: Defectos de Integración
- **DEF-400+**: Defectos Varios

---

## 📊 Métricas de Defectos

### Métricas Clave a Calcular

1. **Defectos Totales Encontrados**
   ```
   Total = Σ(Todos los defectos registrados)
   ```

2. **Densidad de Defectos**
   ```
   Densidad = Total de Defectos / Casos de Prueba Ejecutados
   ```

3. **Tasa de Detección de Defectos**
   ```
   Tasa = (Defectos Encontrados en Testing / Total Defectos) × 100%
   ```

4. **Tasa de Resolución**
   ```
   Tasa Resolución = (Defectos Resueltos / Defectos Totales) × 100%
   ```

5. **Tiempo Promedio de Resolución**
   ```
   Tiempo Promedio = Σ(Fecha Resolución - Fecha Detección) / Defectos Resueltos
   ```

6. **Defectos por Severidad**
   ```
   % Críticos = (Defectos Críticos / Total Defectos) × 100%
   % Altos = (Defectos Altos / Total Defectos) × 100%
   ...
   ```

7. **Eficiencia de Resolución**
   ```
   Eficiencia = (Defectos Cerrados Primera Vez / Total Defectos Resueltos) × 100%
   ```

8. **Tasa de Reapertura**
   ```
   Tasa Reapertura = (Defectos Reabiertos / Defectos Resueltos) × 100%
   ```

---

## 🔄 Proceso de Gestión de Defectos

### 1. Detección
- Tester encuentra un problema durante ejecución de prueba
- Verificar que no sea un duplicado
- Recopilar evidencias (screenshots, videos, logs)

### 2. Registro
- Abrir nueva entrada en el reporte de defectos
- Asignar ID único
- Completar todos los campos obligatorios
- Adjuntar evidencias

### 3. Triaje
- QA Lead revisa el defecto
- Asigna severidad y prioridad
- Valida si es realmente un defecto o comportamiento esperado

### 4. Asignación
- Project Manager o Tech Lead asigna a desarrollador
- Se establece fecha objetivo de resolución
- Se notifica al desarrollador asignado

### 5. Corrección
- Desarrollador investiga el problema
- Implementa la corrección
- Actualiza estado a "Resuelto"
- Registra commit/build donde se corrigió

### 6. Verificación
- Tester ejecuta re-test
- Si PASS: Cierra el defecto
- Si FAIL: Reabre el defecto con comentarios

### 7. Cierre
- Defecto verificado y cerrado
- Se actualiza documentación si es necesario
- Se archiva para métricas finales

---

## 🎨 Formato Visual del Excel (Recomendado)

### Colores por Severidad
- **Crítico**: Rojo (#FF0000)
- **Alto**: Naranja (#FFA500)
- **Medio**: Amarillo (#FFFF00)
- **Bajo**: Verde claro (#90EE90)

### Colores por Estado
- **Abierto**: Gris (#D3D3D3)
- **En Progreso**: Azul (#87CEEB)
- **Resuelto**: Verde (#90EE90)
- **Cerrado**: Verde oscuro (#228B22)
- **Reabierto**: Rojo (#FF6347)

### Formato de Celdas
- **Encabezados**: Negrita, fondo azul oscuro, texto blanco
- **Filtros**: Activar en todas las columnas
- **Congelar**: Primera fila (encabezados)
- **Anchos de columna**: Ajustados al contenido

---

## 📈 Gráficos Recomendados (Sheet "Estadísticas")

1. **Gráfico de Pastel**: Distribución por Severidad
2. **Gráfico de Barras**: Defectos por Módulo
3. **Gráfico de Líneas**: Tendencia de defectos abiertos vs. cerrados por semana
4. **Gráfico de Columnas**: Defectos por Estado
5. **Gráfico de Dispersión**: Tiempo de resolución por severidad

---

## 🛠️ Herramientas Alternativas

Si prefieres usar herramientas especializadas en lugar de Excel:

### Sistemas de Seguimiento de Bugs
- **Jira** - Más usado en empresas, integración con Agile
- **Bugzilla** - Gratuito, de código abierto
- **MantisBT** - Simple y efectivo
- **Redmine** - Gestión de proyectos con tracking de bugs
- **GitHub Issues** - Si el proyecto ya está en GitHub
- **Azure DevOps** - Integrado con pipeline de desarrollo
- **Trello** - Más simple, para equipos pequeños

### Ventajas de Herramientas Especializadas
- ✅ Notificaciones automáticas
- ✅ Historial de cambios completo
- ✅ Integración con repositorios de código
- ✅ Workflows personalizables
- ✅ Reportes y dashboards en tiempo real
- ✅ Comentarios y discusión en contexto

---

## 📋 Checklist de Reporte de Defecto

Antes de registrar un defecto, verificar:

- [ ] El problema es reproducible consistentemente
- [ ] No es un duplicado de un defecto existente
- [ ] Se recopilaron evidencias (screenshot/video/log)
- [ ] Se completaron todos los pasos para reproducir
- [ ] Se identificó el caso de prueba relacionado
- [ ] Se especificó el entorno correcto (navegador, SO, etc.)
- [ ] La descripción es clara y concisa
- [ ] El título es descriptivo y específico
- [ ] Se asignó severidad y prioridad apropiadas
- [ ] Se verificó que realmente es un defecto (no un misunderstanding)

---

## 📞 Contacto y Soporte

**Para preguntas sobre defectos:**

**QA Lead:** [Nombre]  
**Email:** [email]  
**Slack/Teams:** [usuario]

**Para asignación de defectos:**

**Project Manager:** [Nombre]  
**Email:** [email]

---

## 📚 Referencias

- Plan de Pruebas: `../01_Plan_de_Pruebas.md`
- Casos de Prueba: `../02_Casos_de_Prueba_Detallados.md`
- Evidencias: `../Evidencias/`
- Reportes: `../Reportes/`

---

**Última actualización:** [DD/MM/AAAA]  
**Responsable:** [Nombre del QA Lead]

---

## Estadísticas Actuales

| Métrica | Valor |
|---------|-------|
| **Total de defectos** | [X] |
| **Defectos críticos** | [X] |
| **Defectos abiertos** | [X] |
| **Defectos resueltos** | [X] |
| **Tasa de resolución** | [XX%] |
| **Tiempo promedio de resolución** | [X] días |
