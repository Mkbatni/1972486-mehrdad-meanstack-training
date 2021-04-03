let importObj = require("./readLine-sync")
let readObj = require("readline-sync");
let cnt = readObj.question("how many records are you saving today? ")

for (let index = 0; index < cnt; index++) {
    
    let obj = importObj.getInput()

    importObj.insertIntoLog(obj);

}


