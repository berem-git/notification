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
            { action: "aceptar", title: "Aceptar" },
            { action: "rechazar", title: "Rechazar" },
        ],
    }));
});

self.addEventListener("notificationclick", (event) => {
    console.log('event2', event)
    const link = event.notification.data.url || '/'
    if(!event?.data?.title) event.waitUntil(clients.openWindow(link));
    if (event.data.title === "aceptar") {
        return event.waitUntil(clients.openWindow(link));
    }
    if (event.data.title === "rechazar") {
        return  console.log("Botón rechazar pulsado");
    }

});