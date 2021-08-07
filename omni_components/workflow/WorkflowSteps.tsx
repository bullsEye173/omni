import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IWorkflowContext, WorkflowContext } from "./WorkflowContext";
import { makeStyles, Theme } from "@material-ui/core";
import WorkflowStep from "./WorkflowStep";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <WorkflowStep />;
    case 1:
      return "What is an ad group anyways?";
    default:
      return "Unknown stepIndex";
  }
}

const WorkflowSteps = (props) => {
  const classes = useStyles();

  const { workflowState, updateWorkflowState } =
    useContext<IWorkflowContext>(WorkflowContext);

  const { activeStep, steps } = workflowState;

  const setActiveStep = (step: number) => {
    updateWorkflowState({ activeStep: step });
  };

  const handleBack = () => {
    let prevStep: number = activeStep - 1;
    setActiveStep(prevStep);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      {activeStep === steps.length ? (
        <div>
          <div className="expanded">
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
          </div>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <div>
          <div className="expanded">
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
          </div>
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
            color="primary"
            className={classes.backButton}
          >
            Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default WorkflowSteps;
