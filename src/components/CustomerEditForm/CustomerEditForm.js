import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './CustomerEditForm.module.css';
import { TextField } from '@mui/material';
import { editCustomer } from '../../services/customersService';

function CustomerEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSaveChanges(event) {
    event.preventDefault();
    setErrorMessage('');
    setFormErrors({});

    const formData = new FormData(event.target);

    const editCustomerData = {
      id: parseInt(id),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      bankAccount: formData.get('bankAccount'),
    };

    console.log('editCustomerData:', editCustomerData)


    try {
      const EditedCustomer = await editCustomer(editCustomerData);
      console.log('EditedCustomer:', EditedCustomer);
      navigate('/HomePage');

    } catch (errorResponse) {
      console.log('errorResponse:', errorResponse)
      if (errorResponse.response.data.message) {
        setErrorMessage(errorResponse.response.data.message);
      } else if (typeof errorResponse.response.data === 'string') {
        setErrorMessage(errorResponse.response.data);
      } else {
        setFormErrors(errorResponse.response.data.errors);
      }
    }
  }

  return (
    <>
      <form method='post' className={classes.form} onSubmit={handleSaveChanges}>
        <h1>Edit Customer</h1>
        <div>
          <TextField
            id="bankAccount"
            label="Bank Account"
            type="bankAccount"
            name="bankAccount"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          {formErrors.BankAccount && formErrors.BankAccount.map((error, index) => (
            <p key={index} className={classes.error}>{error}</p>
          ))}
        </div>
        <div>
          <TextField
            id="firstname"
            label="First Name"
            type="firstname"
            name="firstname"
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
            Save Changes
          </button>
          <button type="button" onClick={()=>navigate('/homepage')}>
            Back
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

export default CustomerEditForm;