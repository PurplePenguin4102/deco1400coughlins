/* This code is from google maps https://developers.google.com/maps/tutorials/fundamentals/adding-a-google-map */

function initialize() {
        // Here we tell the maps where in our html we want them
        var mapCanvasBris = document.getElementById('map-canvas-brisbane');
        var mapCanvasToo = document.getElementById('map-canvas-toowoomba');

        //set up the basic options, latitude, longitude and zoom
        var mapOptionsBris = {
          center: new google.maps.LatLng(-27.4697484, 153.0297863),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var mapOptionsToo = {
          center: new google.maps.LatLng(-27.562146, 151.95269),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        // create the maps on the canvas given
        var mapBris = new google.maps.Map(mapCanvasBris, mapOptionsBris);
        var mapToo = new google.maps.Map(mapCanvasToo, mapOptionsToo);

        //place markers
        var markerBris = new google.maps.Marker({
  			position: new google.maps.LatLng(-27.4697484, 153.0297863),
  			map: mapBris
        });
        var markerToo = new google.maps.Marker({
  			position: new google.maps.LatLng(-27.562146, 151.95269),
  			map: mapToo
        }); 
      }

//add DOM listener
google.maps.event.addDomListener(window, 'load', initialize);