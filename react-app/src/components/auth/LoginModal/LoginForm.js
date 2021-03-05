import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../services/auth";
import { setUser } from "../../../store/session";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(setUser(user))
      history.push('/')
    } else {
      setErrors(user.errors);
    }
  };

  const onClick = async(e) => {
    e.preventDefault()
    const user = await login('demo@aa.io', 'password');
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(setUser(user))
      history.push('/')
    } else {
      setErrors(user.errors);
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (

    <form onSubmit={onLogin}>
      <h1 className='form__title'>Login</h1>
      <div className='form__errors'>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className='form__input'>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='form__input'>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button className='form__button' type="submit">Login</button>
        <button className='form__button' onClick={onClick}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;
