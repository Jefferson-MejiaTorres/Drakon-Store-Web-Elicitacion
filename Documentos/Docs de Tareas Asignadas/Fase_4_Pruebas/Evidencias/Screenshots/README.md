# Screenshots - Evidencias de Pruebas

**Carpeta:** Evidencias/Screenshots  
**Propósito:** Capturas de pantalla de casos de prueba y defectos

---

## 📸 Convenciones de Nomenclatura

### Casos de Prueba
```
[ID_CASO]_[FECHA]_[DESCRIPCION].png

Ejemplo:
CP-REG-001_12Nov2025_registro_exitoso.png
CP-LOGIN-002_13Nov2025_credenciales_incorrectas.png
```

### Defectos
```
DEF-[ID]_[FECHA]_[DESCRIPCION].png

Ejemplo:
DEF-001_12Nov2025_error_validacion_email.png
DEF-015_14Nov2025_boton_pago_no_responde.png
```

---

## 📂 Organización Sugerida

Si el volumen de screenshots aumenta, considere organizar en subcarpetas:

```
Screenshots/
├── Registro/
├── Login/
├── Catalogo/
├── Carrito/
├── Compra/
├── Perfil/
├── Favoritos/
└── Defectos/
```

---

## ✅ Checklist de Calidad

Antes de guardar un screenshot, verifique:

- [ ] Captura incluye toda la información relevante
- [ ] Nombre del archivo sigue la nomenclatura establecida
- [ ] Fecha incluida en el nombre es correcta
- [ ] Resolución es legible (mínimo 1280x720)
- [ ] No contiene información sensible real
- [ ] Elementos importantes están visibles
- [ ] Marca de tiempo visible si es relevante

---

## 🎨 Herramientas Recomendadas

### Para Captura
- **Windows:** Snipping Tool, Win+Shift+S
- **macOS:** Command+Shift+4
- **Linux:** gnome-screenshot, Flameshot
- **Extensiones Chrome:** Awesome Screenshot, Nimbus Screenshot

### Para Anotaciones
- **Snagit** - Herramienta profesional
- **Greenshot** - Gratuita para Windows
- **Skitch** - macOS
- **Draw.io** - Web-based, gratuita

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| **Total de screenshots** | [X] archivos |
| **Tamaño total** | [XX] MB |
| **Screenshot más antiguo** | [DD/MM/AAAA] |
| **Screenshot más reciente** | [DD/MM/AAAA] |
| **Casos de prueba documentados** | [X] |
| **Defectos documentados** | [X] |

---

## 📝 Ejemplos de Buenas Prácticas

### ✅ BIEN
```
✓ CP-REG-001_12Nov2025_registro_exitoso.png
  - Muestra formulario completo
  - Mensaje de confirmación visible
  - Timestamp en esquina superior
  - URL visible en barra de navegación

✓ DEF-023_15Nov2025_error_total_carrito.png
  - Error claramente visible
  - Valores de productos mostrados
  - Estado inconsistente resaltado
  - Consola del navegador incluida
```

### ❌ EVITAR
```
✗ imagen1.png - Nombre no descriptivo
✗ test.png - Sin identificador de caso
✗ screenshot_2025_11_12.png - Sin contexto
✗ captura_pantalla_final_definitiva_v2.png - Versionado confuso
```

---

## 🔒 Política de Privacidad

**IMPORTANTE:** Los screenshots NO deben contener:

- ❌ Datos personales reales de usuarios
- ❌ Información financiera real (números de tarjeta, cuentas)
- ❌ Credenciales de acceso (contraseñas visibles)
- ❌ Tokens de autenticación
- ❌ Direcciones IP de producción
- ❌ Información confidencial de la empresa

**Usar siempre datos de prueba:**
- ✅ usuario_test@ejemplo.com
- ✅ Tarjeta de prueba: 4111 1111 1111 1111
- ✅ Contraseña: ****** (oculta)

---

## 📋 Plantilla de Descripción

Cuando sea necesario documentar un screenshot, use este formato:

```markdown
### [ID_CASO] - [Título del Caso]

**Archivo:** [nombre_archivo.png]  
**Fecha:** [DD/MM/AAAA]  
**Tester:** [Nombre]

**Descripción:**
[Breve descripción de qué muestra el screenshot]

**Observaciones:**
[Cualquier detalle relevante o contexto adicional]

**Resultado:**
[✅ PASS / ❌ FAIL / ⚠️ WARNING]
```

---

## 🔄 Mantenimiento

### Limpieza Periódica
- Revisar mensualmente screenshots obsoletos
- Archivar evidencias de versiones anteriores
- Eliminar duplicados o screenshots de baja calidad
- Optimizar tamaño de archivos si es necesario

### Backup
- Realizar backup semanal de toda la carpeta
- Mantener copia en almacenamiento cloud
- Versionar screenshots críticos de defectos

---

**Última actualización:** [DD/MM/AAAA]  
**Responsable:** [Nombre del QA Lead]
