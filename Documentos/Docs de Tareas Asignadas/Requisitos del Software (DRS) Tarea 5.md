# Documento de Requisitos del Sistema (DRS) - Tarea 5: Requisitos Funcionales

**Proyecto:** Drakon Store  
**Versión:** 1.0  
**Fecha:** 14 de mayo de 2025

## 1. Introducción

Esta tarea identifica y detalla los requisitos funcionales del sistema Drakon Store, siguiendo la metodología de Durán & Bernárdez (2002). Se describen los actores principales y los casos de uso fundamentales, empleando las plantillas recomendadas y asegurando la trazabilidad con los objetivos y requisitos de información previamente definidos.

## 2. Identificación de Actores

| Actor            | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Cliente**      | Usuario que navega, selecciona productos y realiza compras en la tienda.    |
| **Administrador**| Responsable de la gestión de productos, inventario y pedidos.               |
| **Vendedor**     | Personal que atiende consultas y gestiona pedidos en la plataforma.         |
| **Pasarela de Pago** | Sistema externo que procesa los pagos electrónicos.                     |

## 3. Requisitos Funcionales (Casos de Uso)

### 3.1. Caso de Uso: Registrar Pedido

| Elemento         | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Nombre**       | Registrar Pedido                                                            |
| **Actor principal** | Cliente                                                                  |
| **Descripción**  | El cliente selecciona productos, los añade al carrito y realiza un pedido.  |
| **Precondición** | El cliente ha iniciado sesión o proporciona datos de contacto.              |
| **Flujo principal** | 1. El cliente navega por el catálogo.<br>2. Añade productos al carrito.<br>3. Accede al carrito y confirma los productos.<br>4. Ingresa datos de envío y pago.<br>5. El sistema registra el pedido y muestra confirmación. |
| **Alternativas** | El cliente modifica cantidades o elimina productos del carrito antes de confirmar. |
| **Excepciones**  | El stock es insuficiente para algún producto (el sistema lo notifica y bloquea la compra). |
| **Postcondición**| El pedido queda registrado y pendiente de pago/envío.                       |

### 3.2. Caso de Uso: Gestionar Inventario

| Elemento         | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Nombre**       | Gestionar Inventario                                                        |
| **Actor principal** | Administrador                                                            |
| **Descripción**  | El administrador puede agregar, modificar o eliminar productos y ajustar stock. |
| **Precondición** | El administrador ha iniciado sesión.                                        |
| **Flujo principal** | 1. Accede al módulo de inventario.<br>2. Agrega o edita productos.<br>3. Ajusta el stock según movimientos.<br>4. Guarda los cambios. |
| **Alternativas** | El administrador cancela la operación antes de guardar.                     |
| **Excepciones**  | Error de validación de datos (el sistema muestra mensaje y no guarda cambios). |
| **Postcondición**| El inventario queda actualizado en el sistema.                              |

### 3.3. Caso de Uso: Procesar Pago

| Elemento         | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Nombre**       | Procesar Pago                                                               |
| **Actor principal** | Cliente / Pasarela de Pago                                                |
| **Descripción**  | El cliente realiza el pago del pedido a través de la pasarela integrada.    |
| **Precondición** | El pedido ha sido registrado y está pendiente de pago.                      |
| **Flujo principal** | 1. El cliente selecciona método de pago.<br>2. El sistema redirige a la pasarela.<br>3. El cliente completa el pago.<br>4. El sistema recibe confirmación y actualiza el estado del pedido. |
| **Alternativas** | El cliente cancela el pago (el pedido queda pendiente).                     |
| **Excepciones**  | Fallo en la pasarela (el sistema notifica y permite reintentar).            |
| **Postcondición**| El pago queda registrado y el pedido pasa a estado "pagado".               |

### 3.4. Caso de Uso: Consultar Historial de Pedidos

| Elemento         | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Nombre**       | Consultar Historial de Pedidos                                              |
| **Actor principal** | Cliente / Administrador                                                   |
| **Descripción**  | Permite visualizar el historial de pedidos realizados y su estado.          |
| **Precondición** | El usuario ha iniciado sesión.                                              |
| **Flujo principal** | 1. Accede a la sección de historial.<br>2. Visualiza la lista de pedidos y detalles. |
| **Alternativas** | El usuario filtra por fecha o estado.                                       |
| **Excepciones**  | No existen pedidos registrados (el sistema muestra mensaje informativo).     |
| **Postcondición**| El usuario visualiza la información solicitada.                             |

## 4. Requisitos Funcionales en Lenguaje Natural (complementarios)

- El sistema debe permitir a los clientes buscar productos por nombre, categoría o características.
- El sistema debe enviar notificaciones al cliente sobre el estado de su pedido.
- El sistema debe restringir la edición de pagos confirmados.
- El sistema debe proteger los datos personales de los usuarios.

## 5. Revisión de Conflictos

Tras el análisis de los requisitos funcionales identificados y su contraste con los objetivos y requisitos de información de las tareas previas, no se detectaron conflictos entre los requisitos funcionales propuestos. En caso de surgir conflictos en futuras validaciones con usuarios o equipo de desarrollo, se documentarán y resolverán según la metodología.

## 6. Trazabilidad entre Objetivos y Requisitos Funcionales

| Objetivo         | Requisito Funcional Relacionado                                             |
|------------------|---------------------------------------------------------------------------|
| OBJ-01: Digitalizar ventas | Registrar Pedido, Procesar Pago, Consultar Historial de Pedidos |
| OBJ-02: Automatizar inventario | Gestionar Inventario |
| OBJ-03: Mejorar atención al cliente | Consultar Historial de Pedidos, Notificaciones al cliente |
| OBJ-04: Integrar pasarela de pago | Procesar Pago |
| OBJ-05: Ampliar cobertura geográfica | Registrar Pedido |
| OBJ-06: Facilitar gestión administrativa | Gestionar Inventario, Consultar Historial de Pedidos |
| OBJ-07: Garantizar seguridad y privacidad | Protección de datos personales, Restricción de edición de pagos |

## 7. Técnica Aplicada

Se empleó la plantilla de casos de uso (sección 5.4) y la plantilla de actores (sección 5.3) de la metodología de Durán & Bernárdez (2002). Se revisaron los requisitos funcionales para detectar posibles conflictos y se aseguró la trazabilidad con los objetivos y requisitos de información definidos en tareas previas.

## 8. Próximos pasos

* Validar los requisitos funcionales con los usuarios y el equipo de desarrollo.
* Especificar requisitos no funcionales y diagramas de casos de uso.

**Autor:** Jefferson Torres
**Revisado por:** Equipo Drakon Store
