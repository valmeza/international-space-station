"use strict";

(function () {
  $(document).ready(function () {
    console.log("DOM Ready");
    function moveISS() {
      $.getJSON("http://api.open-notify.org/iss-now.json?callback=?", function (
        data
      ) {
        var lat = ["iss_position"]["latitude"];
        var lon = ["iss_position"]["longitude"];

        iss.setLatLng([lat, lon]);
        isscirc.setLatLng([lat, lon]);
        map.panTo([lat, lon], (animate = true));
      });
      setTimeout(moveISS, 5000);
    }
    var mymap = L.map("mapid").setView([51.505, -0.09], 13);

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
})();
