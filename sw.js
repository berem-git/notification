self.addEventListener("push", (event) => {
    const notification = event.data.json().notification;
    const data = event.data.json();
    event.waitUntil(self.registration.showNotification(notification.title , {
        body: notification.body,
        icon: '/icon.png',
        vibrate: true,
        data: {
            url: data.click_action
        },
        actions: [
            { action: "home", title: "Домой" },
            { action: "about", title: "О нас" },
        ],
    }));
});

self.addEventListener("notificationclick", (event) => {
    console.log('event2', event)
    const link = event.notification.data.url
    if(!event?.data?.title) event.waitUntil(clients.openWindow(link));
    if (event.data.title === "home") {
        return event.waitUntil(clients.openWindow(link));
    }
    if (event.data.title === "about") {
        return event.waitUntil(clients.openWindow('/notification'));
    }

});