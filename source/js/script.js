карта
function initMap() {
  var mapCondition = {
    center: new google.maps.LatLng(59.936223, 30.321386),
    zoom: 16,
    disableDefaultUI: true,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapCondition);
  var coordinates = { lat: 59.936223, lng: 30.321386 };
  var image = "img/icon-map-marker.svg";
  var marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image,
  });
  var nonePoint = [{
    featureType: "poi",
    stylers: [
      { visibility: "off" }
    ]
  }];

  map.setOptions({ styles: nonePoint });
}
