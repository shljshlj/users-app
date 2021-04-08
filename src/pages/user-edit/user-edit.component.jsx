import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { userService } from '../../services/userService';
import { validationService } from '../../services/validationService';

import PageContent from '../../components/layouts/page-content.component';
import ContentSection from '../../components/layouts/content-section.component';
import PageHeading from '../../components/page-heading/page-heading.component';

import { fields, initialValues } from '../../utils/data';

import {
  Button,
  Box,
  Flex,
  Stack,
  Text,
  ButtonGroup,
  VStack,
} from '@chakra-ui/react';
import FormField from '../../components/form/form-field.component';
import useCustomForm from '../../hooks/useCustomForm';

const validate = {
  firstName: name => validationService.nameValidation('First Name', name),
  lastName: name => validationService.nameValidation('Last Name', name),
  email: validationService.emailValidation
};

// const UserEditForm = ({ initialValues, validate })

const UserEditForm = ({ user, validate, routeChange }) => {
  const { id, ...initialValues } = user;

  const handleUpdateUser = async (values) => {
    const response = await userService.updateUser(id, values);
    if (response.error) {
      console.log(response.error);
    }

    console.log('Success! User updated');
    routeChange(`/users/${id}`);
  }

  const {
    setValues,
    values,
    errors,
    handleChange,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: handleUpdateUser
  });

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" alignItems="stretch">
        <Box p={4} mb={5} borderRadius="lg" borderWidth="1px">
          <Text color="teal.500" mb="2rem">
            Required Fields
        </Text>
          <VStack spacing={4}>
            <FormField {...fields.firstName} value={values.firstName} handleChange={handleChange} />
            <FormField {...fields.lastName} value={values.lastName} handleChange={handleChange} />
            <FormField {...fields.email} value={values.email} handleChange={handleChange} />
          </VStack>
        </Box>

        <Box p={4} mb={5}>
          <VStack spacing={4}>
            <FormField {...fields.avatar} value={values.avatar} handleChange={handleChange} />
            <FormField {...fields.jobTitle} value={values.jobTitle} handleChange={handleChange} />
          </VStack>
        </Box>

        <Box p={4} mb={5}>
          <VStack spacing={4}>
            <FormField {...fields.website} value={values.website} handleChange={handleChange} />
            <FormField {...fields.phone} value={values.phone} handleChange={handleChange} />
          </VStack>
        </Box>

        <Box p={4} mb={5} borderRadius="lg" borderWidth="1px">
          <Text color="teal.500" mb="2rem">
            Address
        </Text>
          <VStack spacing={4}>
            <FormField {...fields.street} value={values.street} handleChange={handleChange} />
            <FormField {...fields.city} value={values.city} handleChange={handleChange} />
            <FormField {...fields.state} value={values.state} handleChange={handleChange} />
            <FormField {...fields.zip} value={values.zip} handleChange={handleChange} />
          </VStack>
        </Box>
      </Flex>
      <Flex
        justifyContent={{ "base": "center", "md": "flex-end" }}
        p={4}
      >
        <ButtonGroup
          size="sm"
        >
          <Stack
            direction={{ "base": "row" }}
            py={2}
            spacing={6}
          >
            <Button
              height="40px"
              width="150px"
              colorScheme="blue"
              variant="outline"
              onClick={() => routeChange('/users')}
            >
              Cancel
            </Button>
            <Button
              height="40px"
              width="150px"
              colorScheme="teal"
              type="submit"
            >
              Submit
      </Button>
          </Stack>
        </ButtonGroup>
      </Flex>
    </form>
  )
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

  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const response = await userService.getUserDetails(id);
      console.log(response.user);
      setUser(response.user);
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
              <UserEditForm user={user} validate={validate} routeChange={routeChange} /> :
              <div>User data is not available</div>
        }
      </ContentSection>
    </PageContent>

  );
}

export default UserEditPage;

/* <UserEditForm userId={id} user={user} routeChange={routeChange} /> : */