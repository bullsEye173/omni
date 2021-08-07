import { SiKubernetes } from "react-icons/si";

export interface OrchestrationState {
  title: string;
  description: string;
  lastVersion: string;
  stableVersion?: string;
}

export const OrchestrationStateDefault: OrchestrationState = {
  title: "Kubernetes",
  description:
    "Kubernetes is an open source system for managing containerized applications across multiple hosts. It provides basic mechanisms for deployment, maintenance, and scaling of applications.",
  lastVersion: "v1.21.3",
  stableVersion: "v1.22.0-rc.0",
};

export interface IOrchestrationIcon {
  title: string;
  icon: any;
}
export const orchestrationIcons: IOrchestrationIcon[] = [
  { title: "Kubernetes", icon: SiKubernetes },
];
