import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const ProgressiveStepper = (props: any): React.ReactElement => {
  /** Local States  */
  const [activeStep, setActiveStep] = React.useState(0);

  /** Handle Functions */
  function nextButton() {
    setActiveStep(activeStep + 1);
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ProgressiveStepper;
