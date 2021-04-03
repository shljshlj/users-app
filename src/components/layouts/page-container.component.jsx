import { Box } from "@chakra-ui/react"

const PageContainer = (props) => {
  return (
    <Box
      as="main"
      flex="1"
    >
      {props.children}
    </Box>
  );
};

export default PageContainer;