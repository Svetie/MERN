// One of the functions that we'll be using most frequently is map.
//  Map will make a copy of an array and apply our own twist to it...
//  using a callback function that takes in each element of the array
//  returning what we want to do to each element

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

// We can also use map with an array of numbers
// This will create list of cubed numbers. [1, 8, 27, 64, 125]
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

// Sometimes we want to get an array with only some of the values,
//  we can do something similar and provide a callback function,
//   this time one that returns true if we want the value of
//   false if we don't want the value

// This will create a list of only the even values... [2, 4]
// if we wanted the odds we could get them by changing the === to !==
const values = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 );

// If we want only the groceries that have the letter "o" in them we could write...

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

// We can do anything we want with that callback function as long as it returns true or false. We can even chain filter and map together if we want to.

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

// This will filter out the even numbers and cube the ones that are left over. [1, 27, 125]




