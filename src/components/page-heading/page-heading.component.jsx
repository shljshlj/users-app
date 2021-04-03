import { Heading } from "@chakra-ui/react";

const PageHeading = ({ children, ...rest }) => {
  return (
    <Heading
      as="h1"
      size="xl"
      fontWeight="bold"
      mt="1em"
      mb="0.2em"
      pl="24px"
      letterSpacing="0.1em"
      alignSelf="flex-start"
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default PageHeading;