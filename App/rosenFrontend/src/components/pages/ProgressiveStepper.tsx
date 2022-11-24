import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import GeneralButton from "../shared/button/Button";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const ProgressiveStepper = (props: any): React.ReactElement => {
  /** Local States  */
  const [activeStep, setActiveStep] = React.useState(0);

  /** Handle Functions */
  function nextButton() {
    setActiveStep(activeStep + 1);
  }
  return (
    <React.Fragment>
      <React.Fragment>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </React.Fragment>
      <React.Fragment>
        <GeneralButton
          background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
          color="white"
          onClick={() => nextButton()}
          padding="0 30px"
          height="40px"
          children="Next"
        />
      </React.Fragment>
    </React.Fragment>
  );
};

export default ProgressiveStepper;
