import faker from 'faker';

export const generateRandomData = (type) => {
  const data = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email().toLowerCase(),
    avatar: faker.internet.avatar(),
    jobTitle: faker.name.jobTitle(),
    website: 'www.' + faker.internet.domainName(),
    phone: faker.phone.phoneNumber(),
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zip: faker.address.zipCode()
  };

  return data[type];
};

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: '',
  jobTitle: '',
  website: '',
  phone: '',
  street: '',
  city: '',
  state: '',
  zip: ''
};

export const fields = {
  firstName: {
    id: 'firstName',
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    placeholder: 'First name',
    isFieldRequired: true
  },
  lastName: {
    id: 'lastName',
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last name',
    isFieldRequired: true
  },
  email: {
    id: 'email',
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
    isFieldRequired: true
  },
  avatar: {
    id: 'avatar',
    label: 'Picture URL',
    name: 'avatar',
    type: 'text',
    placeholder: 'Picture URL',
    isFieldRequired: false
  },
  jobTitle: {
    id: 'jobTitle',
    label: 'Job Title',
    name: 'jobTitle',
    type: 'text',
    placeholder: 'Job title',
    isFieldRequired: false
  },
  website: {
    id: 'website',
    label: 'Website',
    name: 'website',
    type: 'text',
    placeholder: 'Personal website',
    isFieldRequired: false
  },
  phone: {
    id: 'phone',
    label: 'Phone',
    name: 'phone',
    type: 'text',
    placeholder: 'Phone number',
    isFieldRequired: false
  },
  street: {
    id: 'street',
    label: 'Street',
    name: 'street',
    type: 'text',
    placeholder: 'Street',
    isFieldRequired: false
  },
  city: {
    id: 'city',
    label: 'City',
    name: 'city',
    type: 'text',
    placeholder: 'City',
    isFieldRequired: false
  },
  state: {
    id: 'state',
    label: 'State',
    name: 'state',
    type: 'text',
    placeholder: 'State',
    isFieldRequired: false
  },
  zip: {
    id: 'zip',
    label: 'ZIP Code',
    name: 'zip',
    type: 'text',
    placeholder: 'ZIP code',
    isFieldRequired: false
  }
};