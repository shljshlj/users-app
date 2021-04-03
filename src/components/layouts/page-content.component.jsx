import { VStack } from '@chakra-ui/react';

const PageContent = ({ children }) => {
  return (
    <VStack
      w="100%"
      maxW="900px"
      h="100%"
      px="1rem"
      py="2rem"
      mx="auto"
      spacing={10}
    >
      {children}
    </VStack>
  );
};

export default PageContent;