

function display()
{

   var total = 0;
   var table = document.getElementById("empID"); 
   var body = document.getElementsByTagName("tbody")[0];

    for (let index = 0; index < localStorage.length; index++) {
  
    var dt = localStorage.getItem(localStorage.key(index))
        var data = JSON.parse(dt)
    
          console.log("<br> this > : " + data.cN + data.pM + data.bG)
        

       
          console.log("<br> this : " , body.length)
        var newRow = body.insertRow(0)
        var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.cN
    var cell2 = newRow.insertCell(1);          // cell created 
    cell2.innerHTML= data.pM;     
    var cell3 = newRow.insertCell(2);
    console.log("typeof(data.bG)")
              // cell created 
              total += parseFloat(data.bG)
              console.log(total)
       
              cell3.innerHTML= "$" + data.bG;  
  }

  document.getElementById("tt").innerHTML = total;

}
