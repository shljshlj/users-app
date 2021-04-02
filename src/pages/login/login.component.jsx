import useCustomForm from '../../hooks/useCustomForm';

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
} from '@chakra-ui/react';

const initialValues = {
  email: ''
};


const LoginPage = ({
  authToken,
  setAuthToken,
  setHasLogged
}) => {
  const loginUser = (loginData) => {
    try {
      if (authToken) {
        if (loginData.values.email !== authToken) {
          console.log(loginData)
          throw new Error("Email is not matching");
        }
        else {
          setHasLogged();
        }
      } else {
        setAuthToken(loginData.values.email);
        setHasLogged();
      }
    }
    catch (err) {
      console.log(err);
      console.log(errors);
    }
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: loginUser
  });



  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      px={8}
      bg="#fffaf6"
    >
      <Flex
        direction="column"
        alignItems="stretch"
        w="100%"
        maxWidth="500px"
        borderRadius="lg"
        borderWidth="1px"
        bg="white"
        p={8}
        mt="-20%"
      >
        <Box
          textAlign="center"
          mt="1rem"
          mb="3rem"
        >
          <Heading
            as="h1"
            mb="0.5rem"
          >
            Users App
        </Heading>
          <Text fontSize="md">
            Sign in with email to manage users data
        </Text>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing={6} alignItems="stretch">
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                required
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={values.email}
                onChange={handleChange}
              />
            </FormControl>

            <Button colorScheme="teal" type="submit">Sign In</Button>

            <Divider />

            <Popover>
              <PopoverTrigger>
                <Link fontSize="sm" textAlign="center">Forgot your email?</Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader
                  px={4}
                  pt={4}
                  fontWeight="bold"
                  fontSize="sm"
                  borderBottom="1px"
                  borderColor="teal.100"
                >
                  Email used to login:
                </PopoverHeader>
                <PopoverBody p={4}>
                  {authToken ? authToken : 'You haven\'t sign in before'}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
}

export default LoginPage;