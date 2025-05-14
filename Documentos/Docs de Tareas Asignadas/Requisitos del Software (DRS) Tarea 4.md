# Documento de Requisitos del Sistema (DRS) - Tarea 4: Requisitos de Información

**Proyecto:** Drakon Store  
**Versión:** 1.0  
**Fecha:** 13 de mayo de 2025

## 1. Introducción

Esta tarea identifica los requisitos de almacenamiento de información y las restricciones o reglas de negocio que debe cumplir el sistema software de Drakon Store. Se parte de la información obtenida en las tareas previas y se utilizan las plantillas recomendadas por la metodología de Durán & Bernárdez (2002).

## 2. Requisitos de Almacenamiento de Información

| **Código** | **Requisito de Información** | **Descripción** | **Prioridad** | **Conflictos/Revisión** |
|------------|------------------------------|-----------------|---------------|------------------------|
| INF-01 | Almacenar datos de productos | El sistema debe registrar nombre, descripción, precio, stock, SKU, categoría e imagen de cada gorra. | Alta | Sin conflictos actuales |
| INF-02 | Almacenar datos de clientes | El sistema debe guardar nombre, correo, dirección, historial de compras y preferencias de los clientes. | Alta | Sin conflictos actuales |
| INF-03 | Almacenar pedidos | El sistema debe registrar cada pedido con fecha, productos, cantidades, estado, método de pago y cliente asociado. | Alta | Sin conflictos actuales |
| INF-04 | Almacenar movimientos de inventario | El sistema debe guardar entradas, salidas y ajustes de inventario para trazabilidad. | Media | Sin conflictos actuales |
| INF-05 | Almacenar historial de pagos | El sistema debe registrar los pagos realizados, su estado y método. | Alta | Sin conflictos actuales |
| INF-06 | Almacenar interacciones de atención al cliente | El sistema debe guardar mensajes, solicitudes y respuestas para seguimiento. | Media | Sin conflictos actuales |

## 3. Requisitos de Restricciones de Información y Reglas de Negocio

| **Código** | **Restricción/Regla de Negocio** | **Descripción** | **Prioridad** | **Conflictos/Revisión** |
|------------|----------------------------------|-----------------|---------------|------------------------|
| REG-01 | Unicidad de SKU | Cada producto debe tener un SKU único en el sistema. | Alta | Sin conflictos actuales |
| REG-02 | Stock no negativo | No se pueden registrar ventas si el stock es insuficiente. | Alta | Sin conflictos actuales |
| REG-03 | Validación de datos de cliente | Los datos de cliente deben ser válidos y completos para procesar pedidos. | Alta | Sin conflictos actuales |
| REG-04 | Integridad de pedidos | Un pedido debe estar asociado a un cliente y contener al menos un producto. | Alta | Sin conflictos actuales |
| REG-05 | Restricción de edición de pagos | Los registros de pagos no pueden ser modificados una vez confirmados. | Alta | Sin conflictos actuales |
| REG-06 | Privacidad de información | Los datos personales de clientes deben ser protegidos y accesibles solo por usuarios autorizados. | Alta | Sin conflictos actuales |

## 4. Técnica Aplicada

Se utilizaron las plantillas de requisitos de almacenamiento y restricciones de información (sección 5.2 de la metodología) para identificar y detallar los datos relevantes y las reglas de negocio, asegurando alineación con los objetivos y necesidades del cliente.

## 5. Próximos pasos

* Especificar requisitos funcionales y no funcionales detallados (Tarea 5).
* Validar los requisitos de información con los usuarios y el equipo de desarrollo.

**Autor:** Jefferson Mejía Torres  
**Revisado por:** Equipo Drakon Store
