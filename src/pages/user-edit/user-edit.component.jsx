import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useCustomForm from '../../hooks/useCustomForm';

import { userService } from '../../services/userService';
import { validationService } from '../../services/validationService';

import PageContent from '../../components/layouts/page-content.component';
import ContentSection from '../../components/layouts/content-section.component';
import PageHeading from '../../components/page-heading/page-heading.component';
import UserForm from '../../components/form/userForm.component';

import {
  Text,
} from '@chakra-ui/react';


const validate = {
  firstName: name => validationService.nameValidation('First Name', name),
  lastName: name => validationService.nameValidation('Last Name', name),
  email: validationService.emailValidation
};


const UserEditForm = ({ user, validate, routeChange }) => {
  const { id, ...initialValues } = user;

  const handleUpdateUser = async (values) => {
    const response = await userService.updateUser(id, values);
    if (response.error) {
      console.log(response.error);
    }

    console.log('Success! User updated');
    routeChange(`/users/${id}`);
  }

  const {
    setValues,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: handleUpdateUser
  });

  return (
    <UserForm
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      touched={touched}
      values={values}
      setValues={setValues}
      canGenerate={false}
      handleSecondaryAction={() => routeChange('/users')}
      secondaryActionButton={'Cancel'}
    />
  );
};

const UserName = ({ fullName }) => {
  return (
    <Text
      as="span"
      color="teal.500"
    >
      {fullName}
    </Text>
  );
};

const UserEditPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const response = await userService.getUserDetails(id);
      console.log(response.user);
      setUser(response.user);
      setLoading(false);
    }

    getUser();
  }, [id]);

  return (
    <PageContent>
      <PageHeading>
        Edit User {user && <UserName fullName={user.fullName} />}
      </PageHeading>
      <ContentSection>
        {
          loading ?
            <div>Loading...</div> :
            user ?
              <UserEditForm user={user} validate={validate} routeChange={routeChange} /> :
              <div>User data is not available</div>
        }
      </ContentSection>
    </PageContent>

  );
}

export default UserEditPage;

/* <UserEditForm userId={id} user={user} routeChange={routeChange} /> : */