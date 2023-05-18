import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

// This line is necessary because Parcel hosts static assets with a different path than the source code
const iconUrl = new URL("../assets/img/icons/icon-location.svg", import.meta.url).pathname;

const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 2,
  maxZoom: 15,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// TODO: fix iconAnchor
L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  iconRetinaUrl: iconUrl,
  shadowUrl: "",
  iconSize: [46, 56],
  iconAnchor: [23, 56],
  popupAnchor: [0, 0],
  tooltipAnchor: [0, 0],
  shadowSize: [0, 0],
});

map.removeControl(map.zoomControl);

export default map;
