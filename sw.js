self.addEventListener("push", (event) => {
    const notification = event.data.json().notification;
    const data = event.data.json();
    event.waitUntil(self.registration.showNotification(notification.title , {
        body: notification.body,
        icon: '/icon.png',
        vibrate: true,
        data: {
            url: data.data.click_action
        },
    }));
});

self.addEventListener("notificationclick", (event) => {
    const link = event.notification.data.url
    event.waitUntil(clients.openWindow(link));
    event.notification.close();
});