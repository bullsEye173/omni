import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
  purpleColor,
} from "../../nextjs-material-kit";
import { makeStyles } from "@material-ui/core/styles";

const infoStyle = makeStyles(() => ({
  infoArea: {
    width: "100%",
    margin: "0 auto",
    padding: "0px",
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px",
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  purple: {
    const: purpleColor,
  },
  iconSmall: {
    width: "16px",
    height: "16px",
  },
  iconMedium: {
    width: "26px",
    height: "26px",
  },
  iconBig: {
    width: "36px",
    height: "36px",
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden",
  },
  title: { title },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "16px",
  },
  iconWrapperVertical: {
    float: "none",
  },
  iconVertical: {
    width: "61px",
    height: "61px",
  },
}));

export default infoStyle;
