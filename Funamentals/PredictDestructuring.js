// --------------- Problem 1 -------------
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)      // get the first one: tesla
console.log(otherRandomCar); // gets the second car: mercedes
console.log("*********************************************")


// --------------- Problem 2 -------------
const employee = {
    fname: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { fname: otherName } = employee;
//Predict the output
// console.log(fname);         // error
console.log(otherName);     // Elon
console.log("*********************************************")

// --------------- Problem 3 -------------
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);        // underfined because a person does not have a password key
console.log("*********************************************")

// --------------- Problem 4 -------------
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;   // 2
const [,,,second] = numbers;    // 5
const [ , , , , , , , ,third] = numbers; //2
//Predict the output
console.log(first == second);       // false
console.log(first == third);        // true
console.log("*********************************************")


//--------------- Problem 5 -------------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey; // error
//Predict the output
console.log(key);   // "value"
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);  // 1
console.log(willThisWork); // 5

console.log("*********************************************")
