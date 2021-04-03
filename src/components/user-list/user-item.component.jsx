import { Link as RouterLink } from 'react-router-dom';

import {
  Square,
  Tr,
  Td,
  Link,
  Image,
  useColorMode
} from "@chakra-ui/react"

const UserItem = ({ user }) => {
  const { colorMode } = useColorMode();

  return (
    <Tr>
      <Td isNumeric>{user.id}</Td>
      <Td>
        <Link as={RouterLink} to={`/users/${user.id}`}>
          <Square size="60px" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              loading="lazy"
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
  );
};

export default UserItem;