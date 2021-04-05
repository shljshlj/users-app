import { useHistory } from 'react-router-dom';
import useCustomForm from '../../hooks/useCustomForm';
import { userService } from '../../services/userService';

import PageContent from '../../components/layouts/page-content.component';
import ContentSection from '../../components/layouts/content-section.component';
import PageHeading from '../../components/page-heading/page-heading.component';
import FormField from '../../components/form/form-field.component';

import { initialValues, generateRandomData, fields } from '../../utils/data';

import {
  Button,
  Box,
  Flex,
  Stack,
  Text,
  VStack,
  ButtonGroup
} from '@chakra-ui/react';



const UserCreateForm = ({ routeChange }) => {
  const handleCreateUser = async (values) => {
    const response = await userService.createUser(values);
    if (response.error) {
      console.log(response.error);
    }

    console.log('Success! User created');

    const { id } = response.user;
    routeChange(`/users`);
  }

  const {
    setValues,
    values,
    errors,
    handleChange,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: handleCreateUser
  });

  const generateFieldData = (type) => {
    const data = generateRandomData(type);
    setValues({ ...values, [type]: data });
    return data;
  };

  const resetFields = () => {
    setValues({ ...initialValues });
  }


  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" alignItems="stretch">
        <Box p={4} mb={5} borderRadius="lg" borderWidth="1px">
          <Text color="teal.500" mb="2rem">
            Required Fields
        </Text>
          <VStack spacing={4}>
            <FormField {...fields.fullName} value={values.fullName} handleChange={handleChange} generate={generateFieldData} />
            <FormField {...fields.email} value={values.email} handleChange={handleChange} generate={generateFieldData} />
          </VStack>
        </Box>

        <Box p={4} mb={5}>
          <VStack spacing={4}>
            <FormField {...fields.avatar} value={values.avatar} handleChange={handleChange} generate={generateFieldData} />
            <FormField {...fields.jobTitle} value={values.jobTitle} handleChange={handleChange} generate={generateFieldData} />
          </VStack>
        </Box>

        <Box p={4} mb={5}>
          <VStack spacing={4}>
            <FormField {...fields.website} value={values.website} handleChange={handleChange} generate={generateFieldData} />
            <FormField {...fields.phone} value={values.phone} handleChange={handleChange} generate={generateFieldData} />
          </VStack>
        </Box>

        <Box p={4} mb={5} borderRadius="lg" borderWidth="1px">
          <Text color="teal.500" mb="2rem">
            Address
        </Text>
          <VStack spacing={4}>
            <FormField {...fields.street} value={values.street} handleChange={handleChange} generate={generateFieldData} />
            <FormField {...fields.city} value={values.city} handleChange={handleChange} generate={generateFieldData} />
            <FormField {...fields.state} value={values.state} handleChange={handleChange} generate={generateFieldData} />
            <FormField {...fields.zip} value={values.zip} handleChange={handleChange} generate={generateFieldData} />
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
              onClick={resetFields}
            >
              Reset All
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
}

const UserCreatePage = () => {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <PageContent>
      <PageHeading>
        Create New User
      </PageHeading>
      <ContentSection>
        <UserCreateForm routeChange={routeChange} />
      </ContentSection>
    </PageContent>

  );
}

export default UserCreatePage;