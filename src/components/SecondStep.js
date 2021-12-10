import React, { useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function SecondStep() {
  const { setStep, userData, setUserData } = useContext( multiStepContext );
  return (
    <div style={styles.container}> 
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['email']}
          onChange={(e)=>setUserData({...userData, "email":e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['country']}
          onChange={(e)=>setUserData({...userData, "country":e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Province"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={userData['province']}
          onChange={(e)=>setUserData({...userData, "province":e.target.value})}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={()=>setStep(1)}
        >Back</Button>
        <span> </span>
        <Button
          variant="contained"
          color="primary"
          onClick={()=>setStep(3)}
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
