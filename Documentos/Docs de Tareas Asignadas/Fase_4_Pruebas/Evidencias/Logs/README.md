# Logs - Evidencias de Pruebas

**Carpeta:** Evidencias/Logs  
**Propósito:** Archivos de registro del sistema, errores y peticiones HTTP

---

## 📋 Convenciones de Nomenclatura

### Logs de Consola del Navegador
```
[ID_CASO]_[FECHA]_console_log.txt

Ejemplo:
CP-LOGIN-001_12Nov2025_console_log.txt
DEF-008_13Nov2025_console_log.txt
```

### Logs de Red (Network)
```
[ID_CASO]_[FECHA]_network_log.txt
[ID_CASO]_[FECHA]_network_log.json

Ejemplo:
CP-COMP-001_12Nov2025_network_log.json
DEF-015_14Nov2025_network_log.txt
```

### Logs de Errores
```
[ID_CASO]_[FECHA]_error_log.txt
DEF-[ID]_[FECHA]_error_log.txt

Ejemplo:
CP-REG-002_12Nov2025_error_log.txt
DEF-023_15Nov2025_error_log.txt
```

### Logs de Base de Datos
```
[ID_CASO]_[FECHA]_db_query_log.txt
[ID_CASO]_[FECHA]_db_error_log.txt

Ejemplo:
CP-CARR-005_13Nov2025_db_query_log.txt
```

### Logs de Performance
```
[ID_CASO]_[FECHA]_performance_log.json
[ID_CASO]_[FECHA]_lighthouse_report.json

Ejemplo:
CP-REND-001_14Nov2025_performance_log.json
```

---

## 📂 Organización Sugerida

```
Logs/
├── Console/           # Browser console logs
├── Network/           # HTTP requests/responses
├── Errors/            # Error logs
├── Database/          # DB queries and errors
├── Performance/       # Performance metrics
└── Security/          # Security-related logs
```

---

## 🔍 Tipos de Logs

### 1. Console Logs (Consola del Navegador)

**Qué capturar:**
- Mensajes de log (console.log)
- Advertencias (console.warn)
- Errores (console.error)
- Información de debug (console.info)

**Cómo capturar:**
1. Abrir DevTools (F12)
2. Ir a la pestaña "Console"
3. Ejecutar el caso de prueba
4. Clic derecho → "Save as..."
5. Guardar como archivo .txt

**Formato de ejemplo:**
```
[12:34:56.789] INFO: User session started
[12:34:58.123] LOG: Loading product catalog...
[12:35:01.456] WARNING: Slow API response (2.5s)
[12:35:03.789] ERROR: Failed to load image: product-123.jpg
```

---

### 2. Network Logs (Peticiones HTTP)

**Qué capturar:**
- Peticiones HTTP/HTTPS
- Respuestas del servidor
- Tiempos de respuesta
- Status codes
- Headers
- Payloads (request/response)

**Cómo capturar:**
1. Abrir DevTools (F12)
2. Ir a la pestaña "Network"
3. Limpiar log existente
4. Ejecutar el caso de prueba
5. Clic derecho → "Save all as HAR with content"
6. O exportar logs específicos

**Formato HAR (JSON):**
```json
{
  "log": {
    "version": "1.2",
    "creator": { "name": "WebInspector", "version": "537.36" },
    "entries": [
      {
        "startedDateTime": "2025-11-12T12:34:56.789Z",
        "request": {
          "method": "POST",
          "url": "https://drakon-store.com/api/login",
          "headers": [...],
          "postData": {...}
        },
        "response": {
          "status": 200,
          "statusText": "OK",
          "headers": [...],
          "content": {...}
        },
        "time": 245
      }
    ]
  }
}
```

---

### 3. Error Logs

**Qué capturar:**
- Stack traces completos
- Mensajes de error
- Contexto del error
- Variables relevantes
- Estado del sistema

