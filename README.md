# WebAR - Experiencia de Realidad Aumentada en la Web

Aplicación web interactiva de Realidad Aumentada (WebAR) diseñada para renderizar contenido 3D dinámico directamente en el navegador sin requerir la instalación de software adicional. El proyecto aprovecha la cámara del dispositivo para el rastreo de marcadores visuales o geolocalización, superponiendo elementos tridimensionales e interactivos en tiempo real.

---

## Tecnologías Utilizadas

* **HTML5 & CSS3:** Estructuración de la escena web y maquetación de la interfaz de usuario.
* **JavaScript (ES6+):** Lógica principal de interacción, gestión del estado y controladores de eventos.
* **A-Frame:** Framework web para la declaración y creación de escenas 3D/AR mediante componentes HTML semánticos.
* **AR.js:** Librería para el seguimiento de marcadores (*Marker-Based*) y ubicación GPS (*Location-Based*).
* **Three.js:** Motor 3D subyacente encargado del renderizado WebGL, iluminación, cámaras y geometrías.

---

## Requisitos Previos

* **Navegador Web:** Google Chrome, Mozilla Firefox, Safari o Microsoft Edge con soporte para WebGL y WebRTC.
* **Hardware:** Cámara web integrada o periférica funcional (computadora de escritorio, laptop o smartphone).
* **Entorno de Servidor Local:** Servidor HTTP local para el cumplimiento de políticas de seguridad web relacionadas con el permiso de la cámara (`localhost` o un entorno con HTTPS).

---

## Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/WebAR.git
   cd WebAR
   ```

2. **Iniciar un servidor local:**
   * *Opción A (Python 3):*
     ```bash
     python -m http.server 8000
     ```
   * *Opción B (Node.js http-server):*
     ```bash
     npx http-server -p 8000
     ```
   * *Opción C (VS Code):* Abrir el proyecto en Visual Studio Code y ejecutar la extensión **Live Server**.

3. **Abrir en el navegador:**
   Navegar a `http://localhost:8000` y autorizar el acceso a la cámara cuando el navegador lo solicite.

---

## Estructura del Código

```text
WebAR/
├── assets/
│   ├── models/       # Archivos y modelos 3D (.gltf, .glb)
│   ├── markers/      # Marcadores de rastreo (.patt, .png)
│   └── textures/     # Imágenes y mapas de textura
├── css/
│   └── styles.css    # Estilos de interfaz y superposición UI
├── js/
│   └── app.js        # Lógica de interacciones y componentes custom de A-Frame/Three.js
├── index.html        # Estructura principal de la escena AR y carga de dependencias
└── README.md         # Documentación del proyecto
```
## Nota

Para el buen funcionamiento, es necesario un dispositivo movil que cuente con una camara y un gps. Probarlo en un computador mostrará un mensaje de error.
