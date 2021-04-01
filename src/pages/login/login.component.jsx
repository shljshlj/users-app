import useCustomForm from '../../hooks/useCustomForm';

const initialValues = {
  email: ''
};

const LoginPage = ({ setToken }) => {
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
        <p>Email</p>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {!values.email && <span>Please enter an email address</span>}
      </label>
      <div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
}

export default LoginPage;