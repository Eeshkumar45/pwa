console.log("default")
sendNotification("default")
count = 0
addEventListener("install", (event)=>{
    console.log("install");
    setInterval(()=>sendNotification("install : "+(++count)),3000);
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