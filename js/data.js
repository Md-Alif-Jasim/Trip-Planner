let data = {
  trip: {
    name: "My Trip",
    location: "",
    startDate: "",
    endDate: ""
  },
  rentals: [
    {
      pickup: "JFK Terminal 1",
      pickupTime: "Day 1 · 2:00 PM",
      dropoff: "City Hotel",
      dropoffTime: "Last Day · 10:00 AM"
    }
  ],
  stops: {},
  reminders: [],
  food: [],
  worship: [],
  police: [],
  participants: []
}

function saveData() {
  localStorage.setItem("tripData", JSON.stringify(data))
}

function loadData() {
  const saved = localStorage.getItem("tripData")
  if (saved) {
    data = JSON.parse(saved)
  }
}

loadData()