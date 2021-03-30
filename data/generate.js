module.exports = () => {
  const faker = require('faker');
  const users = [];

  for (let i = 1; i < 95; i++) {
    const user = {
      id: i,
      email: faker.internet.email(),
      fullName: faker.name.findName(),
      avatar: faker.internet.avatar(),
      city: faker.address.cityName(),
      country: faker.address.country()
    };
    users.push(user);
  }

  return {
    users
  }
}