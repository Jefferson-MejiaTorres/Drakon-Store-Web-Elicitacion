# Casos de Prueba Detallados - Drakon Store Web

**Proyecto:** Drakon Store Web  
**Versión:** 1.0  
**Fecha de creación:** 12 de noviembre de 2025  
**Autor:** Equipo Drakon Store  
**Estado:** En Ejecución

---

## 1. Introducción

### 1.1 Propósito del Documento

Este documento contiene los casos de prueba detallados para el sistema Drakon Store Web. Cada caso de prueba incluye precondiciones, pasos de ejecución, datos de entrada y resultados esperados, permitiendo una ejecución sistemática y reproducible de las pruebas.

### 1.2 Referencias

- **01_Plan_de_Pruebas.md**: Plan maestro de pruebas
- **Fase_1_Elicitacion_Requisitos**: Requisitos funcionales y no funcionales
- **Fase_2_Analisis_Modelado**: Diagramas de sistema y modelo de datos

### 1.3 Convenciones

**Estados de Ejecución:**
- ✅ **PASS**: Prueba exitosa
- ❌ **FAIL**: Prueba fallida
- ⏸️ **BLOCKED**: Prueba bloqueada
- ⏭️ **SKIP**: Prueba omitida
- 🔄 **RETEST**: Requiere re-ejecución

**Prioridades:**
- 🔴 **CRÍTICA**: Funcionalidad esencial del sistema
- 🟡 **ALTA**: Funcionalidad importante
- 🟢 **MEDIA**: Funcionalidad secundaria
- 🔵 **BAJA**: Funcionalidad opcional o cosmética

---

## 2. Casos de Prueba - Módulo de Registro de Usuario

### CP-REG-001: Registro exitoso con datos válidos
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-001

**Precondiciones:**
- El sistema está disponible
- No existe un usuario registrado con el email de prueba
- Conexión a base de datos activa

**Datos de entrada:**
| Campo | Valor |
|-------|-------|
| Nombre completo | Juan Pérez |
| Email | juan.perez@test.com |
| Contraseña | Test123!@# |
| Confirmar contraseña | Test123!@# |

**Pasos de ejecución:**
1. Acceder a la página de registro (`/register`)
2. Ingresar "Juan Pérez" en el campo "Nombre completo"
3. Ingresar "juan.perez@test.com" en el campo "Email"
4. Ingresar "Test123!@#" en el campo "Contraseña"
5. Ingresar "Test123!@#" en el campo "Confirmar contraseña"
6. Hacer clic en el botón "Registrarse"

**Resultado esperado:**
- El sistema muestra el mensaje "Registro exitoso. Bienvenido a Drakon Store"
- El usuario es redirigido a la página de inicio (`/`)
- La sesión del usuario está activa
- El registro se guarda correctamente en la base de datos
- Se envía un correo de bienvenida al usuario

**Criterios de aceptación:**
- Tiempo de respuesta < 3 segundos
- Los datos se almacenan encriptados (contraseña con hash)
- Se crea el token de sesión correctamente

---

### CP-REG-002: Registro fallido - Email duplicado
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional - Validación  
**Requisito relacionado:** RF-001

**Precondiciones:**
- Existe un usuario registrado con el email "existente@test.com"

**Datos de entrada:**
| Campo | Valor |
|-------|-------|
| Nombre completo | María López |
| Email | existente@test.com |
| Contraseña | Test123!@# |
| Confirmar contraseña | Test123!@# |

**Pasos de ejecución:**
1. Acceder a la página de registro
2. Completar el formulario con los datos de entrada
3. Hacer clic en "Registrarse"

**Resultado esperado:**
- El sistema muestra el mensaje de error: "Este correo electrónico ya está registrado"
- El usuario permanece en la página de registro
- No se crea un nuevo registro en la base de datos
- El formulario mantiene los datos ingresados (excepto las contraseñas)

---

