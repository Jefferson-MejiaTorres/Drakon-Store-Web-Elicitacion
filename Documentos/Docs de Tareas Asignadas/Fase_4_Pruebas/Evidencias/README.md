# Evidencias de Pruebas - Drakon Store Web

**Proyecto:** Drakon Store Web  
**Propósito:** Almacenamiento organizado de evidencias de ejecución de pruebas

---

## 📁 Estructura de Carpetas

Esta carpeta contiene todas las evidencias recopiladas durante la ejecución de pruebas del sistema Drakon Store Web, organizadas por tipo de evidencia.

```
Evidencias/
├── Screenshots/        # Capturas de pantalla de pruebas
├── Videos/            # Grabaciones de flujos y defectos
└── Logs/              # Archivos de registro del sistema
```

---

## 📸 Screenshots

**Ubicación:** `Screenshots/`

Contiene capturas de pantalla de:
- Casos de prueba ejecutados exitosamente
- Defectos encontrados
- Validaciones de interfaz
- Mensajes de error y confirmación
- Estados del sistema

**Nomenclatura:**
- Casos de prueba: `[ID_CASO]_[FECHA]_[DESCRIPCION].png`
- Defectos: `DEF-[ID]_[FECHA]_[DESCRIPCION].png`
- Ejemplo: `CP-REG-001_12Nov2025_registro_exitoso.png`

---

## 🎥 Videos

**Ubicación:** `Videos/`

Contiene grabaciones de:
- Flujos completos end-to-end
- Reproducción de defectos complejos
- Pruebas de usabilidad con usuarios
- Pruebas de rendimiento
- Demostraciones de funcionalidades

**Nomenclatura:**
- Casos de prueba: `[ID_CASO]_[FECHA]_[DESCRIPCION].mp4`
- Defectos: `DEF-[ID]_[FECHA]_[DESCRIPCION].mp4`
- Ejemplo: `CP-COMP-001_12Nov2025_checkout_completo.mp4`

**Formato recomendado:** MP4 (H.264)  
**Duración máxima:** 5 minutos por video (dividir si es necesario)

---

## 📋 Logs

**Ubicación:** `Logs/`

Contiene archivos de registro:
- Logs de consola del navegador
- Logs de error del sistema
- Logs de peticiones HTTP
- Logs de base de datos (queries)
- Logs de seguridad

**Nomenclatura:**
- `[ID_CASO]_[FECHA]_[TIPO_LOG].txt`
- `[ID_CASO]_[FECHA]_console_log.txt`
- `[ID_CASO]_[FECHA]_network_log.txt`
- `DEF-[ID]_[FECHA]_error_log.txt`

**Formato:** Texto plano (.txt) o JSON (.json)

---

## 📝 Directrices de Uso

### Captura de Evidencias

1. **Screenshots:**
   - Capturar pantalla completa o sección relevante
   - Incluir fecha/hora visible si es posible
   - Resaltar elementos importantes con anotaciones
   - Resolución mínima: 1280x720

2. **Videos:**
   - Iniciar grabación antes de comenzar la prueba
   - Incluir audio con explicación si es necesario
   - Mostrar URL y navegador en uso
   - Finalizar con resumen del resultado

3. **Logs:**
   - Incluir timestamp de inicio y fin
   - Filtrar información sensible (contraseñas, tokens)
   - Incluir contexto antes y después del error
   - Formato legible (pretty-print JSON)

### Organización

- Crear subcarpetas por módulo si el volumen de evidencias es alto
- Mantener nomenclatura consistente
- Eliminar evidencias redundantes o de baja calidad
- Hacer backup regular de evidencias críticas

### Seguridad

- **NO incluir** datos personales reales de usuarios
- **NO incluir** credenciales de acceso reales
- **NO incluir** información financiera real
- Usar datos de prueba anonimizados

---

## 📊 Resumen de Evidencias

### Por Tipo

| Tipo | Cantidad | Tamaño Total | Última Actualización |
|------|----------|--------------|---------------------|
| Screenshots | [X] archivos | [XX] MB | [DD/MM/AAAA] |
| Videos | [X] archivos | [XX] MB | [DD/MM/AAAA] |
| Logs | [X] archivos | [XX] MB | [DD/MM/AAAA] |
| **TOTAL** | **[X]** | **[XX] MB** | - |

### Por Módulo

| Módulo | Screenshots | Videos | Logs |
|--------|-------------|--------|------|
| Registro | [X] | [X] | [X] |
| Login | [X] | [X] | [X] |
| Catálogo | [X] | [X] | [X] |
| Carrito | [X] | [X] | [X] |
| Compra | [X] | [X] | [X] |
| Perfil | [X] | [X] | [X] |
| Favoritos | [X] | [X] | [X] |

---

## 🔗 Referencias

- **Plan de Pruebas:** `../01_Plan_de_Pruebas.md`
- **Casos de Prueba:** `../02_Casos_de_Prueba_Detallados.md`
- **Informe de Ejecución:** `../03_Informe_Ejecucion_Pruebas.md`
- **Reporte de Defectos:** `../Defectos/Reporte_Defectos_Consolidado.xlsx`

---

## 📞 Contacto

Para preguntas sobre las evidencias o solicitudes de acceso:

**Responsable de QA:** [Nombre]  
**Email:** [email]  
**Slack/Teams:** [usuario]

---

**Última actualización:** [DD/MM/AAAA]
