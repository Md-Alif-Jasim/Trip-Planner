function renderRentals() {
  const card = document.getElementById("rental-card")
  card.innerHTML = data.rentals.map(function(rental) {
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
    `
  }).join("")
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

  data.rentals.push({
    pickup: pickup,
    pickupTime: pickupTime,
    dropoff: dropoff,
    dropoffTime: dropoffTime
  })

  renderRentals()
  closeModal()
}

renderRentals()