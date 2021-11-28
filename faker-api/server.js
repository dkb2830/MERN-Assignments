const express = require("express");
const faker = require("faker")
const app = express();
const port = 8000;


app.get("/api/users/new", (request, response)=>(
const createUser = () => {
    const newUser = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone_num: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
})

const createCompany = () => {
    const newCompany = {
        name: faker.commerce.productName(),
        street: faker.address.streetName() ,
        city: faker.address.city(),
        state: faker.address.state() ,
        zipcode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany;
};

const newFakeUser = createUser();
console.log(newFakeUser);



const newFakeCompany = createCompany();
console.log(newFakeCompany);

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
