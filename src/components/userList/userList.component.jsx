import { useState, useEffect } from 'react';
import { userService } from '../../services/userService';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

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
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Picture</th>
          <th>Full Name</th>
          <th>Country</th>
          <th>Email Address</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {
          users.length !== 0 ?
            users.map(user => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.avatar}</td>
                  <td>{user.fullName}</td>
                  <td>{user.country}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link as={RouterLink} to={`/users/${user.id}/edit`}>Edit</Link>
                    <Link as={RouterLink} to={`/`}>Delete</Link>
                  </td>
                </tr>
              )
            }) :
            (
              <tr>
                <td> No user data</td>
              </tr>
            )
        }
      </tbody>
    </table>
  );
}

export default UserList;