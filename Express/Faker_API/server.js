const express = require("express");
const app = express();
const faker = require('faker');
const port = 8000;
// to access POST data
// both express.urlencoded() and express.json() are Express middleware functions. They are responsible for providing and parsing the request.body data.
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.street= faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();

    }
}

const user = new User();
const company = new Company();

// api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    console.log('inside the api call');
    console.log(res);
    console.log(user);
    res.json({ user });
})

// api route "/api/users/new" that returns a new user
app.get("/api/companies/new", (req, res) => {
    console.log('inside the api call');
    console.log(res);
    console.log(company);
    res.json({ company });
})

// api route "/api/users/new" that returns a new user
app.get("/api/user/company", (req, res) => {
    console.log('inside the api call');
    console.log(res);
    console.log(company);
    res.json({ user, company });
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );