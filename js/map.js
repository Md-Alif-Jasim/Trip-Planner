let map
let geocoder
let markers = []

function initMap() {
  const jfk = { lat: 40.6413, lng: -73.7781 }

  map = new google.maps.Map(document.getElementById("map"), {
    center: jfk,
    zoom: 12
  })

  geocoder = new google.maps.Geocoder()

  addMarker(jfk, "JFK Terminal 1")
}

function addMarker(position, title) {
  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: title
  })
  markers.push(marker)

  map.panTo(position)
  map.setZoom(13)
}

function clearMarkers() {
  markers.forEach(function(marker) {
    marker.setMap(null)
  })
  markers = []
}

function geocodeAddress(address, callback) {
  geocoder.geocode({ address: address }, function(results, status) {
    if (status === "OK") {
      const lat = results[0].geometry.location.lat()
      const lng = results[0].geometry.location.lng()
      callback(lat, lng)
    } else {
      console.log("Geocode failed for:", address)
      callback(null, null)
    }
  })
}