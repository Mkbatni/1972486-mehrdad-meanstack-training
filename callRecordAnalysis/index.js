//to use read from json module
let jsonModule = require("./jsonModule.js")

// to use mongoose crud operations
let mongooseModule = require("./mongooseModule.js")


/* let app = require("express")();
let port = 9090; */
let fileName = "call_data.json";
let schemeName = "meanStack"
let collectionName = "call_back"
function jsonToDb()
{
    //it returns each json object from givenFile
    let data =   jsonModule.readJson(fileName);
    //it takes schemename, collectionName , json data, and insert all the data at once
    mongooseModule.insertToDb(schemeName,collectionName,data);

}
//Ruuning index will call jsonToDb which read json object and insert to db
jsonToDb();
