import { Form, redirect, useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';
import { loginUser } from '../utills/authUtill';

function AuthForm() {
const navigate = useNavigate();

  async function authAction() {
    const formData = new FormData();
    formData.append('email', document.getElementById('email').value);
    formData.append('firstname', document.getElementById('firstname').value);
    formData.append('lastname', document.getElementById('lastname').value);
    formData.append('password', document.getElementById('password').value);

    const AuthData = {
      email: formData.get('email'),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      password: formData.get('password'),
    };

    const loginResponse = await loginUser(AuthData);
    console.log('loginResponse:', loginResponse)
    
    navigate('/HomePage');
  }


  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Log in</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="firstname">First Name</label>
          <input id="firstname" type="firstname" name="firstname" required />
        </p>
        <p>
          <label htmlFor="lastname">Last Name</label>
          <input id="lastname" type="lastname" name="lastname" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input defaultValue="admin" id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button onClick={authAction} type="button">
            Login
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
