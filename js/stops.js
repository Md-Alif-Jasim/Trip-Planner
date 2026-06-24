let currentDay = "Day 1"

function selectDay(day, el) {
  currentDay = day

  document.querySelectorAll(".day-tab").forEach(function(tab) {
    tab.classList.remove("active")
  })
  el.classList.add("active")

  document.getElementById("day-title").textContent = day + " Stops"

  renderStops()
}

function renderStops() {
  const card = document.getElementById("stops-card")
  const stops = data.stops[currentDay] || []

  if (stops.length === 0) {
    card.innerHTML = `<p style="font-size:13px;color:#6b6760;">No stops yet for ${currentDay}.</p>`
    return
  }

  card.innerHTML = stops.map(function(stop) {
    return `
      <div class="rental-row">
        <div class="rental-location">
          <p class="location-label">${stop.time || ""}</p>
          <p class="location-name">${stop.name}</p>
        </div>
      </div>
    `
  }).join("")
}

function openAddStop() {
  document.getElementById("stop-modal").classList.add("open")
}

function closeStopModal() {
  document.getElementById("stop-modal").classList.remove("open")
}

function saveStop() {
  const name = document.getElementById("input-stop-name").value
  const time = document.getElementById("input-stop-time").value

  if (!data.stops[currentDay]) {
    data.stops[currentDay] = []
  }

  const newStop = {
    name: name,
    time: time,
    lat: null,
    lng: null
  }

  data.stops[currentDay].push(newStop)

  geocodeAddress(name, function(lat, lng) {
    newStop.lat = lat
    newStop.lng = lng
    renderMapForCurrentSection()
  })

  renderStops()
  closeStopModal()

  document.getElementById("input-stop-name").value = ""
  document.getElementById("input-stop-time").value = ""
}