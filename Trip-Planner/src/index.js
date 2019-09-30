console.log("HELLO")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoidy1qb3kiLCJhIjoiY2sxNm05cW1rMGVraDNhbzg0NmJ4c2k2ZiJ9.mD-V5it440Me4R28-sLEyA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


var el = document.createElement('div');
el.className = 'marker';

new mapboxgl.Marker(el).setLngLat([-74.009151, 40.705086]).addTo(map);
