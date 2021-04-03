import { Flex } from '@chakra-ui/react';

const PageLayout = (props) => {
  return (
    <Flex
      direction="column"
      w="100%"
      minH="100vh"
    >
      {props.children}
    </Flex>
  )
};

export default PageLayout;