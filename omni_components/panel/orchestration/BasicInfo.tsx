import React from "react";
import InfoArea from "../../../components/InfoArea/InfoArea";
import { IOrchestrationIcon, orchestrationIcons } from "./constants";

interface OrchestrationBasicInfoProps {
  title: string;
  description: any;
}

const OrchestrationBasicInfo = (props: OrchestrationBasicInfoProps) => {
  console.log(props.title);

  let obj: IOrchestrationIcon = orchestrationIcons.filter((obj) => {
    return obj.title === `${props.title}`;
  })[0];

  return (
    <InfoArea
      title={props.title}
      description={props.description}
      icon={obj.icon}
      iconColor="purple"
    />
  );
};

export default OrchestrationBasicInfo;
