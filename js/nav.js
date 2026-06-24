function showSection(name, el) {

  document.querySelectorAll(".nav-item").forEach(function(item) {
    item.classList.remove("active")
  })
  el.classList.add("active")

  const sections = ["rental", "schedule", "reminders", "food", "worship", "police"]

  sections.forEach(function(section) {
    document.getElementById("section-" + section).style.display = "none"
  })

  document.getElementById("section-" + name).style.display = "block"

  const titles = {
    rental: "Car Rental",
    schedule: "Daily Schedule",
    reminders: "Reminders",
    food: "Food To Try",
    worship: "Places Of Worship",
    police: "Police Stations"
  }

  document.getElementById("page-title-text").textContent = titles[name]

   renderMapForCurrentSection()
}