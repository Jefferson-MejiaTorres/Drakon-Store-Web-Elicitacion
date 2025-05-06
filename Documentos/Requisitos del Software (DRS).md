# Documento de Requisitos del Software (DRS) – Tarea 1

## 1. Introducción

Este documento tiene como objetivo recopilar información sobre el dominio del problema y describir la situación actual del sistema del proyecto **Drakon Store**, una solución diseñada para gestionar los procesos de ventas, productos, usuarios y pagos en una tienda virtual.

La presente tarea se enmarca en la fase inicial del ciclo de vida del desarrollo de software, correspondiente a la obtención de información esencial para la comprensión del contexto actual y del dominio en el que se inserta el sistema a desarrollar.

---

## 2. Participantes del Proyecto

### 2.1 Clientes
- **Administrador General** de Drakon Store.
- **Usuarios finales** (clientes que compran en la tienda virtual).
- **Encargado de inventario y pagos**.
- **Tesorera/Secretaria** (en el caso de la tienda asociada a una gestión condominial).

### 2.2 Desarrolladores
- **Jefferson David Mejia Torres** – Responsable del análisis, diseño y desarrollo principal del sistema Drakon Store.
- **Luis Miguel Lindarte Contreras** – Encargado de la documentación y apoyo en el modelado de requisitos.
- **Daniel Felipe Contreras Caballero** – Responsable de la elaboración de diagramas y apoyo en la validación de requisitos.
- **Carlos Andrés Manzano Leal** – Encargado de la gestión de versiones y control de cambios en el repositorio.
- **Diego Torres** – Apoyo en la revisión de requisitos y pruebas iniciales del sistema.
- **Equipo técnico de apoyo** (en caso de ampliación del proyecto).

---

## 3. Descripción del Sistema Actual

Actualmente, la gestión de Drakon Store se realiza de forma **manual** o mediante herramientas digitales básicas como hojas de cálculo, mensajes directos para pedidos, y anotaciones físicas. No existe un sistema centralizado que integre los procesos de:

- Registro de productos.
- Control de inventario.
- Gestión de usuarios.
- Procesamiento de pagos.
- Visualización y generación de reportes.

Este modelo presenta varios problemas:

- **Falta de trazabilidad** de las ventas y pagos.
- **Errores humanos frecuentes** en registros manuales.
- **Poca seguridad y respaldo de datos**.
- **Retrasos en la notificación** de deudas o confirmaciones de compra.

#### 3.1 Procesos actuales identificados

1. **Registro de productos**: Se realiza en hojas de cálculo sin control de inventario automatizado.
2. **Gestión de clientes**: Se basa en comunicaciones manuales por redes sociales.
3. **Pagos**: Se reciben por métodos externos (transferencias, pagos en físico) sin verificación automática.
4. **Seguimiento de deudas**: En caso de incumplimientos, se hace una revisión manual y se notifica por medios informales.
5. **Restricciones por deuda**: Si un cliente no está al día, no puede modificar pedidos. Con más de 3 meses de deuda, se le contacta para acuerdos de pago.

---

## 4. Glosario de Términos

| Término          | Definición                                                                 |
|------------------|---------------------------------------------------------------------------|
| Drakon Store     | Nombre del sistema que se está desarrollando para gestionar una tienda.  |
| Cliente          | Usuario final que compra productos en la tienda virtual.                 |
| Administrador    | Persona responsable de gestionar productos, usuarios y reportes.         |
| Inventario       | Conjunto de productos disponibles en la tienda.                          |
| Reporte de ventas| Documento generado que contiene detalles de las transacciones.           |
| Pagos            | Registros de las compras efectuadas por los clientes.                    |
| Deudor           | Cliente que no ha realizado el pago correspondiente en tiempo.           |
| Pagaré           | Documento formal para comprometerse a pagar una deuda en plazos.         |
| Tesorera         | Persona encargada del control económico en el entorno administrativo.    |
| Secretaria       | Persona que asiste en el manejo de la información y reportes.            |

---

## 5. Fuentes de Información

Para la elaboración de este documento se utilizaron las siguientes fuentes:

- Observación directa de procesos actuales de la tienda.
- Entrevistas informales con el administrador y participantes.
- Apuntes y documentos previos sobre métodos de control de inventario.
- Referencias de metodologías de elicitación (Durán & Bernárdez, 2002).
- Análisis de flujos existentes en herramientas como Excel.

---

## 6. Técnicas Aplicadas

- **Estudio de documentación**: Revisión de registros actuales de productos y ventas.
- **Observación in situ**: Análisis de cómo se llevan los procesos actualmente.
- **Consulta a expertos**: Preguntas realizadas al propietario de la tienda y encargados.
- **Glosario colaborativo**: Elaborado en base a los términos más usados en la tienda.
- **Modelado descriptivo**: Redacción de los flujos actuales de trabajo del sistema.

---

**Versión del documento**: 1.0  
**Fecha**: 06 de mayo de 2025  
**Autor**: Jefferson Torres

