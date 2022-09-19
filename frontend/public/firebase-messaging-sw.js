// Scripts for firebase and firebase messaging
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
	"https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: "AIzaSyBn3w9bwgWe0YlptjcCx1kaXli8EZnPh-g",
	authDomain: "test-noti-bcfa8.firebaseapp.com",
	projectId: "test-noti-bcfa8",
	storageBucket: "test-noti-bcfa8.appspot.com",
	messagingSenderId: "942768403855",
	appId: "1:942768403855:web:d6ea8763d6bace431d47fa"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log("Received background message ", payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
