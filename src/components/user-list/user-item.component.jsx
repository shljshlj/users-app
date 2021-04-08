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
    <Tr borderWidth={{ "base": "1px", "md": "0" }} borderRadius={{ "base": "lg", "md": "0" }}>
      <Td data-title="Id" isNumeric>{user.id}</Td>
      <Td data-title="Picture">
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
      <Td data-title="Full Name">
        <Link as={RouterLink} to={`/users/${user.id}`}>
          {`${user.firstName} ${user.lastName}`}
        </Link>
      </Td>
      <Td data-title="City">{user.city}</Td>
      <Td data-title="Email" color={colorMode === "light" ? "teal.600" : "teal.400"}>{user.email}</Td>
    </Tr>
  );
};

export default UserItem;