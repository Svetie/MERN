console.log(hello);
var hello = "world";

// var hello;
// console.log(hello);
// hello = 'world'

// 4
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

// 5
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
