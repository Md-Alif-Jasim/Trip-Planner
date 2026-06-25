function renderParticipants() {
  const card = document.getElementById("participants-card")
  const participants = data.participants || []

  if (participants.length === 0) {
    card.innerHTML = `<p style="font-size:13px;color:#6b6760;">No participants yet.</p>`
    return
  }

  card.innerHTML = participants.map(function(p, index) {
    const photoHtml = p.photo
      ? `<img src="${p.photo}" class="participant-photo" />`
      : `<div class="participant-photo placeholder">👤</div>`

    return `
      <div class="participant-row">
        ${photoHtml}
        <div class="participant-info">
          <p class="participant-name">${p.name}</p>
          <p class="participant-phone">${p.phone}</p>
        </div>
        <button class="delete-btn" onclick="deleteParticipant(${index})">Delete</button>
      </div>
    `
  }).join("")
}

function openAddParticipant() {
  document.getElementById("participant-modal").classList.add("open")
}

function closeParticipantModal() {
  document.getElementById("participant-modal").classList.remove("open")
}

function saveParticipant() {
  const name = document.getElementById("input-participant-name").value
  const phone = document.getElementById("input-participant-phone").value
  const fileInput = document.getElementById("input-participant-photo")
  const file = fileInput.files[0]

  if (!data.participants) {
    data.participants = []
  }

  if (file) {
    const reader = new FileReader()
    reader.onload = function(event) {
      const newParticipant = {
        name: name,
        phone: phone,
        photo: event.target.result
      }
      data.participants.push(newParticipant)
      saveData()
      renderParticipants()
      closeParticipantModal()
      fileInput.value = ""
    }
    reader.readAsDataURL(file)
  } else {
    const newParticipant = { name: name, phone: phone, photo: null }
    data.participants.push(newParticipant)
    saveData()
    renderParticipants()
    closeParticipantModal()
  }
}

function deleteParticipant(index) {
  data.participants.splice(index, 1)
  saveData()
  renderParticipants()
}