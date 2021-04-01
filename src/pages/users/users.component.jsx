import UserList from '../../components/userList/userList.component';

import {
  Box,
  Text,
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
          <UserList />
        </VStack>
      </Grid>
    </Box>
  );
}

export default UsersPage;