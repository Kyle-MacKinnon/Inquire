import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import ToggleDisplayButton from "./navigation/toggle-display-button";
import BreadCrumbs from "./navigation/breadcrumbs";

// Styles
const useStyles = makeStyles(theme => ({
  title: { marginTop: "0px", marginBottom: "3px" },
  toolbar: { marginTop: "5px", marginBottom: "10px" }
}));

// React Component
export default function Navigation(props) {
  const classes = useStyles();

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
      <Toolbar className={classes.toolbar}>
        <ToggleDisplayButton
          toggleDisplay={props.toggleDisplay}
          display={props.display}
        />
        <Grid container direction="column">
          {title}
          <BreadCrumbs entries={props.entries} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