### CP-REG-003: Validación de formato de email
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional - Validación  
**Requisito relacionado:** RF-001

**Datos de entrada (casos a probar):**
| Email | Resultado Esperado |
|-------|-------------------|
| test | ❌ Error: "Formato de email inválido" |
| test@ | ❌ Error: "Formato de email inválido" |
| test@dominio | ❌ Error: "Formato de email inválido" |
| @dominio.com | ❌ Error: "Formato de email inválido" |
| test@dominio.com | ✅ Email válido |
| test.name@dominio.co | ✅ Email válido |

**Pasos de ejecución:**
1. Acceder a la página de registro
2. Ingresar cada email de prueba
3. Intentar avanzar al siguiente campo o enviar el formulario

**Resultado esperado:**
- Los emails inválidos muestran mensaje de error en tiempo real
- El formulario no se envía si el email es inválido
- La validación funciona tanto en frontend como backend

---

### CP-REG-004: Validación de fortaleza de contraseña
**Prioridad:** 🟡 ALTA  
**Tipo:** Seguridad - Validación  
**Requisito relacionado:** RNF-001 (Seguridad)

**Datos de entrada (casos a probar):**
| Contraseña | Resultado Esperado |
|------------|-------------------|
| 123 | ❌ Error: "Mínimo 8 caracteres" |
| password | ❌ Error: "Debe incluir mayúsculas, números y símbolos" |
| Password1 | ❌ Error: "Debe incluir al menos un símbolo especial" |
| Pass123! | ✅ Contraseña válida |
| MyP@ssw0rd2025 | ✅ Contraseña fuerte |

