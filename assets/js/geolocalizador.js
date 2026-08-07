function obtenerUbicacion() {
  // 1. Verificar si el navegador soporta Geolocalización
  if (!navigator.geolocation) {
    console.error('La geolocalización no está soportada por este navegador.');
    return;
  }

  // Opciones de configuración (opcional)
  const opciones = {
    enableHighAccuracy: true, // Intenta obtener la máxima precisión (GPS)
    timeout: 5000,            // Tiempo máximo de espera (5 segundos)
    maximumAge: 0             // No usar una posición almacenada en caché
  };

  // 2. Solicitar la posición actual
  navigator.geolocation.getCurrentPosition(exito, error, opciones);
}

// Se ejecuta si el usuario acepta y se obtiene la ubicación
function exito(posicion) {
    const SandBox = document.getElementById("SandBox");
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;
    const precision = posicion.coords.accuracy; // Precisión en metros

    console.log(`Latitud: ${latitud}`);
    console.log(`Longitud: ${longitud}`);
    console.log(`Precisión: ±${precision} metros`);

        
    SandBox.innerHTML = `    
        <a-entity 
            material='color: red' 
            geometry='primitive: box' 
            gps-entity-place="latitude: ${latitud}; longitude: ${longitud}" 
            scale="1 1 1">
        </a-entity>`
}

// Se ejecuta si hay un error o el usuario rechaza el permiso
function error(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      console.warn('El usuario denegó el permiso de ubicación.');
      break;
    case err.POSITION_UNAVAILABLE:
      console.error('La información de ubicación no está disponible.');
      break;
    case err.TIMEOUT:
      console.error('La solicitud para obtener la ubicación expiró.');
      break;
    default:
      console.error('Ocurrió un error desconocido al obtener la ubicación.');
      break;
  }
}

obtenerUbicacion();