module.exports = () => {
  const faker = require('faker');
  const users = [];

  for (let i = 1; i < 45; i++) {
    const user = {
      id: i,
      fullName: faker.name.findName(),
      avatar: faker.internet.avatar(),
      email: faker.internet.email().toLowerCase(),
      website: 'www.' + faker.internet.domainName(),
      phone: faker.phone.phoneNumber(),
      state: faker.address.state(),
      city: faker.address.cityName(),
      zip: faker.address.zipCode(),
      street: faker.address.streetAddress(),
      jobTitle: faker.name.jobTitle()
    };
    users.push(user);
  }

  return {
    users
  }
}