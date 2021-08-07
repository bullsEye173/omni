import React from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import { GiAbstract039 } from "react-icons/gi";

import {
  CreateSharp,
  DashboardSharp,
  ExpandLess,
  ExpandMore,
  FeaturedPlayListSharp,
  HomeSharp,
} from "@material-ui/icons";
import Link from "next/link";

const drawerWidth = 270;
const useStyles = makeStyles((theme) => ({
  list: {
    margin: "5px 0",
  },
  listItem: {
    //Your existing styles
    paddingTop: "18px",
    paddingBottom: "18px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function SideNav(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="Navbar">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className="navbar-middle">
          <Link href="/">
            <a>
              <GiAbstract039 className="icon-spin" size="2rem" />
              <span className="brand">
                Omni
                <span>RPA</span>
              </span>
            </a>
          </Link>
        </div>
        <Divider />
        <List className={classes.list}>
          <Link href="/">
            <a>
              <ListItem className={classes.listItem} button key={"Home"}>
                <ListItemIcon>
                  <HomeSharp />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </a>
          </Link>

          <ListItem
            className={classes.listItem}
            button
            onClick={handleClick}
            key={"Workflow"}
          >
            <ListItemIcon>
              <DashboardSharp />
            </ListItemIcon>
            <ListItemText primary={"Workflow"} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link href="/workflow">
                <a>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <CreateSharp />
                    </ListItemIcon>
                    <ListItemText primary="Create your own" />
                  </ListItem>
                </a>
              </Link>
              <Link href="/workflow">
                <a>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <FeaturedPlayListSharp />
                    </ListItemIcon>
                    <ListItemText primary="Omni Recommended" />
                  </ListItem>
                </a>
              </Link>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNav;
