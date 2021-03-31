import { useState } from 'react';

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    e.persist();
    setEmail(e.target.value)
    console.log(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </label>
      <div>
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
}

export default LoginPage;