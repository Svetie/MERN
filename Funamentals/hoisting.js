console.log(magicalUnicorn);

var magicalUnicorn = 'Rapidash';

// anything declared with var is hoisted to the top of its scope
// like it exists, but undefined, so the value is not brought with it

// let and const do not get hoisted to the top of its scope

var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

let dojo;
dojo = "san jose";
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();
console.log("global dojo: ", dojo);








