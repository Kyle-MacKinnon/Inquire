import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Navigation from "./components/navigation";
import Scene from "./components/scene";
import Belongings from "./components/belongings";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "10px"
  }
}));

export default function App() {
  const classes = useStyles();

  // Handle display logic
  const [display, setDisplay] = useState("scene");

  function toggleDisplay() {
    display === "scene" ? setDisplay("belongings") : setDisplay("scene");
  }

  return (
    <>
      <Navigation
        project="United States"
        entries={{
          area: { text: "California" },
          location: { text: "Brentwood" }
        }}
        toggleDisplay={toggleDisplay}
        display={display}
      />
      <Container className={classes.container}>
        {display === "scene" ? <Scene /> : <Belongings />}
      </Container>
    </>
  );
}
