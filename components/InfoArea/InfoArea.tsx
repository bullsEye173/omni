import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

import styles from "../../styles/jss/nextjs-material-kit/components/infoStyle";

const useStyles = styles;

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });
  const iconSize: string = props.iconSize ? props.iconSize : "medium";
  let icon = classes.iconMedium;
  if (iconSize == "small") {
    icon = classes.iconSmall;
  } else if (iconSize == "big") {
    icon = classes.iconBig;
  }
  const iconClasses = classNames({
    [icon]: true,
    [classes.iconVertical]: vertical,
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
};

InfoArea.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
  description: PropTypes.any,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
    "purple",
  ]),
  iconSize: PropTypes.oneOf(["small", "medium", "big"]),
  vertical: PropTypes.bool,
};
