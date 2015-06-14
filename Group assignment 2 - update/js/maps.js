/* This code is from google maps https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map */
var document;
var window;

function initialize() {
    // prototyping
    "use strict";
    var mapCanvasBris, mapCanvasToo, mapOptionsBris, mapOptionsToo,
        mapBris, mapToo, markerBris, markerToo;
    // Here we tell the maps where in our html we want them
    mapCanvasBris = document.getElementById('map-canvas-brisbane');
    mapCanvasToo = document.getElementById('map-canvas-toowoomba');

    //set up the basic options, latitude, longitude and zoom
    mapOptionsBris = {
        center: new google.maps.LatLng(-27.4697484, 153.0297863),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    mapOptionsToo = {
        center: new google.maps.LatLng(-27.562146, 151.95269),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // create the maps on the canvas given
    mapBris = new google.maps.Map(mapCanvasBris, mapOptionsBris);
    mapToo = new google.maps.Map(mapCanvasToo, mapOptionsToo);

    //place markers
    markerBris = new google.maps.Marker({
        position: new google.maps.LatLng(-27.4697484, 153.0297863),
        map: mapBris
    });
    markerToo = new google.maps.Marker({
        position: new google.maps.LatLng(-27.562146, 151.95269),
        map: mapToo
    });
}

//add DOM listener
google.maps.event.addDomListener(window, 'load', initialize);