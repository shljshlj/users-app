import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <Box h="40px">
        &copy;
    <Link
          color="teal.500"
          href="https://github.com/shljshlj"
          target="_blank"
          rel="noopener noreferrer"
        >
          shljshlj
    </Link>
    2021
    </Box>
    </footer>
  );
};

export default Footer;