export const orchestrationSuggestions = [
  "Omni",
  "Kubernetes",
  "Istio",
  "Envoy",
  "Jenkins",
  "Openshift",
  "Terraform",
  "Helm",
  "Azure",
];

export const cloudSuggestions = [
  "S3",
  "Key Rotation",
  "Deploy my application",
  "Monitor my application",
  "Dockerize",
  "Modernize my application",
  "Build a call center",
  "Build terraform provider for my application",
  "Deploy my micro services on multi cloud",
  "Deploy my micro services on GCP",
  "List all the options to dockerize",
  "List all the options to Kubernetes and deploy",
  "Why do i need to move to Kubernetes",
  "What is the value of Istio",
  "Modernize my applications",
  "Migrate my workload to Multicloud",
];

export interface SearchState {
  searchValue: string;
  orchestrationSuggestions: string[];
  cloudSuggestions: string[];
}

export const SearchStateDefaults: SearchState = {
  searchValue: "",
  orchestrationSuggestions: orchestrationSuggestions,
  cloudSuggestions: cloudSuggestions,
};
