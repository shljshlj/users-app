import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../services/userService';

import PageContent from '../../components/layouts/page-content.component';

import { Box, Square, Flex, Heading, Image, Grid, GridItem, Text } from '@chakra-ui/react';


const UserHeading = ({ fullName }) => {
  return (
    <Heading
      as="h1"
      size="xl"
      letterSpacing="0.1em"
      mt="1em"
    >
      {fullName}
    </Heading>
  );
};

const JobTitle = ({ jobTitle }) => {
  return (
    <Text
      mt="0.5em"
      color="gray"
      fontWeight="bold"
    >
      {jobTitle}
    </Text>
  );
};

const ProfileImage = ({ avatar, fullName }) => {
  return (
    <Square
      mx="auto"
      maxW="170px"
      size={{ "sm": "170px" }}
      borderWidth="4px"
      borderRadius="8px"
      overflow="hidden"
    >
      <Image
        loading="lazy"
        boxSize="100%"
        objectFit="cover"
        src={avatar || "https://via.placeholder.com/150"}
        fallbackSrc="https://via.placeholder.com/150"
        alt={`Profile picture of ${fullName}`}
      />
    </Square>
  );
};

const ContentDivider = ({ dividerText }) => {
  return (
    <Box
      borderBottom="1px"
      borderColor="gray.700"
      textTransform="uppercase"
      fontSize="lg"
      py={2}
      mx={{ "base": "1em", "md": "0" }}
      mt="2em"
      textAlign={{ "base": "center", "md": "unset" }}
    >
      {dividerText}
    </Box>
  );
};

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
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        width="100%"
        boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
      >
        <Grid
          templateColumns={{ "base": "1fr", "md": "1fr 2fr" }}
          // gap={4}
          my="2rem"
          justifyItems={{ "base": "center", "md": "unset" }}
        >
          <GridItem>
            <ProfileImage avatar={user.avatar} fullName={user.fullName} />
          </GridItem>
          <GridItem>
            <Flex
              direction="column"
              alignItems={{ "base": "center", "md": "flex-start" }}
            >
              <UserHeading fullName={user.fullName} />
              <JobTitle jobTitle="Senior Manager" />
            </Flex>
          </GridItem>
          <GridItem
            colStart={{ "md": 2 }}
            justifySelf="stretch"
          >
            <ContentDivider dividerText={'Contact Details'} />
          </GridItem>
        </Grid>
      </Box>
    </PageContent>
  );
}

export default UserDetailsPage;