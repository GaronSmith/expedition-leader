import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [checked, setChecked] = useState(false)
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [imageFile, setImageFile] = useState(null)

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp( firstName, lastName, email, password, street, 
        town, zip, state, country, imageFile);
      if (!user.errors) {
        setAuthenticated(true);
      } else {
        setErrors(user.errors);
      }
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <h1 className='form__title'>Sign Up</h1>
      <div className='form__errors'>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className='form__input'>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        ></input>
      </div>
      <div className='form__input'>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        ></input>
      </div>
      <div className='form__input'>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='form__input'>
        <label>Upload a Profile Picture</label>
        <input
          type="file"
          name="imageFile"
          onChange={(e) => setImageFile(e.target.files[0])}
          value={imageFile}
        ></input>
      </div>
      <div className='form__input'>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='form__input'> 
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className='form__input'> 
        <label>Wish to sign up for delivery?</label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={(e) => setChecked(!checked)}
          checked={checked}
        ></input>
      </div>
      {checked && (
        <div className='form__address__container'>
          <div className='form__input'>
            <label>Street Address</label>
            <input id="address"
              type="text"
              name="address"
              onChange={(e) => setStreet(e.target.value)}
              value={street}
            ></input>
          </div>
          <div className='form__input'>
            <label>Town</label>
            <input 
              type="text"
              name="town"
              onChange={(e) => setTown(e.target.value)}
              value={town}
            ></input>
          </div>
          <div className='form__input'>
            <label>State</label>
            <input 
              type="text"
              name="state"
              onChange={(e) => setState(e.target.value)}
              value={state}
            ></input>
          </div>
          <div className='form__input'>
            <label>Zip code</label>
            <input 
              type="text"
              name="zip"
              onChange={(e) => setZip(e.target.value)}
              value={zip}
            ></input>
          </div>
          <div className='form__input'>
            <label>Country</label>
            <input 
              type="text"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            ></input>
          </div>
        </div>
      )}
      <button className='form__button' type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
