window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

const check = mobileCheck() //for mobile view

let center = [24.2155, -12.8858]
if(check){
  center = [28.5592, 77.2933]
}

const map = L.map('map').setView(center, 3);

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

