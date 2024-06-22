import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginThunkAction } from '../states/auth/action';
import { Link, Navigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleLoginThunkAction({ email, password }));
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" id="email" name="email" onChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} value={password} />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
