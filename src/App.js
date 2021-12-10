import React, { useContext } from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import DisplayData from './components/DisplayData';

function App() {

  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    console.log(step);
    switch(step) {
      case 1 :
        return <FirstStep />
      case 2 :
        return <SecondStep />
      case 3 :
        return <ThirdStep />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 
          style={{
            color:"red",
            textDecoration:"underline"
          }}
        >ReactJS Multi Step Application</h3>
        <div className="center-stepper" style={styles.stepContainer} >
          <Stepper activeStep={currentStep-1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        { showStep(currentStep) }
        <DisplayData />
      </header>
    </div>
  );
}

const styles = {
  stepContainer: {
    width: 500,
    background: "#ddd"
  }
}

export default App;
