function display() {
    var total = 0;
    var body = document.getElementsByTagName("tbody")[0];
    for (var index = 0; index < localStorage.length; index++) {
        var dt = localStorage.getItem(localStorage.key(index));
        var st = JSON.parse(dt);
        console.log(st);
        console.log(" THIS IS  " + st['itemName'] + st['itemPrice'] + st['quanitity']);
        var newRow = body.insertRow(0);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = st['quanitity'];
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = st['itemName'];
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = "$" + st['itemPrice'];
        var itemP = +st['itemPrice'];
        var itemQ = +st['quanitity'];
        total += (itemP * itemQ);
        console.log(itemQ + " <--> " + itemP);
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = "<a href='#' onclick='deleteRec(this)'>X</a>";
    }
    console.log("Total: " + total);
    var tmp = total.toString();
    document.getElementById("tt").innerHTML = "<h4>$" + tmp + "</h4>";
}
function clearOut() {
    alert("The cart is empty. please refresh the page");
    localStorage.clear();
}
function pay() {
    alert("Thank you for shoping! come back soon.");
}
