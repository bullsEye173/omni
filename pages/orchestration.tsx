import React, { useState } from "react";
import OrchestrationBasicInfo from "../omni_components/panel/orchestration/BasicInfo";
import OrchestrationVersionInfo from "../omni_components/panel/orchestration/VersionInfo";
import {
  OrchestrationState,
  OrchestrationStateDefault,
} from "../omni_components/panel/orchestration/constants";
import Muted from "../components/Typography/Muted";

const Orchestration = () => {
  const [orchestrationState, setOrchestrationState] =
    useState<OrchestrationState>(OrchestrationStateDefault);

  function getDescription() {
    return (
      <>
        <Muted>{orchestrationState.description}</Muted>
        <OrchestrationVersionInfo {...orchestrationState} />
      </>
    );
  }
  return (
    <>
      <OrchestrationBasicInfo
        title={orchestrationState.title}
        description={getDescription()}
      />
    </>
  );
};

export default Orchestration;
