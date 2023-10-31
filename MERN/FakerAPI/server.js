const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */
app.listen(port, ()=>console.log(`running on port ${port}`))
class User {
  constructor(){
    this.id = faker.datatype.uuid(),
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

console.log(new User);

class Company {
  constructor(){
    this.id = faker.datatype.uuid(),
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

console.log(new Company)
app.get("/api/users/new", (req, res) => {
  let user = new User();
  res.json({ results: user });
});

app.get("/api/companies/new", (req, res) => {
  let company = new Company();
  res.json({ results: company });
});

app.get("/api/user/company", (req, res) => {
  let user = new User();
  let company = new Company();
  res.json({
    user: user,
    company: company,
   });
});