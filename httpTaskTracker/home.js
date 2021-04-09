let http = require("http");
let url = require("url");
let fs = require("fs")
let importObj = require("./readLine-sync")
let port = "9090"

let taskForm = `    

<form action="/addTask" method ="get" style="border: 15px; background-color: aquamarine; padding: auto;">
<h2>Add Tasks</h2> </br>
Emp id  : <input type="text" name = "eId"> <br>
Task id : <input type="text" name = "tId"> <br>
Task    : <input type="text" name = "task"> <br>
Date    : <input type="date" name = "date"> <br>
<input  type = "submit" value ="Add Task" ><br>
<input type="reset" value ="Reset" ><br> <hr>
</form>
`

let delForm = `

<form action="/delTask" method = "get" style="border: 15px; background-color: aquamarine; padding: auto;">
<h2>Delete Task</h2> </br>
 Task Id: <input type="text" name="del"> 
    <input type="submit" value = "Delete">
    <input type="reset" value ="Reset" ><br> <hr>
</form>
`

let formDisplay = `

<form action="/display" style="border: 15px; background-color: aquamarine; padding: auto;">
<h2>Display List of Tasks</h2>
 <input type="submit"  value = "Display Tasks">
</form>
    `



let server = http.createServer((req,res) => {

    var pathInfo = url.parse(req.url,true).pathname;
    res.setHeader("content-type","text/html");  // by default data consider as a html 
    if(req.url == "/"){
        importObj.createFile();
        res.write(taskForm);
    }
    else if (pathInfo == "/addTask")
    {
        var data = url.parse(req.url,true).query;
     
        importObj.insertIntoLog(data);
     
        res.write(taskForm + delForm + formDisplay) ;
    }
    else if ( pathInfo == "/delTask")
    {
        var data = url.parse(req.url,true).query;
    
       let output = importObj.deleteFromLog(data.del)
    
        res.write(taskForm + delForm + formDisplay + formDisplay);
   
    }

    else if (pathInfo == "/display")
    {

      let data = importObj.returnJsonFromFile();
  // console.log(data[0].eId ,data.length)
  
   let table = `  
   <table style=" border: 1px solid black; background-color: aquamarine;  text-align: center; padding: 15px" >
   <tr>
       <th>Employee ID</th>
       <th>Task ID</th>
       <th>Task</th>
       <th>Data</th>
   </tr>
   `  
      for (let index = 0; index < data.length; index++) {
          const element = data[index];
          table += `
          <tr>
          <td> ${element.eId} </td>
          <td> ${element.tId} </td>
          <td> ${element.task} </td>
          <td> ${element.date} </td>
          </tr>
          `
        
      }
      table += `</table>`
      res.write(taskForm + delForm +  formDisplay);
    res.write(table);

    }



    res.end();
})

server.listen(port,()=>console.log(`running on port num ${port}`));

