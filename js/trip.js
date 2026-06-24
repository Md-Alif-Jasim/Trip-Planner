function openTripModal() {
  document.getElementById("trip-modal").classList.add("open")
}

function closeTripModal() {
  document.getElementById("trip-modal").classList.remove("open")
}

function saveTrip() {
  const name = document.getElementById("input-trip-name").value
  const start = document.getElementById("input-trip-start").value
  const end = document.getElementById("input-trip-end").value

  document.querySelector(".trip-name").textContent = name || "My Trip"

  if (start && end) {
    document.querySelector(".trip-dates").textContent = start + " to " + end
  } else {
    document.querySelector(".trip-dates").textContent = "Add dates below"
  }

  closeTripModal()
}