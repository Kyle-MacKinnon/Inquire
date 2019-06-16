import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: "10px",
    marginBottom: "10px"
  }
}));

export default function View() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography component="p">Testing belongings</Typography>
    </Paper>
  );
}
