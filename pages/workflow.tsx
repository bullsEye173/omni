import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WorkflowStepper from "../omni_components/workflow/WorkflowStepper";
import WorkflowSteps from "../omni_components/workflow/WorkflowSteps";
import { WorkflowProvider } from "../omni_components/workflow/WorkflowContext";

const useStyles = makeStyles((theme) => ({
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

export default function Workflow() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WorkflowProvider>
        <WorkflowStepper />
        <WorkflowSteps />
      </WorkflowProvider>
    </div>
  );
}
