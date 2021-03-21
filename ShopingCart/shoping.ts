type MyItems = {
    itemName : string;
    itemPrice :number; 
    quanitity:number;
}
var total:number = 0;

function getValue(name: string , price:number)
{

    if(localStorage.getItem(name) == null)
    {
        console.log("in if statment : " +  localStorage.getItem(name) )
        
        
        //let priceArray:Array<Number>;
        var obj = {};
        console.log(price + typeof(price) )
       var priceToNum: number = +price;
    (<MyItems>obj).itemName = name; 
    (<MyItems>obj).itemPrice = priceToNum; 
    (<MyItems>obj).quanitity = 1; 
    alert( "1 item of "+ name + " for : $" +  price + " Has been added to your cart. " );
    console.log( "arra s : " + obj)
    localStorage.setItem(name,JSON.stringify(obj) );
    }
    else
    {
        const x:any = localStorage.getItem(name); 
       const st:any = JSON.parse(x); //keeping this  st['itemName']
        
       let temp:number = parseInt(st['quanitity']);
       ++temp;
       st['quanitity'] = temp;
        
       localStorage.setItem(name,JSON.stringify(st) );
        console.log( " THIS IS  " +  st['itemName'] + st['itemPrice'] + st['quanitity'] );
        alert( temp + " item of "+ name + " for : $" +  price + " Has been added to your cart. " );
    }
    
    
}

