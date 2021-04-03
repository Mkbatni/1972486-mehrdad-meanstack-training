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
function readFromLogFile ()
{
    let data = fs.readFileSync("log.json");
    let stringData = data.toString()
    let jsonData = JSON.parse(stringData);
    console.log(jsonData)
    console.log("first json" + jsonData[0].firstName + " Second "+ jsonData[0].timeStamp + " " +  jsonData[2].firstName+ " " + jsonData[1].timeStamp )
}
/* let obj = this.getInput();
insertIntoLog(obj); */
//readFromLogFile()