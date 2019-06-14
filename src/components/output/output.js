import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Textbox from "./textbox";
import Directions from "./directions";
import TravelMessage from "./travel-message";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "10px"
  }
}));

export default function Output() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Textbox />
      <TravelMessage />
      <Directions />
    </Container>
  );
}
