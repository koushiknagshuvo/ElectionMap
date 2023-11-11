// <<======= Leaflet Providers/Basemap/Tile layer =======>>
// OpenStreet Map Layer
var osmMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 6,
    maxZoom: 20,
    maxNativeZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    attribution: false,
});

// Google Map Layer
var googleMap = L.tileLayer('http://mts3.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    minZoom: 5,
    maxZoom: 20,
    maxNativeZoom: 19,
    minNativeZoom: 7,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Google Satelite Layer or Google Hybrid Map
var googleSat = L.tileLayer('http://mts2.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    minZoom: 5,
    maxZoom: 20,
    maxNativeZoom: 19,
    minNativeZoom: 7,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

// Esri World Imagery Map Layer
var esriImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    minZoom: 6,
    maxZoom: 20,
    maxNativeZoom: 18,
    attribution: '&copy; ESRI',
    attribution: false,
});

// <<======= Set View & Zoom Control =======>>
var MyMap = L.map("MainMap", {
    center: [23.830966389465885, 90.41908094341086],

    zoom: 7,
    minZoom: 6,
    maxZoom: 20,
    maxNativeZoom: 19,
    zoomControl: true,
    // layers: [pbsBoundary],
    layers: [esriImagery],
});


// <<========= BREB HQ =========>>
var customiconNew = L.icon({
    iconUrl: 'images/icon/location_4.png',
    iconUrl: 'images/icon/HQ7.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
});

var brebHQ = L.marker([23.830966389465885, 90.41908094341086], {
    icon: customiconNew
}).addTo(MyMap).bindPopup("<b>BREB HQ</b>").openPopup();

// <<========= Add Layer Control =========>>
var baseMaps = {
    "OpenStreet Map": osmMap,
    "ESRI Imagery": esriImagery,
};

var overlays = {

};

L.control.layers(baseMaps, overlays, {
    // collapsed: false,
    // autoZIndex:true,
}).addTo(MyMap);


// <<========= Search Bar =========>>
L.Control.geocoder().addTo(MyMap);

// <<========= Watermark =========>>
L.Control.Watermark = L.Control.extend({
    onAdd: function (map) {
        var img = L.DomUtil.create('img');
        img.src = 'images/logo/Logo.png';
        img.style.width = '44px';
        return img;
    },
    onRemove: function (map) {},
});
L.control.watermark = function (opts) {
    return new L.Control.Watermark(opts);
}
L.control.watermark({
    position: 'bottomright'
}).addTo(MyMap);


// <<========= Add Scale Bar =========>>
L.control.scale({
    metric: true,
    imperial: true,
    maxWidth: 100,
    updateWhenIdle: true,
    position: 'bottomleft',
}).addTo(MyMap);
