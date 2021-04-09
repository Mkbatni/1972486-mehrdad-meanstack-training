let readObj = require("readline-sync");
let fs = require("fs")


 module.exports.getInput = function()
 {
    let obj = {}
    obj.firstName = readObj.question("Enter your first name ");
    obj.lastName = readObj.question("Enter your last name ");
    obj.gender = readObj.question("Enter your gender ");
    obj.email = readObj.question("Enter your email");

    let ts = new Date();
    obj.timeStamp = ts.toDateString() + " " + 
                ts.getHours() + ":"+ ts.getMinutes() +":" + ts.getSeconds() ;
    return obj;
 }   

function write(jsonObj) {
    let stringObj = JSON.stringify(jsonObj);
    fs.writeFileSync('log.json' , stringObj  )
    console.log("record was saved..");
}
module.exports.insertIntoLog = function(newInput)
    {
    let logArr = new Array();
    
    let data = fs.readFileSync("log.json", 'utf-8');
    debugger;
  //  console.log(data)
    if(data.toString() != "")
    {
        var dataFromFile = JSON.parse(data)
        dataFromFile.push(newInput)

        console.log(dataFromFile) 
        write(dataFromFile)
        debugger;
        }
    else {
        logArr.push(newInput);
        write(logArr)
    }
    debugger;

    }
    //delete and return the json object that was deleted
module.exports.deleteFromLog = function (tID)
{
    let dataFromFile = fs.readFileSync("log.json");
  let  data = JSON.parse(dataFromFile)

  let obj = null
    for (var i=0 ; i < data.length ; i++)
    {
        if (data[i]["tId"] == tID) {
        //     console.log(i);
           console.log(tID)
        obj = data.splice(i,1)
        write(data)
        break;
        }
       
       
        
    }
   // console.log(data);
    // console.log("this is id" , stringData.tId)

    return data 

}
function readFromJson ()
{
    fs.readFile("log.json", (err, data) => {
        if(!err)
        {
            let task = data.toString()
            let taskJson = task.toString()
            console.log(" length " +  taskJson.length )
            for (let index = 0; index < taskJson.length; index++) {
                const element = taskJson[index];
                console.log(element.tId)
            }
        }
        else
        {
            console.log("error"+ err)
        }
 
    })
}
module.exports.returnJsonFromFile = function() {
    let dataFromFile = fs.readFileSync("log.json");
    let  data = JSON.parse(dataFromFile)
  
       
           return data;
    
 
 
}






module.exports.createFile = function()
{
    fs.appendFile('log.json', '', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}
/* let obj = this.getInput();
insertIntoLog(obj); */
/* let obj = deleteFromLog(432)

console.log(obj) */
//readFromJson()
//createFile()