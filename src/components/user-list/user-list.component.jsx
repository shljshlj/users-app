import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { userService } from '../../services/userService';

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Image,
  Text
} from "@chakra-ui/react"

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const users = await userService.getUsers();
      console.log(users);
      setUsers(users);
      setLoading(false);
    }

    getUsers();
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Box>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th isNumeric>Id</Th>
            <Th>Picture</Th>
            <Th>Full Name</Th>
            <Th>State</Th>
            <Th>Email Address</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            users.length !== 0 ?
              users.map(user => {
                return (
                  <Tr key={user.id}>
                    <Td isNumeric>{user.id}</Td>
                    <Td>
                      <Link as={RouterLink} to={`/users/${user.id}`}>
                        <Box maxW="100px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                          <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={user.avatar || "https://via.placeholder.com/100"}
                            fallbackSrc="https://via.placeholder.com/100"
                            alt={`Profile picture of ${user.fullName}`}
                          />
                        </Box>
                      </Link>
                    </Td>
                    <Td>
                      <Link as={RouterLink} to={`/users/${user.id}`}>
                        {user.fullName}
                      </Link>
                    </Td>
                    <Td>{user.state}</Td>
                    <Td color="gray.500">{user.email}</Td>
                  </Tr>
                )
              }) :
              (
                <Tr>
                  <Td colSpan="5">
                    <Text fontSize="sm" color="gray.600" align="center">No user data</Text>
                  </Td>
                </Tr>
              )
          }
        </Tbody>
      </Table>
    </Box>
  );
}

export default UserList;