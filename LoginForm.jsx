import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
// other imports...

const LoginForm = () => {
  const [loginUser] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      // handle successful login, save token, etc.
    } catch (err) {
      console.error(err);
    }
  };

  // return statement with JSX
};
