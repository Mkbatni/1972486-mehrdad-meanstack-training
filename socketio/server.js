

let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);


console.log(__dirname)
app.get("/", (req,res) =>res.sendFile(__dirname + "/index.html"));

io.on ("connection", (socket) => {
    console.log("client connected to application.....")
    socket.on("chat", (name, msg) => console.log("Hello " + name + "\n" + "Your message is: " 
    + msg))

})

http.listen(9090, ()=>console.log('Server runing on port number 9090'))