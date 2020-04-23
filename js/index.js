"use strict";
$(document).ready(function () {
  console.log("DOM Ready");
  $.getJSON("http://api.open-notify.org/iss-now.json?callback=?", function (
    data
  ) {
    var lat = data.iss_position.latitude;
    var lng = data.iss_position.longitude;
    console.log(lat, lng);
    // See leaflet docs for setting up icons and map layers
    // The update to the map is done here:
  });

  var mymap = L.map("mapid").setView([lat, lng], 13);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: MAP_TOKEN,
    }
  ).addTo(mymap);
});
