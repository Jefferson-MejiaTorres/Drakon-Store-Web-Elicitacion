# Documento de Diagramas del Sistema

**Proyecto:** Drakon Store  
**Versión:** 1.0  
**Fecha de revisión:** 17 de septiembre de 2025  
**Autor:** Jefferson Torres

## 1. Introducción

Este documento recopila y explica los principales diagramas utilizados para modelar el sistema Drakon Store Web, siguiendo la metodología de Durán & Bernárdez (2002). Los diagramas permiten visualizar y comprender la estructura, comportamiento y flujos del sistema, facilitando la comunicación entre los participantes del proyecto.

## 2. Índice de Diagramas
- Diagrama de Casos de Uso
- Diagrama de Clases / Modelo de Datos
- Diagramas de Secuencia
- Diagramas de Actividades
- Diagrama de Comportamiento del Sistema

## 3. Justificación de los Diagramas
Cada diagrama incluido responde a la necesidad de documentar distintos aspectos del sistema:
- **Casos de Uso:** Identifican y describen las funcionalidades principales desde la perspectiva del usuario.
- **Clases:** Modelan la estructura de datos y relaciones entre entidades.
- **Secuencia:** Representan la interacción temporal entre objetos/actores en escenarios clave.
- **Actividades:** Describen flujos de procesos o tareas.
- **Comportamiento:** Muestra la interacción y flujo completo del comportamiento del sistema.

## 4. Diagramas

### 4.1 Diagrama de Casos de Uso

<p align="center">
  <img src="../Imagenes/Fase_1_Requisitos/Diagrama de Caso de Uso (Registro).png" alt="Casos de Uso - Registro" width="800">
</p>
<p align="center">
  <em>Diagrama 1: Casos de uso del proceso de registro</em>
</p>

**Descripción:**
- Muestra el proceso de registro de usuario en el sistema, identificando los actores principales (usuario, sistema) y los pasos clave.
- Relaciona el caso de uso con los requisitos funcionales de registro y autenticación.

### 4.2 Diagrama de Clases / Modelo de Datos

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama Modelo De Datos.jpg" alt="Modelo de Datos" width="800">
</p>
<p align="center">
  <em>Diagrama 2: Modelo de datos del sistema</em>
</p>

**Descripción:**
- Presenta las entidades principales del sistema, sus atributos y las relaciones entre ellas.
- Relaciona la estructura de datos con los requisitos de información y las reglas de negocio documentadas.

### 4.3 Diagramas de Secuencia

#### Secuencia de Registro - Paso a Paso

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama de Secuencia(Paso a  Paso).png" alt="Secuencia Registro - Parte 1" width="800">
</p>
<p align="center">
  <em>Diagrama 3: Secuencia de registro - Parte 1</em>
</p>

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama de Secuencia(Paso a  Paso) Parte 2.png" alt="Secuencia Registro - Parte 2" width="800">
</p>
<p align="center">
  <em>Diagrama 4: Secuencia de registro - Parte 2</em>
</p>

**Descripción:**
- Representan el flujo detallado de interacción entre usuario y sistema durante el proceso de registro y validación.
- Explican cómo se gestionan los datos y las respuestas del sistema en cada paso.

#### Secuencia de Compra - Paso a Paso

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama de secuencia compra(Paso a Paso) parte 1.png" alt="Secuencia Compra - Parte 1" width="800">
</p>
<p align="center">
  <em>Diagrama 5: Secuencia de compra - Parte 1</em>
</p>

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama de secuencia compra(Paso a Paso) parte 2.png" alt="Secuencia Compra - Parte 2" width="800">
</p>
<p align="center">
  <em>Diagrama 6: Secuencia de compra - Parte 2</em>
</p>

**Descripción:**
- Muestra paso a paso la interacción entre el usuario y el sistema durante el proceso de compra.
- Incluye validaciones, respuestas y almacenamiento en base de datos.

### 4.4 Diagramas de Actividades

#### Actividad de Registro

<p align="center">
  <img src="../Imagenes/Fase_1_Requisitos/Diagrama de Actividad(Registro).png" alt="Actividad Registro" width="800">
</p>
<p align="center">
  <em>Diagrama 7: Flujo de actividades para el registro de usuario</em>
</p>

#### Actividad de Inicio de Sesión

<p align="center">
  <img src="../Imagenes/Fase_1_Requisitos/Diagrama de Actividad(Inicio de Sesión Usuario).png" alt="Actividad Inicio de Sesión" width="800">
</p>
<p align="center">
  <em>Diagrama 8: Flujo de actividades para inicio de sesión</em>
</p>

#### Actividad de Compra

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama de Actividad(Compra).png" alt="Actividad Compra" width="800">
</p>
<p align="center">
  <em>Diagrama 9: Flujo de actividades para el proceso de compra</em>
</p>

**Descripción:**
- Cada diagrama muestra el flujo de actividades para procesos clave: registro, inicio de sesión y compra.
- Permiten visualizar las decisiones, validaciones y estados involucrados en cada proceso.

### 4.5 Diagrama de Comportamiento del Sistema

<p align="center">
  <img src="../Imagenes/Fase_2_Modelado/Diagrama de Comportamiento.png" alt="Diagrama de Comportamiento del Sistema" >
</p>
<p align="center">
  <em>Diagrama 10: Comportamiento y estados del sistema Drakon Store</em>
</p>

**Descripción:**
- Representa el comportamiento dinámico del sistema y las transiciones entre diferentes estados.
- Muestra cómo el sistema reacciona ante las acciones de los usuarios y eventos del entorno.
- Facilita la comprensión del ciclo de vida de los objetos principales del sistema.

## 5. Conclusiones

Los diagramas presentados permiten comprender de manera integral el funcionamiento y la estructura del sistema Drakon Store Web, facilitando la validación y comunicación de los requisitos y soluciones propuestas.

**Revisado por:** Equipo Drakon Store

---