**Formato de ejemplo:**
```
===============================
ERROR LOG
===============================
Timestamp: 2025-11-12 12:34:56
Case ID: DEF-023
Severity: CRITICAL
Module: Payment Processing

Error Message:
TypeError: Cannot read property 'amount' of undefined

Stack Trace:
  at processPayment (checkout.js:145:23)
  at handleSubmit (checkout.js:89:15)
  at HTMLButtonElement.<anonymous> (checkout.js:67:9)

Context:
- User ID: test_user_001
- Cart Total: $45.99
- Payment Method: Credit Card
- Browser: Chrome 118.0.5993.88
- OS: Windows 10

Reproduction Steps:
1. Add product to cart
2. Proceed to checkout
3. Enter payment details
4. Click "Complete Purchase"

Expected: Payment processed successfully
Actual: TypeError thrown, payment not processed
===============================
```

---

### 4. Database Logs

**Qué capturar:**
- Queries SQL ejecutadas
- Tiempos de ejecución
- Errores de base de datos
- Transacciones
- Índices utilizados

**Formato de ejemplo:**
```sql
-- Query Log Entry
-- Timestamp: 2025-11-12 12:34:56.789
-- Case ID: CP-CARR-005
-- Duration: 125ms

SELECT p.id, p.name, p.price, p.stock
FROM products p
WHERE p.category = 'gorras'
  AND p.active = true
ORDER BY p.created_at DESC
LIMIT 20;

-- Result: 18 rows returned
-- Performance: Index used on category, active

-- Error Log Entry
-- Timestamp: 2025-11-12 13:45:23.456
-- Case ID: DEF-031
-- Error Code: 1062

INSERT INTO orders (user_id, total, status)
VALUES (123, 45.99, 'pending');

-- ERROR 1062: Duplicate entry '123-pending' for key 'unique_user_pending_order'
```

---

### 5. Performance Logs

**Qué capturar:**
- Tiempos de carga (Load times)
- First Contentful Paint (FCP)
- Time to Interactive (TTI)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Tamaño de recursos
- Número de peticiones

**Formato JSON de ejemplo:**
```json
{
  "testCase": "CP-REND-001",
  "timestamp": "2025-11-12T12:34:56.789Z",
  "url": "https://drakon-store.com",
  "metrics": {
    "firstContentfulPaint": 1.2,
    "timeToInteractive": 2.8,
    "largestContentfulPaint": 2.1,
    "cumulativeLayoutShift": 0.05,
    "firstInputDelay": 45,
    "totalBlockingTime": 150,
    "speedIndex": 2.3
  },
  "resources": {
    "totalRequests": 42,
    "totalSize": 1.8,
    "imageSize": 0.9,
    "scriptSize": 0.5,
    "stylesheetSize": 0.2
  },
  "lighthouse": {
    "performance": 92,
    "accessibility": 95,
    "bestPractices": 88,
    "seo": 90
  }
}
```

---

## 🛠️ Herramientas para Captura de Logs

### Navegadores

**Chrome DevTools:**
- Console: F12 → Console tab
- Network: F12 → Network tab
- Performance: F12 → Performance tab
- Export HAR: Network tab → right-click → "Save all as HAR"

**Firefox Developer Tools:**
- Similar a Chrome
- Storage Inspector para localStorage/sessionStorage

**Safari Web Inspector:**
- Develop → Show Web Inspector
- Similar funcionalidad

### Extensiones del Navegador

- **ModHeader** - Modificar y capturar headers HTTP
- **Postman Interceptor** - Capturar requests
- **HTTP Toolkit** - Interceptar y analizar tráfico HTTP
- **Requestly** - Modificar network requests

### Herramientas de Línea de Comandos

**cURL** - Capturar request/response:
```bash
curl -v https://drakon-store.com/api/products > curl_output.txt 2>&1
```

**HTTPie** - HTTP client amigable:
```bash
http --verbose GET https://drakon-store.com/api/products > http_output.txt
```

### Herramientas de Proxy

- **Fiddler** - Windows, debugging proxy
- **Charles Proxy** - Cross-platform HTTP proxy
- **Wireshark** - Network protocol analyzer
- **mitmproxy** - Interactive TLS-capable proxy

---

## ✅ Checklist de Calidad

Antes de guardar un log, verifique:

- [ ] Timestamp incluido (fecha y hora)
- [ ] ID del caso de prueba identificado
- [ ] Log completo (inicio y fin capturados)
- [ ] Información sensible removida/ofuscada
- [ ] Formato legible (pretty-print JSON)
- [ ] Contexto suficiente incluido
- [ ] Nomenclatura correcta del archivo
- [ ] Tamaño de archivo razonable (< 10MB)

