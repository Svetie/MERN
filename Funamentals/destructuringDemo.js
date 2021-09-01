// ------------------- Destructuring from an Object  -------------------
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};


let firstName = person.firstName;

// let email = person.email;
// let firstName = person.firstName;
const { email, firstName:fname, lastName, password } = person;
console.log(email);
console.log(fname);


// ------------------- Destructuring from an Array  -------------------
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// old way
caughtFish = animals[2];
console.log(caughtFish);

// new way: destructuring
const [ , , fish , , bird] = animals;
console.log(fish);
console.log(bird);

/// from assignment
const person3 = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const pass = '12345';
const { pass: hashedPass } = person3;
//Predict the output
console.log(pass);
console.log(hashedpass);


