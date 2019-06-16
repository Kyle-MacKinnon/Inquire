import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import LandscapeIcon from "@material-ui/icons/Landscape";

// Styles
const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(2)
  }
}));

export default function Navigation(props) {
  const classes = useStyles();

  // Which icon are we drawing?
  let icon = props.display === "scene" ? <WorkIcon /> : <LandscapeIcon />;

  return (
    <IconButton
      edge="start"
      className={classes.button}
      color="inherit"
      aria-label="Menu"
      onClick={props.toggleDisplay}
    >
      {icon}
    </IconButton>
  );
}
