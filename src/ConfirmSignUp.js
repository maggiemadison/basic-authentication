import React from 'react';
import Button from './Button';
import { styles } from './Form';

const ConfirmSignUp = (props) => {
  return (
    <div style={styles.container}>
      <input
        name='confirmationCode'
        placeholder='Confirmation Code'
        onChange={e => {e.persist();props.updateFormState(e)}}
        style={styles.input}
      />
      <Button onClick={props.confirmSignUp} title="Confirm Sign Up" />
      <h3>Please check your email for the confirmation code</h3>
    </div>
    
  )
}

export default ConfirmSignUp;
