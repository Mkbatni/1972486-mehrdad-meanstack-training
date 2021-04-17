

let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let mongooseModule = require("./mongooseModule.js")

let schemeName = "meanStack"
let collectionName = "chatLog";
let idCntr = 0;
//console.log(__dirname)
let lock = true;
app.get("/", (req,res) =>res.sendFile(__dirname + "/index.html"));

io.on ("connection", (socket) => {
 
   
    socket.on("chat", (nm, msg) =>
    {
     
     
        console.log("Hello " + nm + "\n" + "Your message is: " 
        + msg)
        let obj = {
            _id : idCntr,
            name : nm,
            message : msg 

        }
        idCntr++;
        mongooseModule.insertOneJsonObjToDb(schemeName,collectionName,obj)
    })


})

http.listen(9090, ()=>console.log('Server runing on port number 9090'))