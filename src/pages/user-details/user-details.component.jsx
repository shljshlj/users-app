import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../services/userService';

import PageContent from '../../components/layouts/page-content.component';

import { Box, Flex, Heading, Image, SimpleGrid, Spinner, Square, StackDivider, VStack } from '@chakra-ui/react';


const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const user = await userService.getUserDetails(id);
      console.log(user);
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [id]);

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (user &&
    <PageContent>
      <SimpleGrid width="100%" columns={{ md: 2 }}>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={8}
        >
          <Flex
            direction="column"
          >
            <Box mx="auto">
              <Square size="130px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image
                  loading="lazy"
                  boxSize="100%"
                  objectFit="cover"
                  src={user.avatar || "https://via.placeholder.com/100"}
                  fallbackSrc="https://via.placeholder.com/150"
                  alt={`Profile picture of ${user.fullName}`}
                />
              </Square>
            </Box>
            <Box>
              <Heading
                as="h1"
                size="lg"
              >
                {user.fullName}
              </Heading>
            </Box>
          </Flex>

        </VStack>

      </SimpleGrid>
    </PageContent>
  );
}

export default UserDetailsPage;