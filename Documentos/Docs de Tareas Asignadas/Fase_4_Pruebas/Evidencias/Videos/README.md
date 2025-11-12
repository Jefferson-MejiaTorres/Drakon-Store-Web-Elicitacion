# Videos - Evidencias de Pruebas

**Carpeta:** Evidencias/Videos  
**Propósito:** Grabaciones de flujos de prueba y reproducción de defectos

---

## 🎥 Convenciones de Nomenclatura

### Casos de Prueba
```
[ID_CASO]_[FECHA]_[DESCRIPCION].mp4

Ejemplo:
CP-COMP-001_12Nov2025_checkout_completo.mp4
CP-LOGIN-001_13Nov2025_flujo_autenticacion.mp4
```

### Defectos
```
DEF-[ID]_[FECHA]_[DESCRIPCION].mp4

Ejemplo:
DEF-005_12Nov2025_error_proceso_pago.mp4
DEF-018_14Nov2025_carrito_no_actualiza.mp4
```

### Pruebas de Usabilidad
```
USAB-[SESION]_[FECHA]_[TAREA].mp4

Ejemplo:
USAB-001_15Nov2025_tarea_compra_producto.mp4
```

---

## 📂 Organización Sugerida

```
Videos/
├── Flujos_Completos/       # End-to-end flows
├── Defectos/              # Bug reproductions
├── Usabilidad/            # User testing sessions
├── Rendimiento/           # Performance tests
└── Demos/                 # Feature demonstrations
```

---

## ✅ Checklist de Calidad

Antes de guardar un video, verifique:

- [ ] Duración no excede 5 minutos (dividir si es necesario)
- [ ] Audio claro si incluye narración
- [ ] Resolución mínima: 1280x720 (720p)
- [ ] Frame rate: mínimo 30 fps
- [ ] URL y navegador visibles
- [ ] Timestamp visible si es relevante
- [ ] No contiene información sensible
- [ ] Formato: MP4 (H.264)
- [ ] Tamaño de archivo optimizado
- [ ] Nombre sigue nomenclatura establecida

---

## 🎬 Estructura Recomendada del Video

### Introducción (0:00-0:15)
- Mostrar URL del sistema
- Indicar ID del caso de prueba
- Mencionar objetivo de la prueba

### Ejecución (0:15-4:00)
- Seguir pasos del caso de prueba
- Mostrar interacciones claramente
- Indicar datos de entrada
- Capturar respuestas del sistema

### Conclusión (4:00-4:30)
- Mostrar resultado final
- Indicar si PASS o FAIL
- Destacar observaciones importantes

### Opcional: Logs (4:30-5:00)
- Mostrar consola del navegador
- Mostrar network tab si es relevante
- Capturar mensajes de error

---

## 🎨 Herramientas Recomendadas

### Grabación de Pantalla

**Windows:**
- **OBS Studio** (gratuito, profesional)
- **ShareX** (gratuito, ligero)
- **Windows Game Bar** (Win+G, nativo)
- **Camtasia** (pago, con edición)

**macOS:**
- **QuickTime Player** (nativo, simple)
- **OBS Studio** (gratuito, profesional)
- **ScreenFlow** (pago, profesional)
- **Command+Shift+5** (screenshot tool)

**Linux:**
- **SimpleScreenRecorder** (sencillo)
- **OBS Studio** (profesional)
- **Kazam** (ligero)
- **recordMyDesktop** (básico)

**Extensiones de Navegador:**
- **Loom** - Grabación rápida con compartición
- **Screencastify** - Chrome extension
- **Awesome Screenshot** - Con grabación
- **Nimbus Screenshot & Screen Recorder**

### Edición y Optimización

- **HandBrake** - Compresión de video
- **FFmpeg** - Conversión por línea de comandos
- **DaVinci Resolve** - Edición profesional gratuita
- **Shotcut** - Editor gratuito de código abierto

---

## 📊 Especificaciones Técnicas

### Configuración Recomendada

| Parámetro | Valor Recomendado | Valor Mínimo |
|-----------|------------------|--------------|
| **Resolución** | 1920x1080 (1080p) | 1280x720 (720p) |
| **Frame Rate** | 60 fps | 30 fps |
| **Bitrate** | 5-8 Mbps | 2-3 Mbps |
| **Codec de Video** | H.264 | H.264 |
| **Codec de Audio** | AAC | AAC |
| **Formato** | MP4 | MP4 |
| **Duración máxima** | 5 minutos | - |

### Optimización de Tamaño

Para reducir el tamaño de archivo sin perder calidad significativa:

```bash
# Usando FFmpeg (ejemplo)
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

# CRF: 18 (muy alta calidad) a 28 (calidad aceptable)
# Preset: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow
```

---

## 📝 Plantilla de Documentación

Cuando sea necesario documentar un video, use este formato:

