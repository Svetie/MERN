function sayHi(name) {
    console.log('Hello ' + name);
}

// using a variable
var sayHello = function(name) {
    console.log('Hello ' + name);
};

// arrow annotation
const sayWazzup = name => {
    console.log('Hello ' + name);
};

const infr = (name, food) => {
    console.log(`Name is ${name}, food is ${food}`);
};

var square = function(n) {
    return n * n;
};

var square2 = n => {
    return n * n;
};

var square3 = n => n * n;

const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}

// shorthand
const returnObjLonghand2 = () => ({
        firstName: 'John',
        lastName: 'Wick'
});

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
        return {
            firstName: 'John',
            lastName: 'Wick'
        }
    };
    /**
      * The example below wouldn't work because the
      * brackets are interpreted as opening the body of the
      * function rather than brackets to create an object literal
      */
    // const returnObj = () => { firstNameName: 'John', lastNameName: 'Wick' }
    // surrounding the implicit return with parenthesis solves the problem
    const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

//can arrow functions be recursive without a return
//re: using single line notation with arrow functions
//ex: test = n=>n   console.log(test(5)) => 5

// test = n=>test(n-1)
// console.log(test(5))

//maximum call stack exceeded why??? cause i tried to count to negative infinity
//so yes arrow functions without a return can be recursive

//bonus 1
//anonymous self calling function - function declares it self and calls itself with 5

// console.log(function(n){return n}(5))

//bonus 2
//anonymous self calling arrow function without a return //non-recursive

// console.log((n=>n)(5))

//anonymous arrows can be self calling also

//bonus 3
//can an anonymous function be recursive
// console.log(function(n){
//     if(n === 0){
//         return 'zero'
//     }
//     return(arguments.callee(n-1))
// }(10))
//yes!!! arguments.callee references the calling function so we can use it to call itself
//
//bonus 4
//can an anonymous arrow function be recursive
// console.log(
//     ((n) =>{
//         return(n === 0) ?
//          1:n * (arguments.callee(n - 1));
//     })(5)
// );

//NOPE!!!! arrow functions do not bind several parameters that a normal function does.
//such as arguments sooooo you just call the console.log over and over again.

