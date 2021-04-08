import FormField from './form-field.component';

import { fields } from '../../utils/data';

import {
  Button,
  Box,
  Flex,
  Stack,
  Text,
  ButtonGroup,
  VStack,
} from '@chakra-ui/react';

const UserForm = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" alignItems="stretch">
        <Box p={4} mb={5} borderRadius="lg" borderWidth="1px">
          <Text color="teal.500" mb="2rem">
            Required Fields
          </Text>
          <VStack spacing={4}>
            <Flex direction="column">
              <FormField {...fields.firstName} value={values.firstName} handleChange={handleChange} />
              {touched.firstName && errors.firstName}
            </Flex>
            <Flex direction="column">
              <FormField {...fields.lastName} value={values.lastName} handleChange={handleChange} />
              {touched.lastName && errors.lastName}
            </Flex>
            <Flex direction="column">
              <FormField {...fields.email} value={values.email} handleChange={handleChange} />
              {touched.email && errors.email}
            </Flex>
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
            // onClick={() => routeChange('/users')}
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
  );
};

export default UserForm;