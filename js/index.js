"use strict";
$(document).ready(function () {
  console.log("DOM Ready");
  $.getJSON("http://api.open-notify.org/iss-now.json?callback=?", function (
    data
  ) {
    var lat = data.iss_position.latitude;
    var lng = data.iss_position.longitude;
    var issLocation = [lat, lng];
    console.log(issLocation);
    console.log(lat, lng);
    // See leaflet docs for setting up icons and map layers
    // The update to the map is done here:
    $('.coords').text(issLocation);
    var mymap = L.map("mapid").setView(issLocation, 10);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoom: 0,
        accessToken: MAP_TOKEN,
      }
    ).addTo(mymap);
  });

  $.getJSON("http://api.open-notify.org/astros.json", function(data) {
        // console.log(data.people[0].name)
        for (var i = 0; i < data.people.length; i++) {
            console.log(data.people[i].name);
            var spaceman = '<ul>'
            spaceman += '<li>'+data.people[i].name+'</li>'
            spaceman += '</ul>'
            $('.spaceman').append(spaceman);
        }
        
        
  });
});
