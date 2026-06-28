const firebaseConfig = {
  apiKey: "AIzaSyCFnA926aLMGRDOML_Auy4-HkUrieS5KeU",
  authDomain: "trip-itinerary-4e123.firebaseapp.com",
  projectId: "trip-itinerary-4e123",
  storageBucket: "trip-itinerary-4e123.firebasestorage.app",
  messagingSenderId: "192906223524",
  appId: "1:192906223524:web:a14240a02816ebbcda6b31"
}

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()