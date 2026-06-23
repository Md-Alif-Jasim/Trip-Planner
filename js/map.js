function initMap() {
  const jfk = { lat: 40.6413, lng: -73.7781 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: jfk,
    zoom: 15
  });

  const marker = new google.maps.Marker({
    position: jfk,
    map: map,
    title: "JFK Terminal 1"
  });
}