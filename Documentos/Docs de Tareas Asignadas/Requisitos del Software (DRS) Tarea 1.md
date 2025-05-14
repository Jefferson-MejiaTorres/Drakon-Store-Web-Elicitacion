# Documento de Requisitos del Sistema (DRS) - Tarea 1: Contexto y Sistema Actual

**Proyecto:** Drakon Store  
**Versión:** 1.1  
**Fecha:** 07 de mayo de 2025

## 1. Introducción

**Drakon Store** es una tienda especializada en la venta de gorras que busca migrar de un modelo de negocio físico a una plataforma de comercio electrónico. Este documento describe el contexto actual del negocio, los participantes clave y los problemas identificados en el sistema manual vigente, siguiendo la metodología de elicitación de requisitos de Durán & Bernárdez (2002).

El objetivo de esta fase es comprender el dominio del problema (venta minorista de gorras) y la situación operativa actual para sentar las bases del desarrollo del sistema web.

## 2. Participantes en el Proyecto

### 2.1 Clientes/Usuarios
* **Propietario de Drakon Store**: Toma decisiones estratégicas y supervisa operaciones.
* **Clientes**: Compradores que actualmente realizan pedidos mediante redes sociales o visitas presenciales.

### 2.2 Desarrolladores

| **Rol** | **Nombre** | **Responsabilidad** |
|---------|------------|---------------------|
| Jefe de Proyecto | Jefferson Mejía Torres | Coordinación general |
| Desarrollador Backend | Luis Lindarte Contreras | Lógica del sistema y base de datos |
| Desarrollador Frontend | Daniel Contreras Caballero | Interfaz de usuario |
| QA/Tester | Carlos Manzano Leal | Pruebas de funcionalidad |
| Documentación | Juan Diego Torres Molina | Documentación técnica |

## 3. Descripción del Sistema Actual

Drakon Store opera actualmente bajo un modelo físico con los siguientes procesos manuales:

### 3.1 Procesos Identificados

1. **Gestión de Pedidos**:
   * Los clientes solicitan productos mediante mensajes directos en redes sociales (Instagram/WhatsApp).
   * No existe integración con pasarelas de pago; los pagos se reciben por transferencias bancarias o en efectivo.

2. **Control de Inventario**:
   * Registro manual en hojas de cálculo sin actualización en tiempo real.
   * Dificultad para rastrear disponibilidad de modelos específicos.

3. **Atención al Cliente**:
   * Comunicación asincrónica (respuestas con demoras).
   * Falta de historial centralizado de interacciones.

### 3.2 Problemas Críticos

* **Limitación geográfica**: Solo atiende clientes locales.
* **Pérdida de ventas**: Por demoras en respuestas o falta de stock visible.
* **Ineficiencia operativa**: Tiempo dedicado a gestionar pedidos manualmente.
* **Falta de trazabilidad**: Imposibilidad de seguimiento de pedidos.
* **Horario limitado**: Atención solo en horario comercial de la tienda física.

## 4. Glosario de Términos

| **Término** | **Definición** |
|-------------|----------------|
| **Gorras** | Producto principal de Drakon Store, en diversos estilos y marcas. |
| **Inventario** | Registro de gorras disponibles para venta. |
| **Pedido** | Solicitud de compra realizada por un cliente. |
| **Pasarela de pago** | Sistema digital para procesar transacciones (ej: PayPal, MercadoPago). |
| **Carrito de compra** | Funcionalidad que permite a los usuarios seleccionar productos para comprar. |
| **Stock** | Cantidad disponible de cada modelo de gorra. |
| **SKU** | Código único identificador de cada producto en inventario. |

## 5. Fuentes de Información

* **Entrevistas** con el propietario (necesidades de digitalización).
* **Observación in situ** del proceso de venta física.
* **Documentación interna**: Hojas de cálculo de inventario y registros de ventas.
* **Referencia sectorial**: Tendencias de e-commerce para minoristas de moda.
* **Análisis de competidores**: Revisión de plataformas web de competencia directa.

## 6. Técnicas Aplicadas

1. **Estudio de documentación**: Análisis de registros manuales de ventas e inventario.
2. **Observación in situ**: Monitoreo del flujo de atención a clientes en la tienda física.
3. **Entrevistas estructuradas**: Reuniones con el propietario para establecer necesidades.
4. **Construcción de glosario**: Unificación de términos clave con el equipo.
5. **Modelado descriptivo**: Documentación de los procesos actuales para identificar problemas.

---

**Próximos pasos**:
* Preparar y realizar reuniones de elicitación/negociación (Tarea 2).
* Diseñar diagramas de casos de uso para la plataforma web.

**Autor:** Jefferson Mejía Torres  
**Revisado por:** Equipo Drakon Store