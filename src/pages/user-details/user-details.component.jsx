import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { userService } from '../../services/userService';

import PageContent from '../../components/layouts/page-content.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import ModalMsg from '../../components/modal-msg/modal-msg.component';

import { Box, Square, Flex, Heading, Image, Grid, GridItem, Text, HStack, Link, Button, ButtonGroup, Stack, useDisclosure } from '@chakra-ui/react';

import { PhoneIcon, EmailIcon, ExternalLinkIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'

const UserHeading = ({ fullName }) => {
  return (
    <Heading
      as="h1"
      size="xl"
      letterSpacing="0.1em"
      mt="1em"
      textAlign={{ "base": "center", "md": "start" }}
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
      mt="1em"
      textAlign={{ "base": "center", "md": "unset" }}
    >
      {dividerText}
    </Box>
  );
};

const ContactInfo = ({ phone, email, website }) => {
  return (
    <Box
      mt="1rem"
    >
      <HStack p={2} spacing={4}>
        <PhoneIcon color="gray" />
        <Box as="span">{phone}</Box>
      </HStack>
      <HStack p={2} spacing={4}>
        <EmailIcon color="gray" />
        <Box as="span" color="teal.500">{email}</Box>
      </HStack>
      <HStack p={2} spacing={4}>
        <ExternalLinkIcon color="gray" />
        <Box as="span"><Link color="teal.500">{website}</Link></Box>
      </HStack>
    </Box>
  );
};

const AddressInfo = ({ street, city, state, zip }) => {
  return (
    <Box
      mt="1rem"
    >
      <HStack py={2} spacing={12}>
        <Box w="80px" fontWeight="bold">Street:</Box>
        <Box as="span">{street}</Box>
      </HStack>
      <HStack py={2} spacing={12}>
        <Box w="80px" fontWeight="bold">City:</Box>
        <Box as="span">{city}</Box>
      </HStack>
      <HStack py={2} spacing={12}>
        <Box w="80px" fontWeight="bold">State:</Box>
        <Box as="span">{state}</Box>
      </HStack>
      <HStack py={2} spacing={12}>
        <Box w="80px" fontWeight="bold">ZIP:</Box>
        <Box as="span">{zip}</Box>
      </HStack>
    </Box>
  );
};

const UserDetails = ({ user }) => {
  const { avatar, firstName, lastName, phone, email, website, street, city, state, zip, jobTitle } = user;
  const fullName = firstName + ' ' + lastName;

  return (
    <Grid
      templateColumns={{ "base": "1fr", "md": "1fr 2fr" }}
      rowGap={4}
      columnGap={8}
      my="2rem"
      justifyItems={{ "base": "center", "md": "unset" }}
    >
      <GridItem>
        <ProfileImage avatar={avatar} fullName={fullName} />
      </GridItem>
      <GridItem>
        <Flex
          direction="column"
          alignItems={{ "base": "center", "md": "flex-start" }}
        >
          <UserHeading fullName={fullName} />
          <JobTitle jobTitle={jobTitle} />
        </Flex>
      </GridItem>
      <GridItem
        colStart={{ "md": 2 }}
        justifySelf="stretch"
      >
        <ContentDivider dividerText={'Contact Details'} />
      </GridItem>
      <GridItem>
        <ContactInfo phone={phone} email={email} website={website} />
      </GridItem>
      <GridItem>
        <AddressInfo street={street} city={city} state={state} zip={zip} />
      </GridItem>
    </Grid>
  );
};

const UserOptions = ({ id, routeChange, deleteUser }) => {
  return (
    <Flex
      mt="4rem"
      justifyContent={{ "base": "center", "md": "flex-end" }}
      borderTop="1px"
      borderColor="gray.700"
    >
      <ButtonGroup
        mt="2rem"
        mb={{ "base": "2rem", "md": "1rem" }}
        size="sm"
      >
        <Stack
          direction={{ "base": "column", "md": "row" }}
          py={2}
          spacing={3}
        >
          <Button
            leftIcon={<EditIcon />}
            height="40px"
            width="150px"
            colorScheme="blue"
            variant="outline"
            onClick={() => routeChange(`/users/${id}/edit`)}
          >
            Edit User
      </Button>
          <Button
            leftIcon={<DeleteIcon />}
            height="40px"
            width="150px"
            colorScheme="red"
            variant="outline"
            onClick={() => deleteUser(id)}
          >
            Delete User
      </Button>
          <Button
            height="40px"
            width="150px"
            colorScheme="teal"
            onClick={() => routeChange('/users/create')}
          >
            Create New User
      </Button>
        </Stack>
      </ButtonGroup>
    </Flex>
  );
};

let timeoutIdModal;

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const openModal = () => {
    onOpen();
    clearTimeout(timeoutIdModal);

    timeoutIdModal = setTimeout(() => {
      onClose();
    }, 2000);
  }

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const response = await userService.getUserDetails(id);

      setErrorMsg({
        userError: response.error
      });
      setUser(response.user);
      setLoading(false);
    }

    getUser();
  }, [id]);

  const routeChange = (path) => {
    history.push(path);
  };

  const deleteUser = async (id) => {
    const response = await userService.deleteUser(id);

    if (response.error) {
      setErrorMsg({
        ...errorMsg,
        deleteError: response.error
      });

      openModal();
    } else {
      console.log('User deleted successfully!')
      routeChange('/users');
    }
  };

  return (
    <PageContent>
      {loading ?
        <LoadingSpinner /> :
        user ?
          (
            <Box
              as="article"
              borderWidth="1px"
              borderRadius="lg"
              p={{ "base": 4, "md": "3rem 4rem" }}
              width="100%"
              boxShadow="0 1px 2px rgba(0, 0, 0, 0.2)"
            >
              <UserDetails user={user} />
              <Box
                as="footer"
              >
                <UserOptions id={user.id} routeChange={routeChange} deleteUser={deleteUser} />
              </Box>
            </Box>
          ) :
          <Text as="h3" textAlign="center">{errorMsg.userError}</Text>
      }
      <ModalMsg isOpen={isOpen} onClose={onClose} body={errorMsg.deleteError} />
    </PageContent>
  );
}

export default UserDetailsPage;