function renderWorship() {
  const card = document.getElementById("worship-card")
  const worship = data.worship

  if (worship.length === 0) {
    card.innerHTML = `<p style="font-size:13px;color:#6b6760;">No places added yet.</p>`
    return
  }

  card.innerHTML = worship.map(function(w, index) {
    return `
      <div class="rental-row">
        <div class="rental-location">
          <p class="location-label">${w.type}</p>
          <p class="location-name">${w.name}</p>
          <p class="location-time">${w.location}</p>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteWorship(${index})">Delete</button>
    `
  }).join("")
}

function deleteWorship(index) {
  data.worship.splice(index, 1)
  renderWorship()
  renderMapForCurrentSection()
}

function openAddWorship() {
  document.getElementById("worship-modal").classList.add("open")
}

function closeWorshipModal() {
  document.getElementById("worship-modal").classList.remove("open")
}

function saveWorship() {
  const name = document.getElementById("input-worship-name").value
  const location = document.getElementById("input-worship-location").value
  const type = document.getElementById("input-worship-type").value

  const newWorship = {
    name: name,
    location: location,
    type: type,
    lat: null,
    lng: null
  }

  data.worship.push(newWorship)
  const indexToUpdate = data.worship.length - 1

  saveData()
  renderWorship()
  closeWorshipModal()

  geocodeAddress(name + " " + location, function(lat, lng) {
    if (data.worship[indexToUpdate]) {
      data.worship[indexToUpdate].lat = lat
      data.worship[indexToUpdate].lng = lng
      saveData()
      renderMapForCurrentSection()
    }
  })
}