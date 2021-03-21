var total = 0;
function getValue(name, price) {
    if (localStorage.getItem(name) == null) {
        console.log("in if statment : " + localStorage.getItem(name));
        //let priceArray:Array<Number>;
        var obj = {};
        console.log(price + typeof (price));
        var priceToNum = +price;
        obj.itemName = name;
        obj.itemPrice = priceToNum;
        obj.quanitity = 1;
        alert("1 item of " + name + " for : $" + price + " Has been added to your cart. ");
        console.log("arra s : " + obj);
        localStorage.setItem(name, JSON.stringify(obj));
    }
    else {
        var x = localStorage.getItem(name);
        var st = JSON.parse(x); //keeping this  st['itemName']
        var temp = parseInt(st['quanitity']);
        ++temp;
        st['quanitity'] = temp;
        localStorage.setItem(name, JSON.stringify(st));
        console.log(" THIS IS  " + st['itemName'] + st['itemPrice'] + st['quanitity']);
        alert(temp + " item of " + name + " for : $" + price + " Has been added to your cart. ");
    }
}
