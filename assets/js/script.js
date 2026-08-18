// Convierte grados a radianes
const toRad = (degrees) => degrees * (Math.PI / 180);
// Convierte radianes a grados
const toDeg = (radians) => radians * (180 / Math.PI);

/**
 * Calcula una nueva coordenada GPS a partir de un punto inicial,
 * una distancia en metros y un rumbo (bearing) en grados.
 */
function calculateDestinationCoordinate(lat, lon, distanceInMeters, bearingInDegrees) {
    const R = 6371000; // Radio de la Tierra en metros
    const d = distanceInMeters;
    const brng = toRad(bearingInDegrees);
    const lat1 = toRad(lat);
    const lon1 = toRad(lon);

    const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(d / R) +
    Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng)
    );

    const lon2 = lon1 + Math.atan2(
    Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1),
    Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2)
    );

    return {
    latitude: toDeg(lat2),
    longitude: toDeg(lon2)
    };
}

// Inicializar al cargar la página
window.addEventListener('load', () => {
    const cameraEl = document.querySelector('[gps-camera]');

    // Escuchar el primer evento de actualización de posición GPS que dispara AR.js
    cameraEl.addEventListener('gps-camera-update-position', (e) => {
    const currentLat = e.detail.position.latitude;
    const currentLon = e.detail.position.longitude;

    // Obtener el rumbo (orientación) actual del dispositivo si está disponible, sino asumir 0° (Norte)
    let heading = 0;
    if (e.detail.position.heading !== undefined && !isNaN(e.detail.position.heading)) {
        heading = e.detail.position.heading;
    }

    // Distancia deseada hacia al frente (en metros)
    const distanceMeters = 5;

    // Calcular la coordenada destino exactamente frente al usuario
    const targetCoords = calculateDestinationCoordinate(
        currentLat,
        currentLon,
        distanceMeters,
        heading
    );

    // Crear la entidad del cubo
    const scene = document.querySelector('a-scene');
    const box = document.createElement('a-box');

    box.setAttribute('material', 'color: #E74C3C; opacity: 0.9;');
    box.setAttribute('scale', '2 2 2'); // Tamaño del cubo (2m x 2m x 2m)
    box.setAttribute('gps-entity-place', `latitude: ${targetCoords.latitude}; longitude: ${targetCoords.longitude};`);

    scene.appendChild(box);
    }, { once: true }); // Executar solo una vez al obtener la posición
});