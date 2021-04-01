import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import {
  Box,
  List,
  ListItem,
  Link,
  Flex
} from '@chakra-ui/react';

const MenuItem = ({ children, to, ...rest }) => {
  return (
    <ListItem p={3} {...rest}>
      <Link as={RouterLink} to={to}>{children}</Link>
    </ListItem>
  )
}

const SiteNav = (props) => {
  const isActive = path => {
    return props.location.pathname === path ? 'nav-item--active' : null;
  };

  return (
    <Box
      as="nav"
    >
      <List
        d="flex"
      >
        <MenuItem to="/users" className={isActive('/users')}>Users</MenuItem>
        <MenuItem to="/users/create" className={isActive('/users/create')}>Create User</MenuItem>
      </List>
    </Box>
  );
};

export default withRouter(SiteNav);