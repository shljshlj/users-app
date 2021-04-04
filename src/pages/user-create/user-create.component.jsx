import useCustomForm from '../../hooks/useCustomForm';

import PageContent from '../../components/layouts/page-content.component';
import ContentSection from '../../components/layouts/content-section.component';
import PageHeading from '../../components/page-heading/page-heading.component';

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  useColorMode
} from '@chakra-ui/react';

const initialValues = {
  fullName: '',
  email: '',
  website: '',
  phone: '',
  jobTitle: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  avatar: ''
};

const UserCreateForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: (values) => console.log(values)
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={6} alignItems="stretch">
        <FormControl id="fullName" isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            required
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={values.fullName}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            required
            name="email"
            type="email"
            placeholder="Email address"
            value={values.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="website">
          <FormLabel>Website</FormLabel>
          <Input
            name="website"
            type="url"
            placeholder="Personal website"
            value={values.website}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="phone">
          <FormLabel>Phone</FormLabel>
          <Input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={values.phone}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="jobTitle">
          <FormLabel>Job Title</FormLabel>
          <Input
            name="jobTitle"
            type="text"
            placeholder="Job title"
            value={values.jobTitle}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="street">
          <FormLabel>Street</FormLabel>
          <Input
            name="street"
            type="text"
            placeholder="Street"
            value={values.street}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="city">
          <FormLabel>City</FormLabel>
          <Input
            name="city"
            type="text"
            placeholder="City"
            value={values.city}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="state">
          <FormLabel>State</FormLabel>
          <Input
            name="state"
            type="text"
            placeholder="State"
            value={values.state}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="zip">
          <FormLabel>ZIP Code</FormLabel>
          <Input
            name="zip"
            type="text"
            placeholder="ZIP code"
            value={values.zip}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="avatar">
          <FormLabel>Picture URL</FormLabel>
          <Input
            name="avatar"
            type="getUserDetails"
            placeholder="Picture URL"
            value={values.avatar}
            onChange={handleChange}
          />
        </FormControl>
      </Stack>
    </form>
  )
}

const UserCreatePage = () => {

  return (
    <PageContent>
      <PageHeading>
        Create New User
      </PageHeading>
      <ContentSection>
        <UserCreateForm />
      </ContentSection>
    </PageContent>

  );
}

export default UserCreatePage;