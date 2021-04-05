import { useState, useEffect } from 'react';

import { userService } from '../../services/userService';

import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import UserItem from './user-item.component';

import './user-list.styles.css';

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Center
} from "@chakra-ui/react"

const UserList = () => {
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
  }, [setUsers]);

  return (
    <Box
      className="table-responsive"
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
          {loading ?
            (
              <Tr>
                <Td colSpan="5">
                  <Center>
                    <LoadingSpinner />
                  </Center>
                </Td>
              </Tr>
            ) :
            users.length !== 0 ?
              users.map(user => <UserItem key={user.id} user={user} />) :
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