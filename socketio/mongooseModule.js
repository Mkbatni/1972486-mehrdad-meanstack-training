let obj = require("mongoose");
obj.promise = global.promise;
//it takes json file and insert it all using insertMany
module.exports.insertManyJsonObjToDb = function(schemeName,collectionName , data)
{
    let url = `mongodb://localhost:27017/${schemeName}`;
  //ready to connect 
  obj.connect(url, {useUnifiedTopology: true , useNewUrlParser: true }  );  //ready to connect
  let db = obj.connection;   //Connected to database

  db.on("error", (err) => console.log(err)) ;

    db.once("open", ()=> {
        console.log("Connection Successful!");
        
        //Defined the schema
        let cell_data = obj.Schema({
            _id:Number,
            source:String,
            sourceLocation:String,
            destinationLocation:String,
            callDuration:String,
            roaming:String,
            callCharge:String
          
        });
        //Creating Model using Schema
        let schemaModel = obj.model("" , cell_data , collectionName);
  // save multiple documents to the collection referenced by Book Model
  schemaModel.collection.insertMany(data, function (err, docs) {
    if (err){ 
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
    obj.disconnect();  //Close the connectioned..
  });
})
}


     //Defined the schema
     let cell_data = obj.Schema({
        _id:Number,
        name:String,
        message:String
      
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
        let schemaModel = obj.model("" , cell_data , collectionName);
  // save multiple documents to the collection referenced by Book Model
  schemaModel.collection.insertOne(data, function (err, docs) {
    if (err){ 
        return console.error("error in insert" , err);
    } else {
      console.log("one documents inserted to Collection", data);
    }
   obj.disconnect();  //Close the connectioned..
  });
})
}

  

//insert("meanStack", "test");



