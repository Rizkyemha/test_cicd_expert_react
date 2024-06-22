import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleRegisterThunkAction } from '../states/auth/action';
import { Link, Navigate } from 'react-router-dom';

function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleRegisterThunkAction({ name, email, password }));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" onChange={(event) => setName(event.target.value)} value={name} />
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
