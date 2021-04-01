import UserList from '../../components/user-list/user-list.component';

import {
  Box,
  VStack,
  Heading
} from '@chakra-ui/react';

const UsersPage = () => {
  return (
    <Box fontSize="md">
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Users Page
        </Heading>
        <UserList />
      </VStack>
    </Box>
  );
}

export default UsersPage;