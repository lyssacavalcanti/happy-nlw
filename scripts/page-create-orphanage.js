const map = L.map('mapid').setView([-23.9624403,-46.3399801], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./images/map-marker.svg", 
    iconSize: [58,68],
    iconAnchor:[29,68],
})

let marker;

map.on('click', (event) => { 
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


   
