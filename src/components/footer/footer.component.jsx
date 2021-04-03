import { Flex, Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      color="white"
      mt="3rem"
    >
      <Flex
        w="100%"
        maxW="1200px"
        p="2rem 1rem"
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