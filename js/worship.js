function renderWorship() {
  const card = document.getElementById("worship-card")
  const worship = data.worship

  if (worship.length === 0) {
    card.innerHTML = `<p style="font-size:13px;color:#6b6760;">No places added yet.</p>`
    return
  }

  card.innerHTML = worship.map(function(w) {
    return `
      <div class="rental-row">
        <div class="rental-location">
          <p class="location-label">${w.type}</p>
          <p class="location-name">${w.name}</p>
          <p class="location-time">${w.location}</p>
        </div>
      </div>
    `
  }).join("")
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

  data.worship.push({ name: name, location: location, type: type })

  renderWorship()
  closeWorshipModal()
}