```markdown
### [ID_CASO] - [Título del Caso]

**Archivo:** [nombre_archivo.mp4]  
**Fecha:** [DD/MM/AAAA]  
**Duración:** [MM:SS]  
**Tester:** [Nombre]

**Descripción:**
[Qué demuestra el video]

**Pasos Cubiertos:**
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

**Resultado:**
[✅ PASS / ❌ FAIL]

**Observaciones:**
[Detalles relevantes, errores observados, comportamiento inesperado]

**Timestamp de eventos clave:**
- 0:15 - [Evento importante]
- 1:30 - [Evento importante]
- 3:45 - [Evento importante]
```

---

## 🎯 Mejores Prácticas

### Durante la Grabación

1. **Preparación:**
   - Limpiar escritorio y cerrar aplicaciones innecesarias
   - Verificar resolución de pantalla
   - Probar audio si usará narración
   - Preparar datos de prueba previamente

2. **Ejecución:**
   - Mover el mouse despacio y deliberadamente
   - Pausar brevemente después de cada acción
   - Mostrar claramente cada clic y entrada de datos
   - Evitar movimientos de mouse erráticos

3. **Narración (si aplica):**
   - Hablar claro y a ritmo moderado
   - Explicar qué está haciendo en cada paso
   - Indicar resultados esperados vs. observados
   - Mantener tono profesional

### Después de la Grabación

1. **Revisión:**
   - Ver el video completo antes de guardarlo
   - Verificar que captura todo lo necesario
   - Confirmar que audio es claro (si aplica)
   - Asegurar que no hay información sensible

2. **Edición (si necesario):**
   - Recortar partes innecesarias (tiempos muertos)
   - Agregar anotaciones en puntos clave
   - Incluir marcadores de tiempo
   - Optimizar tamaño de archivo

3. **Almacenamiento:**
   - Guardar con nomenclatura correcta
   - Añadir metadatos si es posible
   - Crear copia de backup
   - Documentar en el informe de pruebas

---

## 📋 Casos de Uso Comunes

### 1. Flujo Completo End-to-End
**Propósito:** Demostrar un proceso de negocio completo  
**Ejemplo:** Registro → Login → Búsqueda → Agregar al carrito → Checkout → Confirmación  
**Duración típica:** 3-5 minutos

### 2. Reproducción de Defecto
**Propósito:** Mostrar cómo reproducir un bug encontrado  
**Ejemplo:** Pasos específicos que causan el error  
**Duración típica:** 1-2 minutos

### 3. Prueba de Usabilidad
**Propósito:** Capturar interacción real de usuario con el sistema  
**Ejemplo:** Usuario realizando tarea sin guía  
**Duración típica:** 3-10 minutos (puede ser más largo)

### 4. Prueba de Rendimiento
**Propósito:** Demostrar tiempo de carga y respuesta  
**Ejemplo:** Medición de tiempos con herramientas de desarrollo  
**Duración típica:** 1-3 minutos

---

## 🔒 Política de Privacidad

**IMPORTANTE:** Los videos NO deben contener:

- ❌ Datos personales reales
- ❌ Información financiera real
- ❌ Credenciales de acceso visibles
- ❌ Tokens o claves de API
- ❌ Información confidencial
- ❌ Rostros de usuarios (sin consentimiento)

**En pruebas de usabilidad:**
- Obtener consentimiento firmado antes de grabar
- Ofrecer opción de desenfoque de rostro
- Anonimizar datos personales en pantalla
- Cumplir con regulaciones de privacidad (GDPR, etc.)

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| **Total de videos** | [X] archivos |
| **Tamaño total** | [XX] GB |
| **Video más antiguo** | [DD/MM/AAAA] |
| **Video más reciente** | [DD/MM/AAAA] |
| **Duración total** | [HH:MM:SS] |
| **Casos documentados** | [X] |
| **Defectos documentados** | [X] |

---

## 🔄 Mantenimiento

### Limpieza Periódica
- Revisar mensualmente videos obsoletos
- Archivar evidencias de versiones anteriores
- Eliminar videos duplicados o de baja calidad
- Comprimir videos si el espacio es limitado

### Backup
- Realizar backup semanal de videos críticos
- Mantener copia en almacenamiento cloud (Google Drive, OneDrive, etc.)
- Versionar videos de defectos importantes
- Considerar servicios de video hosting (YouTube privado, Vimeo)

### Organización
- Mover videos antiguos a carpeta de archivo
- Mantener solo últimas 2 versiones de pruebas repetidas
- Crear índice de videos con timestamps importantes
- Etiquetar videos con metadatos apropiados

---

## 🎓 Recursos de Aprendizaje

### Tutoriales de OBS Studio
- [Configuración básica](https://obsproject.com/wiki/)
- [Optimización de calidad](https://obsproject.com/wiki/OBS-Studio-Quickstart)
- [Atajos de teclado](https://obsproject.com/wiki/Keyboard-Shortcuts)

### Compresión de Video
- [Guía de FFmpeg](https://ffmpeg.org/documentation.html)
- [Configuración H.264](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [Comparación de codecs](https://www.boxcast.com/blog/hevc-h.264-h.265-video-compression)

---

**Última actualización:** [DD/MM/AAAA]  
**Responsable:** [Nombre del QA Lead]
