import { Flex, Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.700"
      color="white"
    >
      <Flex
        w="100%"
        maxW="1200px"
        p="1.5rem 1rem"
        mx="auto"
        h="100%"
      >
        <Box>
          &copy; <Link color="teal.200" href="https://github.com/shljshlj" target="_blank" rel="noopener noreferrer">shljshlj</Link> 2021
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;