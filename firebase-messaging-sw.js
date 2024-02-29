// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyDMf8LGtCOipiic6cSO8m6THwTBUKJUwoA',
    authDomain: 'notification-50717.firebaseapp.com',
    projectId: 'notification-50717',
    storageBucket: 'notification-50717.appspot.com',
    messagingSenderId: '967435761286',
    appId: '1:967435761286:web:ba5a4d77f65c4f72d08307',
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });