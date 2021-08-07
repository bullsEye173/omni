import React, { createContext, useState } from "react";
import { WorkflowState, WorkflowStateDefault } from "./constants";

export interface IWorkflowContext {
  workflowState: WorkflowState;
  updateWorkflowState: React.Dispatch<React.SetStateAction<any>>;
}

export const WorkflowContext = createContext({} as IWorkflowContext);

export const WorkflowProvider = ({ children }) => {
  const [workflowState, setWorkflowState] =
    useState<WorkflowState>(WorkflowStateDefault);

  const value: IWorkflowContext = {
    workflowState,
    updateWorkflowState,
  };

  //function called to update giftInformationState with new value
  function updateWorkflowState(newState: WorkflowState) {
    setWorkflowState((prevState: WorkflowState) => {
      return { ...prevState, ...newState };
    });
  }

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  );
};
