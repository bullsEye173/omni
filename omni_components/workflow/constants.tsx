export interface WorkflowState {
  steps: string[];
  activeStep: number;
}

export const WorkflowStateDefault: WorkflowState = {
  activeStep: 0,
  steps: ["Task 1", "Task 2"],
};

export const tasks = [
  "Administer a Cluster",
  "Manage Kubernetes Objects",
  "Extend Kubernetes",
  "Manage Cluster Daemons",
];
