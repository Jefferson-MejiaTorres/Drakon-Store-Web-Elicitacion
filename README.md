<!-- Encabezado visual mejorado y centrado -->
<p align="center">
  <img src="Drakon-Store-Base/images/Logo.png" alt="Logo Drakon Store" width="140">
</p>

<h1 align="center">Drakon Store Web - Elicitación de Requisitos</h1>

<p align="center">
  <a href="https://drakon-store-web.vercel.app/" target="_blank"><strong>🌐 Visita la página desplegada en Vercel</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo-yellow" alt="Estado">
  <img src="https://img.shields.io/badge/Licencia-MIT-blue" alt="Licencia">
  <img src="https://img.shields.io/badge/Metodolog%C3%ADa-Dur%C3%A1n%20%26%20Bern%C3%A1rdez%202002-orange" alt="Metodología">
</p>

---

# Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Integrantes](#integrantes)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características y Funcionalidades](#características-y-funcionalidades)
- [Diseño Responsivo](#diseño-responsivo)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Documentación DRS](#documentación-drs)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Autor y Docente](#autor-y-docente)

---

# Descripción del Proyecto
Drakon Store Web es una plataforma de comercio electrónico especializada en la venta de gorras, diseñada para expandir el alcance de la tienda física y mejorar la experiencia de compra de los clientes. El proyecto automatiza las ventas en línea, optimiza la gestión del inventario y proporciona una interfaz intuitiva y moderna.

**Nota:** La documentación del proyecto ha sido completamente reorganizada siguiendo las fases de ingeniería de software para una mejor navegación y mantenimiento profesional.

# Integrantes
| Nombre                                 | Rol                  |
|----------------------------------------|----------------------|
| Jefferson Mejía Torres                 | Analista / Desarrollador |
| Luis Miguel Lindarte Contreras         | Analista / Desarrollador |
| Daniel Felipe Contreras Caballero      | Analista / Desarrollador |
| David Rojas Rodriguez                  | Analista / Desarrollador |
| Juan Diego Torres               | Analista / Desarrollador |

# Estructura del Proyecto
```text
Drakon-Store-Web-Elicitacion/
├── Drakon-Store-Base/
│   ├── style.css            # Estilos principales del sitio
│   ├── images/Logo.png      # Logo de Drakon Store
├── Documentos/
│   ├── Docs de Tareas Asignadas/
│   │   ├── README.md        # Índice general de la documentación
│   │   ├── Fase_1_Elicitacion_Requisitos/
│   │   │   ├── 01_DRS_Elicitacion_Stakeholders.md
│   │   │   ├── 02_DRS_Casos_de_Uso.md
│   │   │   ├── 03_DRS_Requisitos_Funcionales.md
│   │   │   ├── 04_DRS_Requisitos_No_Funcionales.md
│   │   │   ├── 05_DRS_Especificacion_Detallada.md
│   │   │   ├── 06_DRS_Revision_Final.md
│   │   │   └── 07_Validacion_Requisitos_Encuesta.md
│   │   ├── Fase_2_Analisis_Modelado/
│   │   │   ├── 01_Diagramas_del_Sistema.md
│   │   │   ├── 02_Modelo_Comportamiento_Sistema.docx
│   │   │   └── 03_Metricas_y_Analisis_de_Calidad.md
│   │   ├── Fase_3_Prototipado/
│   │   │   ├── 01_Modelo_Comportamiento_Sistema.md
│   │   │   └── 02_Prototipos_Interfaz_Usuario.md
│   │   └── Imagenes/
│   │       ├── Fase_1_Requisitos/     # Diagramas de casos de uso y actividades
│   │       ├── Fase_2_Modelado/       # Diagramas de secuencia, estados y modelo de datos
│   │       └── Fase_3_Prototipos/     # Prototipos de interfaz de usuario
│   ├── versionado.md        # Hoja de versiones
├── README.md                # Documentación del proyecto
├── versionado.md            # Hoja de versiones del proyecto
├── Contribuciones.md        # Guía para contribuir
├── LICENSE                  # Licencia MIT
└── Proyecto De Ingenieria Del sofware.docx
```

# Tecnologías Utilizadas
- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos personalizados, animaciones y diseño responsivo
- **JavaScript (ES6+)**: Funcionalidades dinámicas y manipulación del DOM
- **Bootstrap 5**: Framework CSS para componentes responsivos y grid system
- **Bootstrap Icons**: Conjunto de iconos para mejorar la interfaz
- **Google Fonts**: Fuentes personalizadas (Montserrat, Nosifer, Raddit Sans)
- **LocalStorage API**: Persistencia de datos del lado del cliente

# Características y Funcionalidades
- **Header Dinámico**: Cambia su apariencia al hacer scroll
- **Menú Responsivo**: Se adapta según el tamaño de pantalla
- **Iconografía Intuitiva**: Sistema visual coherente para toda la interfaz
- **Catálogo Dinámico**: Generación de productos mediante JavaScript
- **Sección de Edición Limitada**: Destacado especial para productos exclusivos
- **Efecto Lupa**: Zoom interactivo en el producto destacado
- **Tarjetas de Producto**: Diseño con efectos de elevación y transiciones
- **Sistema de Favoritos**: Permite marcar/guardar productos favoritos
- **Contador de Favoritos**: Indicador visual de productos guardados
- **Carrito de Compras**: Añade productos al carrito con feedback visual
- **Animación "Bump"**: Efecto visual al añadir productos al carrito
- **LocalStorage**: Guarda selección de favoritos entre sesiones
- **Navegación entre Páginas**: Mantiene el estado del carrito y favoritos

# Diseño Responsivo
El sitio está completamente optimizado para diferentes tamaños de pantalla:
- **Escritorio**: Experiencia completa con sidebar de edición limitada
- **Tablet**: Reorganización del contenido para mejor visualización
- **Móvil**: Interfaz optimizada con controles adaptados para pantallas táctiles
- **Dispositivos pequeños**: Diseño ultra compacto manteniendo todas las funcionalidades

# Cómo Ejecutar el Proyecto
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

# Documentación DRS
| Documento | Descripción | Enlace |
|-----------|-------------|--------|
| **Índice General** | Guía completa de la documentación reorganizada | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/README.md) |
| **Fase 1: Elicitación de Requisitos** | | |
| Tarea 1   | Contexto y sistema actual | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_1_Elicitacion_Requisitos/01_DRS_Elicitacion_Stakeholders.md) |
| Tarea 2   | Reuniones de elicitación/negociación | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_1_Elicitacion_Requisitos/02_DRS_Casos_de_Uso.md) |
| Tarea 3   | Objetivos del sistema | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_1_Elicitacion_Requisitos/03_DRS_Requisitos_Funcionales.md) |
| Tarea 4   | Requisitos de información | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_1_Elicitacion_Requisitos/04_DRS_Requisitos_No_Funcionales.md) |
| Tarea 5   | Requisitos funcionales | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_1_Elicitacion_Requisitos/05_DRS_Especificacion_Detallada.md) |
| Tarea 6   | Requisitos no funcionales | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_1_Elicitacion_Requisitos/06_DRS_Revision_Final.md) |
| Validación | Encuesta de satisfacción de usuarios | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_1_Elicitacion_Requisitos/07_Validacion_Requisitos_Encuesta.md) |
| **Fase 2: Análisis y Modelado** | | |
| Diagramas del sistema | Diagramas UML completos del sistema | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_2_Analisis_Modelado/01_Diagramas_del_Sistema.md) |
| Modelo de comportamiento | Modelo detallado del sistema | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_2_Analisis_Modelado/02_Modelo_Comportamiento_Sistema.docx) |
| Métricas y análisis de calidad | Metodologías MEPS, análisis de fallos y evaluación de calidad del software | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_2_Analisis_Modelado/03_Metricas_y_Analisis_de_Calidad.md) |
| **Fase 3: Prototipado** | | |
| Modelo de comportamiento | Modelado dinámico del sistema | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_3_Prototipado/01_Modelo_Comportamiento_Sistema.md) |
| Prototipos de interfaz | Prototipos de la interfaz de usuario | [Ver](Documentos/Docs%20de%20Tareas%20Asignadas/Fase_3_Prototipado/02_Prototipos_Interfaz_Usuario.md) |
| **Recursos** | | |
| Hoja de versiones | Cambios y autoría | [Ver](versionado.md) |

# Contribuciones
Si deseas contribuir al proyecto, por favor revisa nuestro archivo [Contribuciones.md](Contribuciones.md) donde encontrarás las pautas para:
- Reportar bugs o problemas
- Sugerir nuevas características
- Proceso para enviar pull requests
- Estándares de código

# Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

# Autor y Docente
- Autor principal: Equipo De Desarrollo de Software Drakon Store
- Docente: Ing. Fanny Casadiego

---

<p align="center"><sub>&copy; 2025 Drakon Store - Todos los derechos reservados.</sub></p>

