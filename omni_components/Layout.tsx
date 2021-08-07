import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTranslation } from "react-i18next";
import SideNav from "../omni_components/home/SideNav";
import Footer from "../omni_components/home/Footer";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const trail = () => {
  const styles = [];

  [0, 0, 0].forEach((element, index) => {
    styles.push({
      animationDelay: `${index * 250}ms`,
    });
    return null;
  });
  return styles;
};

const Layout = ({ children }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideNav />
      <main className={classes.content}>
        <div className="Search">
          <h2> Cloud and Edge Native - Autonomous Workflow Platform </h2>
          <label className="fadeInUp" style={trail[0]}>
            {t("Search for your desired solutions, integrations, workflows")}
          </label>

          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
