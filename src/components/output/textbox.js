import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "10px",
    marginBottom: "10px"
  }
}));

export default function Textbox() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography component="p">
        Brentwood began as a community in the late 19th century, and is still
        known throughout the Bay Area for its agricultural products, primarily
        its cherries, corn and peaches. Due to urban sprawl many of the old
        farms and orchards have been replaced by suburban developments since
        1990. Brentwood is increasingly residential, with the rate of population
        growth in the triple digits during the 1990s and 69% from 2000 through
        2010. An official estimate showed the population increased nearly 21%
        during the period 2010 to 2016.
      </Typography>
    </Paper>
  );
}
