import Logo from '../logo/logo.component';
import SiteNav from '../site-nav/site-nav.component';
import { ColorModeSwitcher } from '../color-mode/ColorModeSwitcher';

import { Box, Flex, useColorMode } from '@chakra-ui/react';

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="header"
      bg={colorMode === "light" ? "white" : "gray.900"}
      color={colorMode === "light" ? "black" : "white"}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"
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