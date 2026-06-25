function renderReminders() {
  const card = document.getElementById("reminders-card")
  const reminders = data.reminders

  if (reminders.length === 0) {
    card.innerHTML = `<p style="font-size:13px;color:#6b6760;">No reminders yet.</p>`
    return
  }

  card.innerHTML = reminders.map(function(r, index) {
    return `
      <div class="rental-row">
        <div class="rental-location">
          <p class="location-label">${r.priority}</p>
          <p class="location-name">${r.text}</p>
          <p class="location-time">${r.note}</p>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteReminder(${index})">Delete</button>
    `
  }).join("")
}

function deleteReminder(index) {
  data.reminders.splice(index, 1)
    saveData()
  renderReminders()
}

function openAddReminder() {
  document.getElementById("reminder-modal").classList.add("open")
}

function closeReminderModal() {
  document.getElementById("reminder-modal").classList.remove("open")
}

function saveReminder() {
  const text = document.getElementById("input-reminder-text").value
  const note = document.getElementById("input-reminder-note").value
  const priority = document.getElementById("input-reminder-priority").value

  data.reminders.push({ text: text, note: note, priority: priority })
    saveData()

  renderReminders()
  closeReminderModal()
}