// ------------------ 1 ------------------
// Rewrite isPrime
// not sure how to make it faster
Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(`********************************************************************`);

// ---------------------- 2 --------------------

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e5 ) {     // 100,000
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(`********************************************************************`);

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e6 ) {     // 1,000,000
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
console.log(`********************************************************************`);

// -------------------------- 3 --------------
// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    // iterative is faster!!!!!!!!!!!!!!!!!
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);


// ------------------------ 4 ---------------------
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");


// function revArr(str) {
//     let arr2 = str.split("");
//     for(let i =0; i < arr2.length / 2; i++) {
//         [arr2[i], arr2[arr2.length-1 - i]] = [arr2[arr2.length - i -1], arr2[i]];
//     }
//     let arr = arr2.join("");
//     return arr;
// }


// FASTER!!!
function revStr(str) {
    let newStr = "";
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}


const { performance } = require('perf_hooks');
const start = performance.now();
// //function here in-between
// const reversed2 = story.split("").reverse().join("");
// console.log(reversed2);
let revSt = revStr(story);
console.log(revSt);
console.log(`This took ${performance.now() - start} milliseconds to run`);

