import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.css';
import { loginUser } from '../../utills/authUtill';
import { TextField } from '@mui/material';

function AuthForm() {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailValue, setEmailValue] = useState('');


  const validateEmail = (email) => {
    setEmailValue(email); 
    if (email === '') {
      setIsEmailValid(true); 
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      setIsEmailValid(regex.test(email));
    }
  };

  async function handleLogin(event) {
    event.preventDefault();
    setErrorMessage('');
    setFormErrors({});

    const formData = new FormData(event.target);

    const AuthData = {
      email: formData.get('email'),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      password: formData.get('password'),
    };

    try {
      const loginResponse = await loginUser(AuthData);
      console.log('loginResponse:', loginResponse);
      navigate('/HomePage');

    } catch (errorResponse) {
      console.log('errorResponse:', errorResponse)
      if (errorResponse.response.data.message) {
        setErrorMessage(errorResponse.response.data.message);
      } else {
        setFormErrors(errorResponse.response.data.errors);
      }
    }
  }

  return (
    <>
      <form method='post' className={classes.form} onSubmit={handleLogin}>
        <h1>Log in</h1>
        <div>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            required
            variant="outlined"
            onChange={(e) => validateEmail(e.target.value)}
            error={emailValue !== '' && !isEmailValid}
            fullWidth
            margin="normal"
          />
          {formErrors.Em && formErrors.Em.map((error, index) => (
            <p key={index} className={classes.error}>{error}</p>
          ))}
        </div>
        <div>
          <TextField
            id="password"
            label="Password"
            type="password"
            name="password"
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {formErrors.Password && formErrors.Password.map((error, index) => (
            <p key={index} className={classes.error}>{error}</p>
          ))}
        </div>
        <div>
          <TextField
            id="firstname"
            label="First Name"
            type="firstname"
            name="firstname"
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {formErrors.FirstName && formErrors.FirstName.map((error, index) => (
            <p key={index} className={classes.error}>{error}</p>
          ))}
        </div>
        <div>
          <TextField
            id="lastname"
            label="Last Name"
            type="lastname"
            name="lastname"
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {formErrors.LastName && formErrors.LastName.map((error, index) => (
            <p key={index} className={classes.error}>{error}</p>
          ))}
        </div>
        <div className={classes.actions}>
          <button type="submit">
            Login
          </button>
        </div>
      </form>
      {errorMessage && (
        <div style={{ color: 'red', textAlign: 'center' }}>
          <p>{errorMessage}</p>
        </div>
      )}
    </>
  );
}

export default AuthForm;