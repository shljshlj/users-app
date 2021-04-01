import { Box } from "@chakra-ui/layout"

const PageContainer = (props) => {
  return (
    <Box flex="1">
      {props.children}
    </Box>
  );
};

export default PageContainer;