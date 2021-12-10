import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function ThirdStep() {
  const { setStep, userData, setUserData, submitData } = useContext( multiStepContext );
  return (
    <div style={styles.container}> 
      <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['city']}
          onChange={(e)=>setUserData({...userData, "city":e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['district']}
          onChange={(e)=>setUserData({...userData, "district":e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['postalCode']}
          onChange={(e)=>setUserData({...userData, "postalCode":e.target.value})}
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={()=>setStep(2)}>Back</Button>
        <span> </span>
        <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
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
