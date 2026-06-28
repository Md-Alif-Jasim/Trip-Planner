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

const tripDocRef = db.collection("trips").doc("main")

function saveData() {
  tripDocRef.set(data)
}

function listenForChanges() {
  tripDocRef.onSnapshot(function(doc) {
    if (doc.exists) {
      data = doc.data()
      renderEverything()
    } else {
      tripDocRef.set(data)
    }
  })
}

listenForChanges()