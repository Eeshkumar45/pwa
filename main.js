console.log("main.js");
addEventListener("load", (event) => {Notification.requestPermission()});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
}


function sendMessage(){
    navigator.serviceWorker.ready.then((registration) => {
        registration.active.postMessage(
          document.getElementById("msg").value
        );
      });
}