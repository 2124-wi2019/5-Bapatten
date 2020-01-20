/*Bryan Patten
patten_a05a.js
INFO 2124
Lisa Thoendel
01/19/2020*/

let toDo = ["Wash dishes", "Clean garage", "Buy groceries", "Finish classwork"];
/*Set four tasks in an array literal as part of a To Do list*/
console.log(toDo);
/*Write out each item of the array toDo in order*/
toDo.unshift("Walk dog");
/*Add new task to the beginning of the array toDo*/
console.log(toDo);
/*Wite out array toDo in order with new task at the beginning*/
toDo.reverse();
toDo.sort();
console.log(toDo);
/*Reverse array, sort it, then output the results*/
toDo.includes("x");
/*Determine if the array toDo contains the letter "x"*/

let groceryList = new Array("Apples", "Cheese", "Milk", "Bread", "Eggs", "Bacon");
/*Set six items in an array constructor as part of a Grocery List*/
console.log(groceryList);
/*Write out the array groceryList*/
let firstItem = groceryList.shift();
/*Remove first item from groceryList array and store it in a new variable*/
console.log(groceryList);
/*Write out the array groceryList minus the removed item*/
groceryList.splice(2, 0, "Chicken", "Corn");
/*Add two new items to groceryList array starting at index 2. Does not remove any previous items from array*/
console.log(groceryList);
/*Write out the array groceryList with the two new items added in*/
