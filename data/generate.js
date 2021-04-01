module.exports = () => {
  const faker = require('faker');
  const users = [];

  for (let i = 1; i < 45; i++) {
    const user = {
      id: i,
      email: faker.internet.email(),
      fullName: faker.name.findName(),
      avatar: faker.internet.avatar(),
      state: faker.address.state(),
      city: faker.address.city(),
      zip: faker.address.zipCode(),
      street: faker.address.streetAddress()
    };
    users.push(user);
  }

  return {
    users
  }
}