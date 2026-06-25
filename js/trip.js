function openTripModal() {
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

  document.querySelector(".trip-name").textContent = name || "My Trip"
  document.getElementById("trip-location-text").textContent = location || "Add location"

  if (start && end) {
    const startDate = new Date(start + "T00:00:00")
    const endDate = new Date(end + "T00:00:00")
    const year = endDate.getFullYear()

    document.getElementById("trip-dates-text").textContent =
      formatDate(start) + " – " + formatDate(end) + ", " + year
  } else {
    document.getElementById("trip-dates-text").textContent = "Add dates"
  }

  closeTripModal()
}