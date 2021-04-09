import FormField from './form-field.component';

import { fields, generateRandomData } from '../../utils/data';

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
  values,
  setValues,
  canGenerate,
  handleSecondaryAction,
  secondaryActionButton
}) => {
  const generateFieldData = (type) => {
    const data = generateRandomData(type);
    setValues({ ...values, [type]: data });
    return data;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" alignItems="stretch">
        <Box p={4} mb={5} borderRadius="lg" borderWidth="1px">
          <Text color="teal.500" mb="2rem">
            Required Fields
          </Text>
          <VStack spacing={1}>
            <FormField
              {...fields.firstName}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
            <FormField
              {...fields.lastName}
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
            <FormField
              {...fields.email}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
          </VStack>
        </Box>

        <Box p={4} mb={5}>
          <VStack spacing={4}>
            <FormField
              {...fields.avatar}
              value={values.avatar}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
            />
            <FormField
              {...fields.jobTitle}
              value={values.jobTitle}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
            />
          </VStack>
        </Box>

        <Box p={4} mb={5}>
          <VStack spacing={4}>
            <FormField
              {...fields.website}
              value={values.website}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
            <FormField
              {...fields.phone}
              value={values.phone}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
          </VStack>
        </Box>

        <Box p={4} mb={5} borderRadius="lg" borderWidth="1px">
          <Text color="teal.500" mb="2rem">
            Address
      </Text>
          <VStack spacing={4}>
            <FormField {...fields.street}
              value={values.street}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
            />
            <FormField {...fields.city}
              value={values.city}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
            <FormField {...fields.state}
              value={values.state}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
            <FormField {...fields.zip}
              value={values.zip}
              onChange={handleChange}
              generate={canGenerate && generateFieldData}
              isFlex={true}
            />
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
              onClick={handleSecondaryAction}
            >
              {secondaryActionButton}
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