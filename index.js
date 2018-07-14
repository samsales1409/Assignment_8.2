//where the actual return work done
var serveFood = function(tableNumber,items){
    return items;
}
//prepareFood Callback servefood
var prepareFood = function(tableNumber,items,Callback){
    return Callback(tableNumber,items);
}
//variable work done
var tableNumber=2;
var items=['coke','burger'];
//printing the values
console.log('preparing food for items -',prepareFood(tableNumber,items,serveFood));
console.log('serving food for items -',serveFood(tableNumber,items));
