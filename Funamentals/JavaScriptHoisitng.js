
// ----- 1  -------
console.log(hello);
var hello = 'world';

// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = "world";

// ----- 2  ------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// function test(){
//     var needle = 'magnet';
//     console.log(needle); // logs magnet
// }
// needle = 'haystack;
// test();

// ----- 3  ------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); consoles super cool, the function is never called

// ------- 4 ------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// function eat(){
    // var food;
    //   food = 'half-chicken';
    //   console.log(food);
    //   var food = 'gone';
// }
// food = 'chicken';
// console.log(food);
// eat();


// ----------------- 5 ---------------
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// after hoisting:
// var mean
// mean()
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//  -------------- 6 ---------------
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// console.log(genre); // undefined
// genre = "disco";
// function rewind() {
//     genre = "rock";
//     console.log(genre); // prints rock
//     var genre = "r&b";
//     console.log(genre); // prints r&b
// }
// rewind();
// console.log(genre); // prints disco


// ---------------- 6 ---------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


// var dojo;
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);  // prints seattle
//     var dojo = "burbank"; // gets rid of seattle
//     console.log(dojo);  // prints burbank
// }
// dojo = "san jose";
// console.log(dojo);  // prints san jose
// learn();
// console.log(dojo);  // prints san jose






