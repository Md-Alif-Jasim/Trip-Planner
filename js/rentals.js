function renderRentals() {
  const card = document.getElementById("rental-card")
  card.innerHTML = data.rentals.map(function(rental, index) {
    return `
      <div class="rental-row">
        <div class="rental-location">
          <p class="location-label">Pickup</p>
          <p class="location-name">${rental.pickup}</p>
          <p class="location-time">${rental.pickupTime}</p>
        </div>
        <div class="rental-arrow">→</div>
        <div class="rental-location right">
          <p class="location-label">Drop-off</p>
          <p class="location-name">${rental.dropoff}</p>
          <p class="location-time">${rental.dropoffTime}</p>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteRental(${index})">Delete</button>
    `
  }).join("")
}

function deleteRental(index) {
  data.rentals.splice(index, 1)
  saveData()
  renderRentals()
  renderMapForCurrentSection()
}

function openAddRental() {
  document.getElementById("rental-modal").classList.add("open")
}

function closeModal() {
  document.getElementById("rental-modal").classList.remove("open")
}

function saveRental() {
  const pickup = document.getElementById("input-pickup").value
  const pickupTime = document.getElementById("input-pickup-time").value
  const dropoff = document.getElementById("input-dropoff").value
  const dropoffTime = document.getElementById("input-dropoff-time").value

  const newRental = {
    pickup: pickup,
    pickupTime: pickupTime,
    dropoff: dropoff,
    dropoffTime: dropoffTime,
    lat: null,
    lng: null
  }

  data.rentals.push(newRental)
  const indexToUpdate = data.rentals.length - 1

  saveData()
  renderRentals()
  closeModal()

  geocodeAddress(pickup, function(lat, lng) {
    if (data.rentals[indexToUpdate]) {
      data.rentals[indexToUpdate].lat = lat
      data.rentals[indexToUpdate].lng = lng
      saveData()
      renderMapForCurrentSection()
    }
  })
}