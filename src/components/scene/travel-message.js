import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import DirectionsIcon from "@material-ui/icons/DirectionsWalk";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1, 1)
  }
}));

export default function TravelMessage() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography component="p">
        <ListItem key={"TravelMessage"}>
          <ListItemIcon>
            <DirectionsIcon />
          </ListItemIcon>
          <ListItemText
            primary={"You can travel to some other places from here"}
          />
        </ListItem>
      </Typography>
    </Paper>
  );
}
