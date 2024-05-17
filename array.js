var myName = "K.Naqeeb";
var myAge = 40;
var ismarried = true;
console.log(myName, myAge, ismarried);
var cart = ["Rice", "Wheat", "Oil"];
console.log(cart);
// following is another way to creat array
var myContacts = ["Kashif", "Kamran", "Danish"];
console.log(myContacts);
console.log("My cart 2nd element is ", cart[1]); // to show the specific element in array
cart[3] = "Sugar"; // to add new element in array useful when array not so big
console.log("My cart 4th element is ", cart[3]);
console.log("after adding 4th element my cart is", cart);
cart.push("soap"); // this command append the new item in array and return increased lenth of array
cart[cart.length] = "Ghee"; // to add new element in array when array is big
console.log(cart);
console.log("lenght of my cart is ", cart.length); // to print the lenght of an array
cart.pop(); // remove the last element of array
console.log(cart);
// const myBestfriend: readonly string[] = ["adeel", "danish"]; // when type read only we can not push and pop an item in it
//myBestfriend.push("ali");
//myBestfriend.pop();
