var myTuple;
myTuple = [1, "zeehan", false];
console.log(myTuple);
// we can use any data type after 3rd data type , we can use any type of data type
myTuple.push("faheem");
myTuple.push(100);
console.log(myTuple);
// if it is readonly we can not add any value , it will show error
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');
