import faker from 'faker';

export const generateRandomData = (type) => {
  const data = {
    fullName: faker.name.findName(),
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
  fullName: '',
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
  fullName: {
    id: 'fullName',
    label: 'Full Name',
    name: 'fullName',
    type: 'text',
    placeholder: 'Full name',
    isFlex: true,
    isFieldRequired: true
  },
  email: {
    id: 'email',
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'Email address',
    isFlex: true,
    isFieldRequired: true
  },
  avatar: {
    id: 'avatar',
    label: 'Picture URL',
    name: 'avatar',
    type: 'text',
    placeholder: 'Picture URL',
    isFlex: false,
    isFieldRequired: false
  },
  jobTitle: {
    id: 'jobTitle',
    label: 'Job Title',
    name: 'jobTitle',
    type: 'text',
    placeholder: 'Job title',
    isFlex: false,
    isFieldRequired: false
  },
  website: {
    id: 'website',
    label: 'Website',
    name: 'website',
    type: 'text',
    placeholder: 'Personal website',
    isFlex: true,
    isFieldRequired: false
  },
  phone: {
    id: 'phone',
    label: 'Phone',
    name: 'phone',
    type: 'text',
    placeholder: 'Phone number',
    isFlex: true,
    isFieldRequired: false
  },
  street: {
    id: 'street',
    label: 'Street',
    name: 'street',
    type: 'text',
    placeholder: 'Street',
    isFlex: false,
    isFieldRequired: false
  },
  city: {
    id: 'city',
    label: 'City',
    name: 'city',
    type: 'text',
    placeholder: 'City',
    isFlex: true,
    isFieldRequired: false
  },
  state: {
    id: 'state',
    label: 'State',
    name: 'state',
    type: 'text',
    placeholder: 'State',
    isFlex: true,
    isFieldRequired: false
  },
  zip: {
    id: 'zip',
    label: 'ZIP Code',
    name: 'zip',
    type: 'text',
    placeholder: 'ZIP code',
    isFlex: true,
    isFieldRequired: false
  }
};