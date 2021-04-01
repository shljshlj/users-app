import useCustomForm from '../../hooks/useCustomForm';

const initialValues = {
  fullName: '',
  email: '',
  city: '',
  country: ''
};

const UserCreatePage = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCustomForm({
    initialValues,
    onSubmit: (values) => console.log(values)
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Full Name</p>
        <input
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          required
        />
        {!values.fullName && <span>Please enter a full name</span>}
      </label>
      <label>
        <p>Email address</p>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {!values.email && <span>Please enter an email address</span>}
      </label>
      <label>
        <p>City</p>
        <input
          name="city"
          type="city"
          value={values.city}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Country</p>
        <input
          name="country"
          type="country"
          value={values.country}
          onChange={handleChange}
        />
      </label>
      <div>
        <button type="submit">Create New User</button>
      </div>
    </form>
  );
}

export default UserCreatePage;