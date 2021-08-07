import React, { useContext } from "react";
import classNames from "classnames";
// material-ui components
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";

import customCheckboxRadioSwitch from "../../styles/jss/nextjs-material-kit/customCheckboxRadioSwitch";
import { useTranslation } from "react-i18next";
import { IWorkflowContext, WorkflowContext } from "./WorkflowContext";
import { tasks } from "./constants";
import { createStyles, Typography } from "@material-ui/core";

export default function CheckboxRadioSwitch() {
  const [checked, setChecked] = React.useState([24, 22]);
  const classes = customCheckboxRadioSwitch();

  const { workflowState, updateWorkflowState } =
    useContext<IWorkflowContext>(WorkflowContext);

  const { activeStep, steps } = workflowState;

  const setActiveStep = (step: number) => {
    updateWorkflowState({ activeStep: step });
  };

  const { t } = useTranslation();
  const wrapperDiv = classNames(
    classes.checkboxAndRadio,
    classes.checkboxAndRadioHorizontal
  );

  const styles: any = createStyles({
    formControlLabel: { fontSize: "1rem", color: "#333" },
  });

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    let nextStep: number = activeStep + 1;
    setActiveStep(nextStep);
    setChecked(newChecked);
  };

  return (
    <div className={wrapperDiv}>
      <h3>
        {t(
          "This section displays all individual Kubernete tasks. Select a task to see the next sequence of steps."
        )}
      </h3>
      <div className="suggestions">
        {tasks.map((answer, i) => {
          return (
            <div className="suggestion" key={i}>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={(value) => handleToggle(value)}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{ checked: classes.checked }}
                  />
                }
                classes={{ label: classes.label }}
                label={
                  <Typography style={styles.formControlLabel}>
                    {answer}
                  </Typography>
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
