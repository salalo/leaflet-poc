var map = L.map("map").setView([51.505, -0.09], 13);

function addPolyline() {
  var osmUrl = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  var osmAttrib = "Map data © OpenStreetMap contributors";
  L.tileLayer(osmUrl, {
    minZoom: 0,
    maxZoom: 19,
    attribution: osmAttrib,
  }).addTo(map);

  var coordinates = [
    [45.2750072361, 13.7187695503],
    [45.2757622049, 13.7198746204],
    [45.2763963762, 13.7197780609],
    [45.2787216541, 13.7263333797],
    [45.2787216812, 13.72808218],
    [45.2776703394, 13.7291487239],
    [45.2746230524, 13.7283730778],
    [45.2739752209, 13.727448813],
    [45.2735003071, 13.7272656303],
    [45.2732175518, 13.7276246501],
    [45.2721955264, 13.7278538799],
    [45.2714755129, 13.7272248028],
    [45.2717871648, 13.7257949873],
    [45.2728658637, 13.7252000246],
    [45.2737827215, 13.7252887813],
    [45.2744277756, 13.7251200459],
    [45.2747125506, 13.7229381908],
    [45.2746349263, 13.7213142352],
    [45.2749326769, 13.7207699906],
    [45.2756791761, 13.7202823162],
  ];

  var polylineOptions = {
    // The user can add new polylines by clicking anywhere on the map:
    newPolylines: true,
    newPolylineConfirmMessage: "Add a new polyline here?",
    // Show editable markers only if less than this number are in map bounds:
    maxMarkers: 20,
  };

  var polyline = L.Polyline.PolylineEditor(coordinates, polylineOptions).addTo(
    map
  );
  map.fitBounds(polyline.getBounds());

  var dumpPoints = function () {
    var pointsTextArea = document.getElementById("pointsTextArea");
    pointsTextArea.innerHTML = "";
    map.getEditablePolylines().forEach(function (polyline) {
      var points = polyline.getPoints();
      points.forEach(function (point) {
        var latLng = point.getLatLng();
        console.log(point.context);
        pointsTextArea.innerHTML +=
          "originalPointNo=" +
          (point.context ? point.context.originalPointNo : null) +
          " originalPolylineNo=" +
          (point.context ? point.context.originalPolylineNo : null) +
          " (" +
          latLng.lat +
          "," +
          latLng.lng +
          ")\n";
        +"\n";
      });
      pointsTextArea.innerHTML +=
        "----------------------------------------------------------------------------------------------------\n";
    });
  };
  return polyline;
}
var polyline = addPolyline();

/* Check that markers are not left after the polyline is removed! */
var resetPolyline = function () {
  map.removeLayer(polyline);
  setTimeout(() => {
    polyline = addPolyline();
  }, 500);
};
