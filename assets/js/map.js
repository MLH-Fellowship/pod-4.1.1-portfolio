const map = L.map('map').setView([28.6139,77.2090], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXRoYXJtb2hhbW1hZCIsImEiOiJja3VoeXU0eDQwNHo2Mm9ydmh5bWZuODh6In0.GJzuMwgTS7Ri1Kn8yizuFQ'
}).addTo(map);

const fellows = [
  {
    name: 'Arsalan',
    img: 'arsalan.jpg',
    location: 'Islamabad, Pakistan',
  },
  {
    name: 'Anchal',
    img: 'anchal.jpg',
    location: 'Delhi, India',
  },
  {
    name: 'Aniket',
    img: 'aniket.jpg',
    location: 'Patiala, India',
  },
  {
    name: 'Aryaman',
    img: 'aryaman.jpg',
    location: 'India',
  },
  {
    name: 'Athar',
    img: 'athar.jpg',
    location: 'New Delhi, India',
  },
  {
    name: 'Chiraag',
    img: 'chiraag.jpg',
    location: 'India',
  },
  {
    name: 'Dat',
    img: 'dat.jpg',
    location: 'Vancouver, Canada',
  },
  {
    name: 'Devansh',
    img: 'devansh.jpg',
    location: 'Islamabad, Pakistan'
  },
  {
    name: 'Harshal',
    img: 'arsalan.jpg',
    location: 'Karnataka, India',
  },
  {
    name: 'Gavish',
    img: 'gavish.jpg',
    location: 'Delhi, India',
  },
  {
    name: 'Harshita',
    img: 'harshita.jpg',
    location: 'India',
  },
  {
    name: 'Hasna',
    img: 'hasna.jpg',
    location: 'Dhaka, Bangladesh',
  },
  {
    name: 'Hemansh',
    img: 'hemansh.jpg',
    location: 'Delhi, India',
  },
  {
    name:'Lucas',
    img:'lucas.jpg',
    location:'Rio De Janerio, Brazil'
  },
  {
    name:'Shivam',
    img:'shivam.jpg',
    location:'Lucknow, India'
  },
  {
    name:'Swatilekha',
    img:'swatilekha.jpg',
    location:'Asansol, India'
  },
  {
    name:'Tanmay',
    img:'tanmay.jpg',
    location: 'Surat, India'
  },

]

fellows.forEach((fellow)=>{
  const marker = L.icon({
    iconUrl: `/assets/img/${fellow.img}`,
    iconSize: [60, 60], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    className: 'marker',
  });

  const card = ` 
    <div class="container">
      <h4><b>${fellow.name}</b></h4>
      ${fellow.location}<br/>
      Blockchain Expert
    </div>
    `
  
  L.marker([28.6139,77.2090], {
    icon: marker,
  }).addTo(map).bindPopup(card);
}) 

