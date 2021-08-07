import React from "react";
import Muted from "../../../components/Typography/Muted";
import Badge from "../../../components/Badge/Badge";
import { LocalOfferSharp } from "@material-ui/icons";
import InfoArea from "../../../components/InfoArea/InfoArea";

interface OrchestrationVersionInfoProps {
  title: string;
  lastVersion: string;
  stableVersion?: string;
}

const OrchestrationVersionInfo = (props: OrchestrationVersionInfoProps) => {
  function getTitle() {
    return <Muted>{"Versions"}</Muted>;
  }

  function getDescription() {
    return (
      <>
        <Muted>{`Lastest and stable version for ${props.title}`}</Muted>
        <br />
        <Badge color="primary">{props.lastVersion}</Badge>{" "}
        <Badge color="info">{props.stableVersion}</Badge>
      </>
    );
  }
  return (
    <InfoArea
      title={getTitle()}
      description={getDescription()}
      icon={LocalOfferSharp}
      iconSize="small"
      iconColor="rose"
    />
  );
};

export default OrchestrationVersionInfo;
