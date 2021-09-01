const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [ firstAnimal, secondAnimal, ...restOfAnimals] = animals;

console.log(firstAnimal);
console.log(restOfAnimals);

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
        },
        {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { firstName, lastName, email, ...attributes } = person;

console.log(attributes);

let person2 = person;   // references the same object, changes will be applied to both

// makes a copy of person, changes to copy will not by applied to the original
// use spread to make a full copy
const personCopy = {...person};

// same in REACT
let {...theRealCopyOfPerson} = person;

console.log(personCopy.firstName == theRealCopyOfPerson.firstName);