---

## 🔒 Seguridad y Privacidad

### Información a REMOVER/OFUSCAR:

❌ **Nunca incluir en logs:**
- Contraseñas (incluso en requests)
- Tokens de autenticación completos
- Claves de API
- Números de tarjeta de crédito
- Información personal identificable (PII)
- Datos financieros reales
- Secretos de aplicación

✅ **Ofuscar apropiadamente:**
```
# MAL
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# BIEN
Authorization: Bearer [TOKEN_REDACTED]

# MAL
email: "juan.perez@empresa.com"
creditCard: "4532-1234-5678-9012"

# BIEN
email: "test_user@example.com"
creditCard: "4111-****-****-1111"
```

### Script de Limpieza (Bash):
```bash
#!/bin/bash
# clean_logs.sh - Remueve información sensible de logs

sed -i 's/"password":\s*"[^"]*"/"password":"[REDACTED]"/g' *.json
sed -i 's/Authorization: Bearer .*/Authorization: Bearer [TOKEN_REDACTED]/g' *.txt
sed -i 's/\b[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}\b/****-****-****-***/g' *.txt
```

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| **Total de logs** | [X] archivos |
| **Tamaño total** | [XX] MB |
| **Logs más antiguos** | [DD/MM/AAAA] |
| **Logs más recientes** | [DD/MM/AAAA] |
| **Console logs** | [X] |
| **Network logs** | [X] |
| **Error logs** | [X] |
| **DB logs** | [X] |
| **Performance logs** | [X] |

---

## 📝 Plantilla de Documentación

```markdown
### [ID_CASO] - [Título del Caso]

**Archivo:** [nombre_archivo.txt/json]  
**Fecha:** [DD/MM/AAAA]  
**Tipo:** [Console / Network / Error / DB / Performance]  
**Tester:** [Nombre]

**Descripción:**
[Qué muestra el log]

**Contexto:**
- Módulo: [Nombre del módulo]
- Acción: [Acción que causó el log]
- Estado esperado: [Estado esperado]
- Estado actual: [Estado observado]

**Análisis:**
[Interpretación del log, causa raíz si es un error]

**Resultado:**
[✅ PASS / ❌ FAIL / ⚠️ WARNING]
```

---

## 🎓 Mejores Prácticas

### Durante la Captura

1. **Preparación:**
   - Limpiar logs previos antes de cada prueba
   - Configurar niveles de log apropiados
   - Activar timestamp en todos los logs

2. **Ejecución:**
   - Iniciar captura ANTES de ejecutar el caso
   - Mantener captura durante todo el flujo
   - Capturar varios segundos después del resultado

3. **Post-captura:**
   - Revisar log completo antes de guardar
   - Verificar que capturó el evento relevante
   - Ofuscar información sensible
   - Añadir contexto si es necesario

### Análisis de Logs

1. **Identificar patrones:**
   - Buscar errores recurrentes
   - Identificar warnings que preceden errores
   - Correlacionar tiempos de respuesta

2. **Correlación:**
   - Relacionar console logs con network logs
   - Vincular errores frontend con backend
   - Comparar logs exitosos vs. fallidos

3. **Documentación:**
   - Destacar líneas relevantes
   - Añadir comentarios explicativos
   - Vincular con screenshots/videos

---

## 🔄 Mantenimiento

### Limpieza Periódica
- Comprimir logs antiguos (gzip)
- Archivar logs de versiones anteriores
- Eliminar logs duplicados
- Mantener solo logs relevantes

### Organización
```bash
# Comprimir logs viejos
gzip Logs/2025-10-*.txt

# Mover a archivo
mkdir -p Logs/Archive/2025-Q3
mv Logs/2025-10-*.txt.gz Logs/Archive/2025-Q3/

# Buscar logs específicos
grep -r "ERROR" Logs/Console/*.txt
find Logs/ -name "*DEF-023*"
```

---

## 📚 Recursos Adicionales

### Documentación
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/)
- [HAR Format Specification](http://www.softwareishard.com/blog/har-12-spec/)

### Herramientas de Análisis
- [HAR Viewer](http://www.softwareishard.com/blog/har-viewer/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

---

**Última actualización:** [DD/MM/AAAA]  
**Responsable:** [Nombre del QA Lead]
