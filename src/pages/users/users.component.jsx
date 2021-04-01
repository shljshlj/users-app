import UserList from '../../components/userList/userList.component';

import {
  Box,
  Text,
  VStack,
  Grid,
  Heading
} from '@chakra-ui/react';

const UsersPage = () => {
  return (
    <Box fontSize="l">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Heading as="h1" size="xl">
            Users Page
          </Heading>
          <UserList />
        </VStack>
      </Grid>
    </Box>
  );
}

export default UsersPage;