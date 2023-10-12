console.log("main.js");
addEventListener("load", (event) => {
  Notification.requestPermission();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

function startPeriodicSync() {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(function(reg) {
            if (reg.periodicSync) {
                reg.periodicSync.register({
                        tag: 'periodicSync',
                        minPeriod: 0,
                        powerState: 'auto',
                        networkState: 'any'
                    })
                    .then(function(event) {
                        console.log('Periodicc registration successful', event);
                    })
                    .catch(function(error) {
                        console.log('Periodicc registration failed', error);
                    });
            } else {
                console.log("Background not supported");
            }
        });
    } else {
        console.log("Nove ServiceWorker");
    }
}


function sendMessage() {
  navigator.serviceWorker.ready.then((registration) => {
    registration.active.postMessage(document.getElementById("msg").value);
  });
}

function startSync() {
  navigator.serviceWorker.ready.then((registration) => {
    registration.sync.register("startNotificationSync");
  });
}
