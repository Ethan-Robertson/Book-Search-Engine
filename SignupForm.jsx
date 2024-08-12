import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
// other imports...

const SignupForm = () => {
  const [addUser] = useMutation(ADD_USER);
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      // handle successful signup, save token, etc.
    } catch (err) {
      console.error(err);
    }
  };

  // return statement with JSX
};
