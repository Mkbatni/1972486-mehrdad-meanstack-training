let obj = require("mongoose");
let mongoClient = require("mongodb").MongoClient;


obj.promise = global.promise;


//Defined the schema
let course_data = obj.Schema({
  _id:Number,
  courseName:String,
  Desc:String,
  amount:Number

});

module.exports.insertOneJsonObjToDb = function(schemeName,collectionName , data)
{
    let url = `mongodb://localhost:27017/${schemeName}`;
    //ready to connect co
obj.connect(url, {useUnifiedTopology: true , useNewUrlParser: true }  );  //ready to connect
    db = obj.connection;   //Connected to database

  db.on("error", (err) => console.log(err)) ;

    db.once("open", ()=> {
    
        //Creating Model using Schema
        let schemaModel = obj.model("" , course_data , collectionName);
  // save multiple documents to the collection referenced by Book Model
  schemaModel.collection.insertOne(data, function (err, docs) {
    if (err){ 
        return console.error("Duplicate Id, insert another id" , err);
    } else {
      console.log("one documents inserted to Collection", data);
    }
   obj.disconnect();  //Close the connectioned..
  });
})
}

module.exports.updateOne = function(schemeName,collectionName , cidGiven, amountGiven){
  let url = `mongodb://localhost:27017/${schemeName}`;
  //ready to connect co
obj.connect(url, {useUnifiedTopology: true , useNewUrlParser: true }  );  //ready to connect
  db = obj.connection;   //Connected to database

db.on("error", (err) => console.log(err)) ;

  db.once("open", ()=> { 
  

      //Creating Model using Schema
      let schemaModel = obj.model("" , course_data , collectionName);
// save multiple documents to the collection referenced by Book Model
schemaModel.collection.updateOne({_id:cidGiven}, {$set:{ amount:amountGiven}},  (err,result) => {
  if(!err){
    // console.log(result);
    if(result.modifiedCount>0){
         console.log("Record updated successfully")
    }else {
         console.log("Record didn't update" ,cidGiven);
    }
}
obj.disconnect();
})
})
}



//Delete one document using mongoDb 
module.exports.del = function(schemeName,collectionName , cidGiven){
  let url = `mongodb://localhost:27017/${schemeName}`;
  //ready to connect co
obj.connect(url, {useUnifiedTopology: true , useNewUrlParser: true }  );  //ready to connect
  db = obj.connection;   //Connected to database

db.on("error", (err) => console.log(err)) ;

  db.once("open", ()=> { 
  

      //Creating Model using Schema
      let schemaModel = obj.model("" , course_data , collectionName);
// save multiple documents to the collection referenced by Book Model
schemaModel.collection.deleteOne({_id:cidGiven},   (err,result) => {
  if(!err){
    // console.log(result);
    if(result.deletedCount>0){
         console.log("Record deleted successfully")
    }else {
         console.log("Record didn't get deleted" ,cidGiven);
    }
}
obj.disconnect();
})
})
}




let jArr = []
//get all data
 function getdata  (schemeName,collectionName )
{

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
                console.log(jArr.length)
                    }
                    client.close();
                 
            })
       
    }
})


}

