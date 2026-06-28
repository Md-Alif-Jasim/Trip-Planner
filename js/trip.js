function openTripModal() {
  document.getElementById("input-trip-name").value = data.trip.name
  document.getElementById("input-trip-location").value = data.trip.location
  document.getElementById("input-trip-start").value = data.trip.startDate
  document.getElementById("input-trip-end").value = data.trip.endDate

  document.getElementById("trip-modal").classList.add("open")
}

function closeTripModal() {
  document.getElementById("trip-modal").classList.remove("open")
}

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00")
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return months[date.getMonth()] + " " + date.getDate()
}

function saveTrip() {
  const name = document.getElementById("input-trip-name").value
  const location = document.getElementById("input-trip-location").value
  const start = document.getElementById("input-trip-start").value
  const end = document.getElementById("input-trip-end").value

  data.trip.name = name || "My Trip"
  data.trip.location = location
  data.trip.startDate = start
  data.trip.endDate = end

  saveData()
  closeTripModal()
}

function renderTrip() {
  document.querySelector(".trip-name").textContent = data.trip.name

  document.getElementById("trip-location-text").textContent =
    data.trip.location || "Add location"

  if (data.trip.startDate && data.trip.endDate) {
    const endDate = new Date(data.trip.endDate + "T00:00:00")
    const year = endDate.getFullYear()

    document.getElementById("trip-dates-text").textContent =
      formatDate(data.trip.startDate) + " – " + formatDate(data.trip.endDate) + ", " + year
  } else {
    document.getElementById("trip-dates-text").textContent = "Add dates"
  }
}