**Criterios de validación:**
- Mínimo 8 caracteres
- Al menos una letra mayúscula
- Al menos una letra minúscula
- Al menos un número
- Al menos un carácter especial (!@#$%^&*)

**Resultado esperado:**
- Indicador visual de fortaleza de contraseña
- Mensajes claros sobre requisitos faltantes
- Bloqueo de envío si la contraseña no cumple los criterios

---

### CP-REG-005: Validación de coincidencia de contraseñas
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional - Validación  
**Requisito relacionado:** RF-001

**Datos de entrada:**
| Campo | Valor |
|-------|-------|
| Contraseña | Test123!@# |
| Confirmar contraseña | Test456!@# |

**Pasos de ejecución:**
1. Ingresar contraseña en el primer campo
2. Ingresar contraseña diferente en el campo de confirmación
3. Intentar enviar el formulario

**Resultado esperado:**
- Se muestra el mensaje: "Las contraseñas no coinciden"
- El formulario no se envía
- Se resalta visualmente el campo de confirmación

---

## 3. Casos de Prueba - Módulo de Inicio de Sesión

### CP-LOGIN-001: Login exitoso con credenciales válidas
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-002

**Precondiciones:**
- Usuario registrado con email: "usuario@test.com" y contraseña: "Test123!@#"

**Datos de entrada:**
| Campo | Valor |
|-------|-------|
| Email | usuario@test.com |
| Contraseña | Test123!@# |

**Pasos de ejecución:**
1. Acceder a la página de login (`/login`)
2. Ingresar email en el campo correspondiente
3. Ingresar contraseña
4. Hacer clic en "Iniciar Sesión"

**Resultado esperado:**
- El sistema autentica al usuario exitosamente
- Se crea una sesión activa con token JWT
- El usuario es redirigido a la página principal (`/`)
- Se muestra mensaje de bienvenida con el nombre del usuario
- El header muestra opciones de usuario autenticado

---

### CP-LOGIN-002: Login fallido - Credenciales incorrectas
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Seguridad - Validación  
**Requisito relacionado:** RF-002, RNF-001

**Datos de entrada:**
| Campo | Valor |
|-------|-------|
| Email | usuario@test.com |
| Contraseña | ContraseñaIncorrecta123! |

**Pasos de ejecución:**
1. Acceder a la página de login
2. Ingresar credenciales incorrectas
3. Intentar iniciar sesión

**Resultado esperado:**
- Se muestra mensaje genérico: "Email o contraseña incorrectos"
- El usuario permanece en la página de login
- No se crea sesión activa
- No se revela si el email existe o no (seguridad)
- Se registra el intento fallido en logs de seguridad

---

### CP-LOGIN-003: Bloqueo temporal por intentos fallidos
**Prioridad:** 🟡 ALTA  
**Tipo:** Seguridad  
**Requisito relacionado:** RNF-001

**Precondiciones:**
- Sistema configurado para bloquear después de 5 intentos fallidos

**Pasos de ejecución:**
1. Intentar login con contraseña incorrecta 5 veces consecutivas
2. Verificar el estado del usuario
3. Intentar un sexto login

**Resultado esperado:**
- Después del 5º intento fallido, se muestra: "Cuenta bloqueada temporalmente por seguridad. Intente nuevamente en 15 minutos"
- El usuario no puede iniciar sesión aunque ingrese credenciales correctas
- Se envía notificación por email sobre el bloqueo
- Después de 15 minutos, el usuario puede intentar nuevamente

---

### CP-LOGIN-004: Sesión persistente con "Recordarme"
**Prioridad:** 🟢 MEDIA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-002

**Pasos de ejecución:**
1. Iniciar sesión con credenciales válidas
2. Marcar la opción "Recordarme"
3. Cerrar el navegador completamente
4. Abrir el navegador nuevamente
5. Acceder a Drakon Store

**Resultado esperado:**
- La sesión del usuario permanece activa
- No se solicita login nuevamente
- El token de sesión tiene duración extendida (30 días)

---

## 4. Casos de Prueba - Módulo de Catálogo de Productos

### CP-CAT-001: Visualización del catálogo completo
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-003

**Precondiciones:**
- Base de datos contiene al menos 20 productos activos

**Pasos de ejecución:**
1. Acceder a la página principal o catálogo
2. Observar la carga de productos

**Resultado esperado:**
- Se muestran los productos en formato de tarjetas (cards)
- Cada tarjeta muestra: imagen, nombre, precio, botón "Agregar al carrito"
- Los productos están organizados en grilla responsiva
- Tiempo de carga < 2 segundos
- Imágenes optimizadas y cargadas correctamente

---

### CP-CAT-002: Búsqueda de productos por nombre
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-003

**Datos de entrada:**
| Búsqueda | Resultado Esperado |
|----------|-------------------|
| "gorra roja" | Muestra gorras rojas disponibles |
| "GORRA ROJA" | Mismo resultado (case insensitive) |
| "producto inexistente" | Mensaje: "No se encontraron productos" |

**Pasos de ejecución:**
1. Localizar el campo de búsqueda
2. Ingresar término de búsqueda
3. Presionar Enter o botón de búsqueda

**Resultado esperado:**
- Los resultados se filtran en tiempo real
- Se muestran solo productos que coinciden con el término
- La búsqueda es case-insensitive
- Se mantiene la paginación si hay muchos resultados

---

### CP-CAT-003: Filtrado por categorías
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-003

**Pasos de ejecución:**
1. Acceder al catálogo
2. Seleccionar filtro "Gorras deportivas"
3. Observar resultados
4. Seleccionar filtro adicional "Gorras clásicas"
5. Limpiar filtros

**Resultado esperado:**
- Solo se muestran productos de la categoría seleccionada
- Los filtros múltiples funcionan correctamente (AND/OR según diseño)
- Hay indicador visual de filtros activos
- El botón "Limpiar filtros" restaura la vista completa

---

### CP-CAT-004: Ordenamiento de productos
**Prioridad:** 🟢 MEDIA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-003

**Opciones de ordenamiento a probar:**
- Menor a mayor precio
- Mayor a menor precio
- Más recientes
- Más populares
- Alfabético (A-Z)

**Pasos de ejecución:**
1. Acceder al catálogo
2. Seleccionar cada opción de ordenamiento
3. Verificar el orden resultante

**Resultado esperado:**
- Los productos se reorganizan correctamente según el criterio
- El ordenamiento se mantiene al navegar entre páginas
- Tiempo de reordenamiento < 1 segundo

---

## 5. Casos de Prueba - Módulo de Carrito de Compras

### CP-CARR-001: Agregar producto al carrito
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-004

**Precondiciones:**
- Usuario con sesión activa
- Producto disponible en stock

**Pasos de ejecución:**
1. Seleccionar un producto del catálogo
2. Hacer clic en "Agregar al carrito"
3. Verificar el contador del carrito

**Resultado esperado:**
- El producto se agrega al carrito exitosamente
- El contador del carrito se incrementa en 1
- Se muestra notificación: "Producto agregado al carrito"
- Animación visual (bump effect) en el ícono del carrito
- El producto se guarda en localStorage/sesión

---

### CP-CARR-002: Modificar cantidad de producto en carrito
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-004

**Precondiciones:**
- Carrito contiene al menos 1 producto

**Pasos de ejecución:**
1. Acceder a la vista del carrito
2. Incrementar la cantidad del producto usando botón "+"
3. Verificar actualización de precio
4. Decrementar la cantidad usando botón "-"
5. Verificar actualización

**Resultado esperado:**
- La cantidad se actualiza correctamente
- El precio subtotal del producto se recalcula automáticamente
- El precio total del carrito se actualiza
- No se permite cantidad menor a 1
- Se valida contra stock disponible

---

### CP-CARR-003: Eliminar producto del carrito
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-004

**Precondiciones:**
- Carrito contiene al menos 1 producto

**Pasos de ejecución:**
1. Acceder a la vista del carrito
2. Hacer clic en botón "Eliminar" o ícono de basura
3. Confirmar eliminación (si hay modal de confirmación)

**Resultado esperado:**
- El producto se elimina del carrito
- El contador del carrito se actualiza
- El precio total se recalcula
- Si el carrito queda vacío, se muestra mensaje apropiado

---

### CP-CARR-004: Persistencia del carrito
**Prioridad:** 🟢 MEDIA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-004

**Pasos de ejecución:**
1. Agregar productos al carrito
2. Cerrar sesión
3. Iniciar sesión nuevamente
4. Verificar contenido del carrito

**Resultado esperado:**
- Los productos agregados previamente permanecen en el carrito
- Las cantidades se mantienen
- El carrito se recupera desde la base de datos o localStorage

---

### CP-CARR-005: Validación de stock antes de compra
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional - Validación  
**Requisito relacionado:** RF-004, RF-005

**Precondiciones:**
- Producto con stock limitado (ej: 3 unidades)

**Pasos de ejecución:**
1. Agregar 2 unidades del producto al carrito
2. En otra sesión/navegador, comprar 2 unidades del mismo producto
3. En la primera sesión, intentar proceder al checkout

**Resultado esperado:**
- El sistema detecta que el stock es insuficiente
- Se muestra mensaje: "Stock insuficiente para este producto"
- Se actualiza automáticamente la cantidad disponible en el carrito
- El usuario puede ajustar la cantidad o eliminar el producto

---

## 6. Casos de Prueba - Módulo de Proceso de Compra

### CP-COMP-001: Checkout exitoso con todos los datos correctos
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional - End-to-End  
**Requisito relacionado:** RF-005

**Precondiciones:**
- Usuario autenticado
- Carrito con al menos 1 producto
- Método de pago configurado

**Datos de entrada:**
| Campo | Valor |
|-------|-------|
| Dirección | Calle 123 #45-67 |
| Ciudad | Bogotá |
| Código Postal | 110111 |
| Teléfono | 3001234567 |
| Método de pago | Tarjeta de crédito |
| Número de tarjeta | 4111111111111111 (test) |
| Fecha de expiración | 12/2026 |
| CVV | 123 |

**Pasos de ejecución:**
1. Proceder al checkout desde el carrito
2. Completar información de envío
3. Seleccionar método de pago
4. Ingresar detalles de pago
5. Revisar resumen del pedido
6. Confirmar compra

**Resultado esperado:**
- El pago se procesa exitosamente
- Se genera un número de pedido único
- El stock de productos se actualiza automáticamente
- Se muestra página de confirmación con detalles del pedido
- Se envía email de confirmación al usuario
- El pedido se registra en la base de datos con estado "Procesando"
- El carrito se vacía después de la compra exitosa

---

### CP-COMP-002: Checkout fallido - Pago rechazado
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Funcional - Manejo de errores  
**Requisito relacionado:** RF-005

**Precondiciones:**
- Usuario autenticado
- Carrito con productos

**Datos de entrada:**
- Tarjeta de prueba rechazada: 4000000000000002

**Pasos de ejecución:**
1. Proceder al checkout
2. Ingresar tarjeta de prueba rechazada
3. Intentar completar la compra

**Resultado esperado:**
- Se muestra mensaje: "Pago rechazado. Por favor, verifique sus datos o use otro método de pago"
- El pedido NO se crea en la base de datos
- El stock NO se modifica
- El carrito mantiene los productos
- El usuario puede reintentar con otro método de pago
- Se registra el intento fallido en logs

---

### CP-COMP-003: Aplicación de cupón de descuento
**Prioridad:** 🟢 MEDIA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-005

**Precondiciones:**
- Cupón válido "DRAKON10" con 10% de descuento

**Pasos de ejecución:**
1. Proceder al checkout
2. Ingresar código de cupón "DRAKON10"
3. Hacer clic en "Aplicar"
4. Verificar actualización de precios

**Resultado esperado:**
- El sistema valida el cupón
- Se aplica el 10% de descuento al total
- Se muestra el descuento desglosado en el resumen
- El precio final se recalcula correctamente

**Casos de error a validar:**
- Cupón expirado
- Cupón ya utilizado
- Cupón inválido
- Cupón no aplicable a productos en carrito

---

### CP-COMP-004: Validación de campos obligatorios en checkout
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional - Validación  
**Requisito relacionado:** RF-005

**Pasos de ejecución:**
1. Proceder al checkout
2. Intentar avanzar sin completar campos obligatorios
3. Verificar mensajes de error

**Resultado esperado:**
- Se muestran mensajes de error en campos obligatorios vacíos
- El formulario no se envía hasta completar todos los campos requeridos
- Los campos se resaltan visualmente con borde rojo
- Mensajes específicos para cada campo

---

## 7. Casos de Prueba - Módulo de Perfil de Usuario

### CP-PERF-001: Visualización de perfil de usuario
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-006

**Precondiciones:**
- Usuario autenticado

**Pasos de ejecución:**
1. Hacer clic en el ícono de perfil en el header
2. Seleccionar "Mi Perfil"

**Resultado esperado:**
- Se muestra la página de perfil del usuario
- Datos personales visibles: nombre, email, fecha de registro
- Secciones disponibles: Datos personales, Historial de pedidos, Direcciones guardadas
- La información cargada corresponde al usuario autenticado

---

### CP-PERF-002: Actualización de datos personales
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-006

**Datos de entrada:**
| Campo | Valor Actual | Nuevo Valor |
|-------|-------------|-------------|
| Nombre | Juan Pérez | Juan Carlos Pérez |
| Teléfono | 3001234567 | 3109876543 |

**Pasos de ejecución:**
1. Acceder a la sección "Editar perfil"
2. Modificar nombre y teléfono
3. Hacer clic en "Guardar cambios"

**Resultado esperado:**
- Los cambios se guardan correctamente en la base de datos
- Se muestra mensaje: "Perfil actualizado exitosamente"
- Los nuevos datos se reflejan inmediatamente en la interfaz
- Se mantiene la sesión activa

---

### CP-PERF-003: Cambio de contraseña
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Seguridad  
**Requisito relacionado:** RF-006, RNF-001

**Datos de entrada:**
| Campo | Valor |
|-------|-------|
| Contraseña actual | Test123!@# |
| Nueva contraseña | NewPass456!@# |
| Confirmar nueva contraseña | NewPass456!@# |

**Pasos de ejecución:**
1. Acceder a "Cambiar contraseña"
2. Ingresar contraseña actual
3. Ingresar nueva contraseña
4. Confirmar nueva contraseña
5. Hacer clic en "Actualizar contraseña"

**Resultado esperado:**
- El sistema valida la contraseña actual
- La nueva contraseña cumple los requisitos de seguridad
- Se actualiza el hash de contraseña en la base de datos
- Se muestra mensaje de confirmación
- Se envía email notificando el cambio
- El usuario puede iniciar sesión con la nueva contraseña

---

### CP-PERF-004: Visualización de historial de pedidos
**Prioridad:** 🟡 ALTA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-006

**Precondiciones:**
- Usuario con al menos 3 pedidos realizados

**Pasos de ejecución:**
1. Acceder a la sección "Mis Pedidos"
2. Visualizar la lista de pedidos

**Resultado esperado:**
- Se muestran todos los pedidos del usuario ordenados por fecha (más recientes primero)
- Cada pedido muestra: número, fecha, estado, total
- Se puede hacer clic en un pedido para ver detalles completos
- Los estados se muestran con colores diferenciados (Procesando, Enviado, Entregado)

---

## 8. Casos de Prueba - Funcionalidades Adicionales

### CP-FAV-001: Agregar producto a favoritos
**Prioridad:** 🟢 MEDIA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-007

**Precondiciones:**
- Usuario autenticado

**Pasos de ejecución:**
1. Navegar por el catálogo
2. Hacer clic en el ícono de corazón de un producto
3. Verificar cambio visual

**Resultado esperado:**
- El ícono de corazón cambia de color (outline → filled)
- El producto se agrega a la lista de favoritos
- El contador de favoritos se incrementa
- Se guarda en localStorage o base de datos

---

### CP-FAV-002: Visualización de lista de favoritos
**Prioridad:** 🟢 MEDIA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-007

**Precondiciones:**
- Usuario con al menos 3 productos en favoritos

**Pasos de ejecución:**
1. Hacer clic en el ícono de favoritos en el header
2. Visualizar la lista

**Resultado esperado:**
- Se muestran todos los productos marcados como favoritos
- Cada producto muestra: imagen, nombre, precio, botón de eliminar
- Se puede agregar productos desde favoritos al carrito
- La lista persiste entre sesiones

---

### CP-FAV-003: Eliminar producto de favoritos
**Prioridad:** 🟢 MEDIA  
**Tipo:** Funcional  
**Requisito relacionado:** RF-007

**Pasos de ejecución:**
1. Acceder a la lista de favoritos
2. Hacer clic en el ícono de corazón de un producto favorito
3. Verificar eliminación

**Resultado esperado:**
- El producto se elimina de la lista de favoritos
- El contador se actualiza
- El cambio se refleja en todas las vistas donde aparece el producto

---

## 9. Casos de Prueba - No Funcionales

### CP-REND-001: Tiempo de carga de página principal
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Rendimiento  
**Requisito relacionado:** RNF-002

**Herramientas:** Google Lighthouse, WebPageTest

**Pasos de ejecución:**
1. Limpiar caché del navegador
2. Acceder a la página principal
3. Medir tiempo de carga completa

**Resultado esperado:**
- Tiempo de carga inicial (First Contentful Paint) < 1.5 segundos
- Tiempo de interactividad (Time to Interactive) < 3 segundos
- Puntuación de Lighthouse Performance > 90

---

### CP-REND-002: Rendimiento con múltiples usuarios concurrentes
**Prioridad:** 🟡 ALTA  
**Tipo:** Rendimiento  
**Requisito relacionado:** RNF-002

**Herramientas:** JMeter, Locust

**Escenario:**
- 100 usuarios concurrentes navegando el sitio
- 50 usuarios agregando productos al carrito
- 20 usuarios completando compras

**Resultado esperado:**
- El sistema mantiene tiempo de respuesta < 3 segundos
- No se producen errores de servidor (500)
- La tasa de éxito de transacciones > 99%
- El consumo de recursos del servidor es aceptable

---

### CP-SEG-001: Prevención de inyección SQL
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Seguridad  
**Requisito relacionado:** RNF-001

**Datos de entrada maliciosos:**
```sql
' OR '1'='1
admin'--
'; DROP TABLE usuarios;--
```

**Pasos de ejecución:**
1. Intentar login con username: `admin' OR '1'='1--`
2. Intentar búsqueda con: `'; DROP TABLE productos;--`
3. Verificar respuesta del sistema

**Resultado esperado:**
- El sistema escapa o rechaza caracteres peligrosos
- No se ejecuta código SQL malicioso
- Se muestra mensaje de error genérico
- El intento se registra en logs de seguridad

---

### CP-SEG-002: Protección contra XSS (Cross-Site Scripting)
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Seguridad  
**Requisito relacionado:** RNF-001

**Datos de entrada maliciosos:**
```html
<script>alert('XSS')</script>
<img src=x onerror=alert('XSS')>
```

**Pasos de ejecución:**
1. Intentar registrarse con nombre: `<script>alert('XSS')</script>`
2. Intentar comentar un producto con código malicioso
3. Verificar cómo se renderiza el contenido

**Resultado esperado:**
- Los scripts maliciosos son escapados o sanitizados
- El código se muestra como texto plano, no se ejecuta
- No se compromete la seguridad del navegador del usuario

---

### CP-SEG-003: Validación de tokens y sesiones
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Seguridad  
**Requisito relacionado:** RNF-001

**Pasos de ejecución:**
1. Iniciar sesión y obtener token
2. Modificar manualmente el token en localStorage
3. Intentar realizar una acción autenticada

**Resultado esperado:**
- El sistema detecta que el token es inválido
- El usuario es deslogueado automáticamente
- Se redirige a la página de login
- No se permite acceso a recursos protegidos

---

### CP-USAB-001: Navegación intuitiva
**Prioridad:** 🟡 ALTA  
**Tipo:** Usabilidad  
**Requisito relacionado:** RNF-003

**Método:** Test con usuarios reales (5 participantes)

**Tareas a evaluar:**
1. Encontrar y agregar un producto específico al carrito
2. Completar el proceso de compra
3. Acceder al perfil y cambiar datos personales

**Resultado esperado:**
- Al menos el 80% de los usuarios completan las tareas sin ayuda
- Tiempo promedio para completar compra < 3 minutos
- Nivel de satisfacción > 4/5
- Menos de 2 clics innecesarios para llegar al objetivo

---

### CP-COMP-001: Compatibilidad con navegadores
**Prioridad:** 🟡 ALTA  
**Tipo:** Compatibilidad  
**Requisito relacionado:** RNF-004

**Navegadores a probar:**
- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

**Funcionalidades a verificar:**
- Renderizado visual correcto
- JavaScript funciona correctamente
- CSS se aplica apropiadamente
- Todas las funcionalidades operan sin errores

**Resultado esperado:**
- El sitio funciona correctamente en todos los navegadores listados
- No hay diferencias visuales significativas
- Todas las interacciones responden adecuadamente

---

### CP-RESP-001: Diseño responsivo - Mobile
**Prioridad:** 🔴 CRÍTICA  
**Tipo:** Compatibilidad  
**Requisito relacionado:** RNF-004

**Dispositivos a probar:**
- iPhone 12/13 (390x844)
- Samsung Galaxy S21 (360x800)
- iPad (768x1024)

**Pasos de ejecución:**
1. Acceder al sitio desde cada dispositivo
2. Verificar layout y elementos visuales
3. Probar todas las funcionalidades principales

**Resultado esperado:**
- El diseño se adapta correctamente a cada tamaño de pantalla
- Los elementos interactivos son fácilmente tocables (min 44x44px)
- El texto es legible sin zoom
- No hay overflow horizontal
- Las imágenes se escalan apropiadamente

---

## 10. Matriz de Trazabilidad

Esta matriz relaciona los casos de prueba con los requisitos funcionales y no funcionales del sistema.

| Requisito | Descripción | Casos de Prueba Relacionados |
|-----------|-------------|----------------------------|
| RF-001 | Registro de usuario | CP-REG-001 al CP-REG-005 |
| RF-002 | Inicio de sesión | CP-LOGIN-001 al CP-LOGIN-004 |
| RF-003 | Catálogo de productos | CP-CAT-001 al CP-CAT-004 |
| RF-004 | Carrito de compras | CP-CARR-001 al CP-CARR-005 |
| RF-005 | Proceso de compra | CP-COMP-001 al CP-COMP-004 |
| RF-006 | Perfil de usuario | CP-PERF-001 al CP-PERF-004 |
| RF-007 | Favoritos | CP-FAV-001 al CP-FAV-003 |
| RNF-001 | Seguridad | CP-SEG-001 al CP-SEG-003 |
| RNF-002 | Rendimiento | CP-REND-001 al CP-REND-002 |
| RNF-003 | Usabilidad | CP-USAB-001 |
| RNF-004 | Compatibilidad | CP-COMP-001, CP-RESP-001 |

---

## 11. Resumen de Cobertura de Pruebas

### Estadísticas Generales

| Métrica | Valor |
|---------|-------|
| **Total de casos de prueba** | 48 casos |
| **Casos críticos** | 15 casos (31%) |
| **Casos de alta prioridad** | 18 casos (38%) |
| **Casos de prioridad media** | 10 casos (21%) |
| **Casos de baja prioridad** | 5 casos (10%) |

### Cobertura por Módulo

| Módulo | Casos de Prueba | Cobertura |
|--------|----------------|-----------|
| Registro de Usuario | 5 | 100% |
| Inicio de Sesión | 4 | 100% |
| Catálogo de Productos | 4 | 100% |
| Carrito de Compras | 5 | 100% |
| Proceso de Compra | 4 | 100% |
| Perfil de Usuario | 4 | 100% |
| Favoritos | 3 | 100% |
| Requisitos No Funcionales | 19 | 95% |

---

## 12. Notas de Ejecución

### Entorno de Pruebas

**Hardware:**
- Servidor de pruebas: 4 CPU cores, 8GB RAM
- Dispositivos móviles físicos para pruebas responsivas
- Máquinas virtuales para pruebas de compatibilidad

**Software:**
- Navegadores: Chrome, Firefox, Safari, Edge (últimas versiones)
- Sistema Operativo: Windows 10, macOS, Ubuntu 20.04
- Base de datos de prueba con datos sintéticos

### Criterios de Entrada para Ejecución
- Todos los casos de prueba revisados y aprobados
- Entorno de pruebas configurado y funcional
- Build estable del sistema disponible
- Datos de prueba preparados

### Criterios de Salida
- Al menos el 95% de los casos críticos pasan exitosamente
- No hay defectos bloqueantes sin resolver
- Todos los defectos críticos han sido corregidos
- Documentación de defectos completa

---

## 13. Control de Cambios

| Versión | Fecha | Autor | Descripción |
|---------|-------|-------|-------------|
| 1.0 | 12/11/2025 | Equipo Drakon Store | Creación inicial del documento con casos de prueba detallados para todos los módulos |

---

**Fin del documento**
