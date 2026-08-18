window.onload = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const scene = document.querySelector('a-scene');

        const entity = document.createElement('a-entity');
        entity.setAttribute('gps-entity-place', `latitude: ${latitude - 0.0001}; longitude: ${longitude - 0.0001};`);
        entity.setAttribute('gltf-model','assets/3Dmodels/Mario64/scene.gltf');
        entity.setAttribute('scale','1 1 1');
        entity.setAttribute('look-at', '[gps-camera]');

        scene.appendChild(entity);
        },
        (err) => console.error('Error al obtener la geolocalización:', err),
        { enableHighAccuracy: true }
    );
};
  