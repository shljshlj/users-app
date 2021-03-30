import {
  Box,
  Text,
  Link,
  VStack,
  Grid,
} from '@chakra-ui/react';

const UsersPage = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>
            Users Page
        </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
        </Link>
        </VStack>
      </Grid>
    </Box>
  );
}

export default UsersPage;