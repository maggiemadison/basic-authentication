import React from 'react';
import Button from './Button';
import { styles } from './Form';

const SignIn = ({ signIn, updateFormState }) => {
  return (
    <div style={styles.container}>
      <input
        name='username'
        onChange={e => {e.persist();updateFormState(e)}}
        style={styles.input}
        placeholder='username'
      />
      <input
        type='password'
        name='password'
        onChange={e => {e.persist();updateFormState(e)}}
        style={styles.input}
        placeholder='password'
      />
      <Button onClick={signIn} title="Sign In" />
    </div>
  )
};

export default SignIn;