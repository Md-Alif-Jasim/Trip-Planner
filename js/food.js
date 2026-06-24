function renderFood() {
  const card = document.getElementById("food-card")
  const food = data.food

  if (food.length === 0) {
    card.innerHTML = `<p style="font-size:13px;color:#6b6760;">No food spots yet.</p>`
    return
  }

  card.innerHTML = food.map(function(f) {
    return `
      <div class="rental-row">
        <div class="rental-location">
          <p class="location-label">${f.location}</p>
          <p class="location-name">${f.name}</p>
          <p class="location-time">${f.note}</p>
        </div>
      </div>
    `
  }).join("")
}

function openAddFood() {
  document.getElementById("food-modal").classList.add("open")
}

function closeFoodModal() {
  document.getElementById("food-modal").classList.remove("open")
}

function saveFood() {
  const name = document.getElementById("input-food-name").value
  const location = document.getElementById("input-food-location").value
  const note = document.getElementById("input-food-note").value

  const newFood = {
    name: name,
    location: location,
    note: note,
    lat: null,
    lng: null
  }

  data.food.push(newFood)

  geocodeAddress(name + " " + location, function(lat, lng) {
    newFood.lat = lat
    newFood.lng = lng
    renderMapForCurrentSection()
  })

  renderFood()
  closeFoodModal()
}