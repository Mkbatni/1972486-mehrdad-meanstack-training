let fs = require ("fs");

//it returns each json object from givenFile
module.exports.readJson = function (fileName){
    let dataFromFile = fs.readFileSync(fileName);
    let  data = JSON.parse(dataFromFile)
           return data;
    
}