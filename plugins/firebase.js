import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyA-LVBzTqLwJrCyVUMc8zXyYSTEDSc6i-A",
        authDomain: "coin-toss-app-8156e.firebaseapp.com",
        databaseURL: "https://coin-toss-app-8156e.firebaseio.com",
        projectId: "coin-toss-app-8156e",
        storageBucket: "coin-toss-app-8156e.appspot.com",
        messagingSenderId: "1019307782245",
        appId: "x:xxxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx"
    }
  )
}

export default firebase