console.log("default");
sendNotification("default");
installNotificationCount = 0;
syncNotificationCount = 0;
addEventListener("install", (event) => {
  console.log("install");
  setInterval(
    () => sendNotification("install : " + ++installNotificationCount),
    3000
  );
});

addEventListener("activate", (event) => {
  console.log("activate");
  sendNotification("activate");
});

addEventListener("message", (event) => {
  console.log("message");
  sendNotification(event.data);
});

self.addEventListener("sync", (event) => {
  if (event.tag === "startNotificationSync") {
    event.waitUntil(
      setInterval(
        () => sendNotification("sync : " + ++syncNotificationCount),
        3000
      )
    );
  }
});

self.addEventListener('periodicsync', function(event) {
    console.log(event)
    if (event.registration.tag == "periodicSync") {
        console.log("Periodic event occurred: ", event);
    }
});

function sendNotification(title) {
  self.registration.showNotification(title);
}
