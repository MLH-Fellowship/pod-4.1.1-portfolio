var map = L.map('map').setView([28.6139,77.2090], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXRoYXJtb2hhbW1hZCIsImEiOiJja3VoeXU0eDQwNHo2Mm9ydmh5bWZuODh6In0.GJzuMwgTS7Ri1Kn8yizuFQ'
}).addTo(map);

var marker = L.icon({
  iconUrl: `/assets/img/aaron.jpg`,
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  className: 'marker',
});

L.marker([28.6139,77.2090], {
  icon: marker,
})
  .addTo(map)