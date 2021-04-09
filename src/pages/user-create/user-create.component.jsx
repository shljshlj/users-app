import { useHistory } from 'react-router-dom';
import useCustomForm from '../../hooks/useCustomForm';

import { userService } from '../../services/userService';
import { validationService } from '../../services/validationService';

import PageContent from '../../components/layouts/page-content.component';
import ContentSection from '../../components/layouts/content-section.component';
import PageHeading from '../../components/page-heading/page-heading.component';
import UserForm from '../../components/form/userForm.component';

import { initialValues } from '../../utils/data';

const validate = {
  firstName: name => validationService.nameValidation('First Name', name),
  lastName: name => validationService.nameValidation('Last Name', name),
  email: validationService.emailValidation
};

const UserCreateForm = ({ routeChange }) => {
  const handleCreateUser = async (values, errors) => {
    console.log(values)
    console.log(errors)

    const response = await userService.createUser(values);
    if (response.error) {
      console.log(response.error);
    } else {
      console.log('Success! User created');

      const { id } = response.user;
      routeChange(`/users/${id}`);
    }
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
    validate,
    onSubmit: handleCreateUser
  });

  const resetFields = () => {
    setValues({ ...initialValues });
  }


  return (
    <UserForm
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      touched={touched}
      values={values}
      setValues={setValues}
      canGenerate={true}
      handleSecondaryAction={resetFields}
      secondaryActionButton={'Reset All'}
    />
  );
};


const UserCreatePage = () => {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <PageContent>
      <PageHeading>
        Create New User
      </PageHeading>
      <ContentSection>
        <UserCreateForm routeChange={routeChange} />
      </ContentSection>
    </PageContent>

  );
};

export default UserCreatePage;