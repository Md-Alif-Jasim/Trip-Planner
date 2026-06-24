function renderMapForCurrentSection() {
  clearMarkers()

  const activeNav = document.querySelector(".nav-item.active")
  const section = activeNav.getAttribute("data-section")

  if (section === "rental") {
    data.rentals.forEach(function(r) {
      if (r.lat) addMarker({ lat: r.lat, lng: r.lng }, r.pickup)
    })
  }

  if (section === "schedule") {
    const stops = data.stops[currentDay] || []
    stops.forEach(function(s) {
      if (s.lat) addMarker({ lat: s.lat, lng: s.lng }, s.name)
    })
  }

  if (section === "food") {
    data.food.forEach(function(f) {
      if (f.lat) addMarker({ lat: f.lat, lng: f.lng }, f.name)
    })
  }

  if (section === "worship") {
    data.worship.forEach(function(w) {
      if (w.lat) addMarker({ lat: w.lat, lng: w.lng }, w.name)
    })
  }

  if (section === "police") {
    data.police.forEach(function(p) {
      if (p.lat) addMarker({ lat: p.lat, lng: p.lng }, p.name)
    })
  }
}