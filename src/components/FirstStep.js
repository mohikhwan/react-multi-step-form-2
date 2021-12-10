import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext( multiStepContext );
  return (
    <div style={styles.container}> 
      <div>
        <TextField
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['firstName']}
          onChange={(e)=>setUserData({...userData, "firstName":e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['lastName']}
          onChange={(e)=>setUserData({...userData, "lastName":e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['contactNumber']}
          onChange={(e)=>setUserData({...userData, "contactNumber":e.target.value})}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={()=>setStep(2)}
        >Next</Button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    background: "white",
    padding: 50
  }
}

