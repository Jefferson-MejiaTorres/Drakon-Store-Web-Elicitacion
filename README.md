<div align="center">
<h1 style="font-size: 110%;">Drakon Store</h1>
</div>

<div align="center">
<img src="Drakon-Store-Base/images/Logo.png" alt="Logo Drakon Store" width="200">
</div>

<div align="center">
<a href="https://drakon-store-web.vercel.app/" target="_blank" style="font-size:1.2em; font-weight:bold; color:#ffd80a; text-decoration:none;">
🌐 Visita la página desplegada de Drakon Store (Vercel)
</a>
</div>

# Drakon-Store-Web-Elicitacion
Repositorio para el desarrollo del Documento de Requisitos del Sistema (DRS) del proyecto Drakon Store Web, como parte de la asignatura Ingeniería de Software. Incluye elicitación de requisitos, análisis, diagramas y control de versiones.

Este repositorio contiene el desarrollo del Documento de Requisitos del Sistema (DRS) del proyecto "Drakon Store Web", como parte de la asignatura Ingeniería de Software.

## Integrantes
- Jefferson David Mejia Torres
- Luis Miguel Lindarte Contreras
- Daniel Felipe Contreras Caballero
- Carlos Andrés Manzano Leal
- Diego Torres

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características y Funcionalidades](#características-y-funcionalidades)
- [Diseño Responsivo](#diseño-responsivo)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Autor](#autor)
- [Docente](#docente)

## Descripción del Proyecto

Drakon Store Web es una plataforma de comercio electrónico especializada en la venta de gorras, diseñada para expandir el alcance de la tienda física y mejorar la experiencia de compra de los clientes. El proyecto automatiza las ventas en línea, optimiza la gestión del inventario y proporciona una interfaz intuitiva y moderna.

## Estructura del Proyecto

```
Drakon-Store-Web-Elicitacion/
├── Drakon-Store-Base/
│   ├── style.css            # Estilos principales del sitio
├── Documentos/
│   ├── Requisitos del Software (DRS).md  # Documento de Requisitos del Software
│   └── imagenes/
│       └── Logo.png         # Logo de Drakon Store
├── README.md                # Documentación del proyecto
├── versionado.md            # Hoja de versiones del proyecto
└── Proyecto De Desarrollo.pdf # Documento PDF del proyecto
```
## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos personalizados, animaciones y diseño responsivo
- **JavaScript (ES6+)**: Funcionalidades dinámicas y manipulación del DOM
- **Bootstrap 5**: Framework CSS para componentes responsivos y grid system
- **Bootstrap Icons**: Conjunto de iconos para mejorar la interfaz
- **Google Fonts**: Fuentes personalizadas (Montserrat, Nosifer, Raddit Sans)
- **LocalStorage API**: Persistencia de datos del lado del cliente

## Características y Funcionalidades

### Navegación y UI
- **Header Dinámico**: Cambia su apariencia al hacer scroll
- **Menú Responsivo**: Se adapta según el tamaño de pantalla
- **Iconografía Intuitiva**: Sistema visual coherente para toda la interfaz

### Productos
- **Catálogo Dinámico**: Generación de productos mediante JavaScript
- **Sección de Edición Limitada**: Destacado especial para productos exclusivos
- **Efecto Lupa**: Zoom interactivo en el producto destacado
- **Tarjetas de Producto**: Diseño con efectos de elevación y transiciones

### Interacción del Usuario
- **Sistema de Favoritos**: Permite marcar/guardar productos favoritos
- **Contador de Favoritos**: Indicador visual de productos guardados
- **Carrito de Compras**: Añade productos al carrito con feedback visual
- **Animación "Bump"**: Efecto visual al añadir productos al carrito

### Almacenamiento y Persistencia
- **LocalStorage**: Guarda selección de favoritos entre sesiones
- **Navegación entre Páginas**: Mantiene el estado del carrito y favoritos

## Diseño Responsivo

El sitio está completamente optimizado para diferentes tamaños de pantalla:

- **Escritorio**: Experiencia completa con sidebar de edición limitada
- **Tablet**: Reorganización del contenido para mejor visualización
- **Móvil**: Interfaz optimizada con controles adaptados para pantallas táctiles
- **Dispositivos pequeños**: Diseño ultra compacto manteniendo todas las funcionalidades

## Cómo Ejecutar el Proyecto

1. Clona este repositorio:
```bash
git clone https://github.com/JeffersonMejia/Drakon-Store-Web-Elicitacion.git
```

2. Navega al directorio del proyecto:
    ```bash
    cd Drakon-Store-Web-Elicitacion
    ```

3. Abre el archivo `index.html` en tu navegador web preferido:
    - Doble clic en el archivo
    - O arrastra el archivo al navegador
    - O usa el comando: `start index.html` (Windows) o `open index.html` (Mac)

No requiere instalación de dependencias adicionales ni configuración de servidor para su funcionamiento básico.

## Contribuciones

Si deseas contribuir al proyecto, por favor revisa nuestro archivo [Contribuciones.md](Contribuciones.md) donde encontrarás las pautas para:

- Reportar bugs o problemas
- Sugerir nuevas características
- Proceso para enviar pull requests
- Estándares de código

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Autor
---

&copy; 2025 Drakon Store - Desarrollado por Jefferson Mejía Torres

## Docente
Ing. Fanny Casadiego

## Contenido
- Documento DRS
- Requisitos funcionales y no funcionales
- Diagramas de casos de uso
- Matriz de rastreabilidad
- Hoja de versiones

