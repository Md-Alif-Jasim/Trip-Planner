function renderPolice() {
  const card = document.getElementById("police-card")
  const police = data.police

  if (police.length === 0) {
    card.innerHTML = `<p style="font-size:13px;color:#6b6760;">No stations added yet.</p>`
    return
  }

  card.innerHTML = police.map(function(p, index) {
    return `
      <div class="rental-row">
        <div class="rental-location">
          <p class="location-label">${p.phone}</p>
          <p class="location-name">${p.name}</p>
          <p class="location-time">${p.location}</p>
        </div>
      </div>
      <button class="delete-btn" onclick="deletePolice(${index})">Delete</button>
    `
  }).join("")
}

function deletePolice(index) {
  data.police.splice(index, 1)
    saveData()
  renderPolice()
  renderMapForCurrentSection()
}

function openAddPolice() {
  document.getElementById("police-modal").classList.add("open")
}

function closePoliceModal() {
  document.getElementById("police-modal").classList.remove("open")
}

function savePolice() {
  const name = document.getElementById("input-police-name").value
  const location = document.getElementById("input-police-location").value
  const phone = document.getElementById("input-police-phone").value

  const newPolice = {
    name: name,
    location: location,
    phone: phone,
    lat: null,
    lng: null
  }
 
  data.police.push(newPolice)
    saveData()

  geocodeAddress(name + " " + location, function(lat, lng) {
    newPolice.lat = lat
    newPolice.lng = lng
    renderMapForCurrentSection()
      saveData()
  })

  renderPolice()
  closePoliceModal()
}