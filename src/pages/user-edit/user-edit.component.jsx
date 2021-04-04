import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../services/userService';

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

const UserEditForm = ({ user }) => {
  const initialValues = { ...user };

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
  );
};

const UserName = ({ fullName }) => {
  return (
    <Text
      as="span"
      color="teal.500"
    >
      {fullName}
    </Text>
  );
};

const UserEditPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const user = await userService.getUserDetails(id);
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [id]);

  return (
    <PageContent>
      <PageHeading>
        Edit User {user && <UserName fullName={user.fullName} />}
      </PageHeading>
      <ContentSection>
        {
          loading ?
            <div>Loading...</div> :
            user ?
              <UserEditForm user={user} /> :
              <div>User data is not available</div>
        }
      </ContentSection>
    </PageContent>

  );
}

export default UserEditPage;