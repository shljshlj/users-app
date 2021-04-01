import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Link,
  Heading
} from '@chakra-ui/react';

const Logo = () => {
  return (
    <Box>
      <Heading
        as="h6"
        size="md"
        fontWeight="bold"
        p="0"
      >
        <Link as={RouterLink} to="/users">
          Users App
      </Link>
      </Heading>
    </Box>
  );
};

export default Logo;