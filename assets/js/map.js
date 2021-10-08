const map = L.map('map').setView([24.2155, -12.8858], 3);

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
    title:'Dev Advocate',
    cord: [33.6844, 73.0479]
  },
  {
    name: 'Anchal',
    img: 'anchal.jpg',
    location: 'Delhi, India',
    title:'Resolving bugs',
    cord: [28.6139, 77.2000]
  },
  {
    name: 'Aniket',
    img: 'aniket.jpg',
    location: 'Patiala, India',
    title:'Dev Advocate',
    cord: [30.3398, 76.3869]
  },
  {
    name: 'Aryaman',
    img: 'aryaman.jpg',
    location: 'India',
    title:'Dev Advocate',
    cord: [28.6139, 77.2050]
  },
  {
    name: 'Chiraag',
    img: 'chiraag.jpg',
    location: 'India',
    title:'Dev Advocate',
    cord: [-36.892857, 80.938022]
  },
  {
    name: 'Dat',
    img: 'dat.jpg',
    location: 'Vancouver, Canada',
    title:'Writing scuffed code',
    cord: [49.2577143,  -123.1939432]
  },
  {
    name: 'Devansh',
    img: 'devansh.jpg',
    location: 'Ghaziabad,India',
    title:'Python Developer',
    cord: [28.6624, 77.3734]
  },
  {
    name: 'Harshal',
    img: 'harshal.jpg',
    location: 'Karnataka, India',
    title:'Busy creating cool stuffs',
    cord: [12.9716, 77.5946]
  },
  {
    name: 'Gavish',
    img: 'gavish.jpg',
    location: 'Delhi, India',
    title:'Dev Advocate',
    cord: [28.6139, 77.2750]
  },
  {
    name: 'Harshita',
    img: 'harshita.jpg',
    location: 'India',
    title:'Dev Advocate',
    cord: [-216.892857, 80.938022]
  },
  {
    name: 'Hasna',
    img: 'hasna.jpg',
    location: 'Dhaka, Bangladesh',
    title:'Dev Advocate',
    cord: [23.7986, 90.3507]
  },
  {
    name: 'Hemansh',
    img: 'hemansh.jpg',
    location: 'Delhi, India',
    title:'Arigato Gosaymas',
    cord: [28.5592, 77.2033]
  },
  {
    name:'Lucas',
    img:'lucas.jpg',
    location:'Rio De Janerio, Brazil',
    title:'Dev Advocate',
    cord: [-22.908333, -43.196388]
  },
  {
    name:'Shivam',
    img:'shivam.jpg',
    location:'Lucknow, India',
    title:'Keeping it decent with CSS',
    cord: [26.892857, 80.938022]
  },
  {
    name:'Swatilekha',
    img:'swatilekha.jpg',
    location:'Asansol, India',
    title:'Wonders visibly while creating',
    cord: [23.6932828, 86.9437886]
  },
  {
    name:'Tanmay',
    img:'tanmay.jpg',
    location: 'Gujarat, India',
    title:'Definitely overthinking',
    cord: [21.1702, 72.8311]
  },
  {
    name: 'Athar',
    img: 'athar.jpg',
    location: 'New Delhi, India',
    title:'Think Twice,Code Once',
    cord: [28.5592, 77.2933]
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
      ${fellow.title}
    </div>
    `
  
  L.marker(fellow.cord, {
    icon: marker,
  }).addTo(map).bindPopup(card);
}) 

