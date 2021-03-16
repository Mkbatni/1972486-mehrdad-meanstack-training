

function save()
{
    var data = readData()
    var key = data.cN;
    localStorage.setItem(key, JSON.stringify(data))
   

    //var val = localStorage.getItem(i)
  
    //console.log('retrieve data number ' + i + " " , JSON.parse(val))
    reset()

}

function readData()
{
    var obj = {}
    obj.cN = document.getElementById("cN").value;
    obj.pM = document.getElementById("pM").value;
    obj.bG = document.getElementById("bG").value;
    console.log("the out put is " +  obj.cN); 
    return obj;
}
function reset(){
    document.getElementById("cN").value = ""
    document.getElementById("pM").value = ""
    document.getElementById("bG").value = ""
}
