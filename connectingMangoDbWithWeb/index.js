const express = require("express");
const app = express();
let bodyParser = require("body-parser");
let mongooseModule = require("./mongooseModule.js")
let port = 9090
let schemeName = "meanStack"
let collectionName = "course"
//middleware modules 
app.use(bodyParser.urlencoded({extended:true}));    // enable body data
app.use(bodyParser.json());     // enable json data. 
let formPost = 
`
<div style="padding-right: 25px; background-color: aqua;">
<center style="padding-right: 25px;" > <h2 >Add a New Course into Database</h2></center>
<form action="/add"  method ="post" style="border: 10px ;background-color: aqua; padding: 30px;"> <br>
<label for="" style="padding-right: 25px;"> Course Id:</label>
        <input type="number" name = "cId" style="padding-right: 30px;"  onfocus="this.value=''" > <br> <br>
       Course Name: <input type="text" name = "cName"  style="padding-right: 30px;"  onfocus="this.value=''" > <br><br> 
       <label for="'discId" style="padding-right: 15px;" > Description:</label>
       <textarea name="disc"  id = "discId" cols="20" rows="3"  onfocus="this.value=''" ></textarea>
  <br> <br>
 <label style="padding-right: 39px;">Amount</label>
<input type="number" name = "amount" onfocus="this.value=''" > <br> <br>
<input type="submit" value="Create course"> 
<input type="reset" value="reset">

</form>
</div>
`
let updateTag = 
`
<form action="/update"  method ="post" style="border: 10px ;background-color: aqua; padding: 50px;">
<br>
       <label for="" style="padding-right: 25px;"> Course Id:</label>
        <input type="number" name = "cId" onfocus="this.value=''" > <br> 
     <br><br>
 <label style="padding-right: 39px;" >Amount</label>
<input type="number" name = "amount" onfocus="this.value=''" > <br> <br><br>
<input type="submit" value="Update"> 
<input type="reset" value="reset">

</form>
`
let deleteTag  =
`
<form action="/delete"  method ="post" style="border: 10px ;background-color: aqua; padding: 50px;">
<br>
       <label for="" style="padding-right: 25px;"> Course Id:</label>
        <input type="number" name = "cId" onfocus="this.value=''" > 

<input type="submit" value="Delete"> 
<input type="reset" value="reset">
`

let mainPageTag = `
<a href="http://localhost:9090"><h2>Main Page</h2></a>
`


//To get to main html page
app.get("/",(req,res)=>{

    res.sendFile(__dirname + "/index.html")
})

//to display and add courses
app.get("/add", (req,res)=> {
    res.send(mainPageTag + formPost )
})
app.post("/add", (req,res)=> {
let obj = { 
    _id : req.body.cId,
    cName : req.body.cName, 
    cDesc : req.body.disc, 
    amount : req.body.amount }
    mongooseModule.insertOneJsonObjToDb(schemeName,collectionName,obj);
   
})

//To display and update course 
app.get("/update", (req,res)=> {
    res.send(mainPageTag + updateTag )
})
app.post("/update", (req,res)=> {
    let courseId = req.body.cId;
    let courseAmount = req.body.amount;
      mongooseModule.updateOne(schemeName,collectionName,courseId,courseAmount);

    })
app.get("/delete", (req,res)=> {
    res.send(mainPageTag + deleteTag )
})
app.post("/delete", (req,res)=> {
    let courseId = req.body.cId;
   
      mongooseModule.del(schemeName,collectionName,courseId);
       console.log(courseId);
    })


    let mongoClient = require("mongodb").MongoClient;
    var mongoose = require("mongoose");    
app.get("/fetch", (req,res)=> {

    let jArr = [];
    let url = `mongodb://localhost:27017/${schemeName}`;
    mongoClient.connect(url,{ useUnifiedTopology: true }, (err1,client)=> {
       if(!err1){
           let db =   client.db(schemeName);
          // let cursor = db.collection("Product").find();
          let cursor =   db.collection(collectionName).find(); 
           //console.log(cursor);
               cursor.each((err2,doc)=> {
                       if(doc!=null){
              
                   jArr.push(doc);
             
                       }
                     
                       
                       client.close();
               })
               setTimeout(() => { res.json(jArr)   }, 500);
       }
   })
   

    })

//to display from mongo to client




app.listen(port, ()=> console.log(`server is runing on port: ${port}`));

