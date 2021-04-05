import { Box } from "@chakra-ui/react"

const ContentSection = ({ children }) => {
  return (
    <Box
      width="100%"
    >
      {children}
    </Box>
  );
};

export default ContentSection;