window.onload = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const scene = document.querySelector('a-scene');

        const entity = document.createElement('a-entity'); 
        entity.setAttribute('gps-entity-place', `latitude: ${latitude - 0.00006}; longitude: ${longitude};`);
        entity.setAttribute('gltf-model','assets/3Dmodels/Mario64/scene.gltf');
        entity.setAttribute('scale','5 5 5');
        entity.setAttribute('look-at','[gps-camera]');
        scene.appendChild(entity);       
        
        let Lat =  document.getElementById('latitude');
        let Lon =  document.getElementById('longitude');
        Lat.innerHTML=`Latitude: ${latitude}`;
        Lon.innerHTML=`Longitude: ${longitude}`;

        },
        (err) => console.error('Error al obtener la geolocalización:', err),
        { enableHighAccuracy: true }
    );
};
