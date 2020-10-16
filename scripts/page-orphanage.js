const options = {
    dragging: false,
    tochZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-23.9624403,-46.3399801], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "./images/map-marker.svg", 
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]   
})


L  
    .marker([-23.9624403,-46.3399801],{icon})
    .addTo(map)
    