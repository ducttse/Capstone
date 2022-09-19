import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: change to firebase config
const firebaseConfig = {
	apiKey: "AIzaSyBn3w9bwgWe0YlptjcCx1kaXli8EZnPh-g",
	authDomain: "test-noti-bcfa8.firebaseapp.com",
	projectId: "test-noti-bcfa8",
	storageBucket: "test-noti-bcfa8.appspot.com",
	messagingSenderId: "942768403855",
	appId: "1:942768403855:web:d6ea8763d6bace431d47fa"
};

initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
export const getFireBaseToken = (setTokenFound) => {
	return getToken(messaging, {
		// TODO: change to key
		vapidKey:
			"BJXjF3-FZmxwEZMev-Opv_0iz5vYjp-bMpQJr7-2tFT14xs5sI0ibsZ0z648-A7spHUcvzC4A1TG5pxfmmGeUNE"
	})
		.then((currentToken) => {
			if (currentToken) {
				console.log("current token for client: ", currentToken);
				setTokenFound(true);
				// Track the token -> client mapping, by sending to backend server
				// show on the UI that permission is secured
			} else {
				console.log(
					"No registration token available. Request permission to generate one."
				);
				setTokenFound(false);
				// shows on the UI that permission is required
			}
		})
		.catch((err) => {
			console.log("An error occurred while retrieving token. ", err);
			// catch error while creating client token
		});
};

export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			resolve(payload);
		});
	});
