import Logo from '../logo/logo.component';
import SiteNav from '../site-nav/site-nav.component';
import { ColorModeSwitcher } from '../color-mode/ColorModeSwitcher';

import { Box, Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      bg="teal.500"
      color="white"
    >
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        maxW="1200px"
        h="100%"
        mx="auto"
        p="1.5em 1em"
      >
        <Logo />
        <Flex
          align="center"
          justifySelf="flex-end">
          <SiteNav />
          <ColorModeSwitcher p={3} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;