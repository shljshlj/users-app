import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { userService } from '../../services/userService';

import {
  Square,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Image,
  Text,
  useColorMode
} from "@chakra-ui/react"

const UserList = () => {
  const { colorMode } = useColorMode();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const users = await userService.getUsers();
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
    <Box
      my="2rem"
    >
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th isNumeric>Id</Th>
            <Th>Picture</Th>
            <Th>Full Name</Th>
            <Th>City</Th>
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
                        <Square size="60px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                          <Image
                            boxSize="100%"
                            objectFit="cover"
                            src={user.avatar || "https://via.placeholder.com/100"}
                            fallbackSrc="https://via.placeholder.com/100"
                            alt={`Profile picture of ${user.fullName}`}
                          />
                        </Square>
                      </Link>
                    </Td>
                    <Td>
                      <Link as={RouterLink} to={`/users/${user.id}`}>
                        {user.fullName}
                      </Link>
                    </Td>
                    <Td>{user.city}</Td>
                    <Td color={colorMode === "light" ? "teal.600" : "teal.400"}>{user.email}</Td>
                  </Tr>
                )
              }) :
              (
                <Tr>
                  <Td colSpan="5">
                    <Text fontSize="sm" color="gray.600" align="center">There are no users to display</Text>
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