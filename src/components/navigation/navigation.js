import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

import SideMenu from "./side-menu";
import BreadCrumbs from "./breadcrumbs";

// Styles
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: { marginTop: "0px", marginBottom: "3px" },
  toolbar: { marginTop: "5px", marginBottom: "10px" }
}));

// React Component
export default function Navigation(props) {
  const classes = useStyles();

  // Drawer state
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawerOpen(open);
  };

  // Side menu
  const menu = (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="Menu"
      onClick={toggleDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
  );

  // Name of the project
  const title = (
    <Box className={classes.titleContainer}>
      <Typography variant="h6" className={classes.title}>
        {props.project}
      </Typography>
    </Box>
  );

  return (
    <AppBar position="static">
      <SideMenu open={drawerOpen} toggle={toggleDrawer} />
      <Toolbar className={classes.toolbar}>
        {menu}
        <Grid container direction="column">
          {title}
          <BreadCrumbs entries={props.entries} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
