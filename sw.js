console.log("default")
sendNotification("default")

addEventListener("install", (event)=>{
    console.log("install");
    sendNotification("install")
})

addEventListener("activate", (event)=>{
    console.log("activate");
    sendNotification("activate")
})

addEventListener("message", (event)=>{
    console.log("message");
    sendNotification(event.data)
})

function sendNotification(title){
    self.registration.showNotification(title)
}