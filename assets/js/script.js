window.onload = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Crear una nueva entidad A-Frame de forma dinámica
        const scene = document.querySelector('a-scene');
        const entity = document.createElement('a-box');
        
        entity.setAttribute('material', 'color: #E74C3C');
        entity.setAttribute('scale', '1 1 1');
        entity.setAttribute('position','0 -1 1')
        // Coloca el objeto ligeramente desplazado para que sea visible cerca
        entity.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        scene.appendChild(entity);
      },
      (err) => console.error('Error al obtener la geolocalización:', err),
      { enableHighAccuracy: true }
    );
  };