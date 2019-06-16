import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ArrowUp from "@material-ui/icons/LocationOn";
import ArrowDown from "@material-ui/icons/LocationOn";
import ArrowLeft from "@material-ui/icons/LocationOn";
import ArrowRight from "@material-ui/icons/LocationOn";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: "0px",
    paddingRight: "0px"
  },
  outerGrid: { margin: "0px" },
  innerGridLeft: {
    padding: "0px !important",
    paddingTop: "10px !important"
  },
  innerGridRight: {
    padding: "0px !important",
    paddingLeft: "20px !important",
    paddingTop: "10px !important"
  }
}));

export default function Directions() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid>
        <Grid className={classes.outerGrid} container item xs={12} spacing={3}>
          <Grid className={classes.innerGridLeft} item xs={6}>
            <Paper className={classes.direction}>
              <ListItem button key={"UpDirection"}>
                <ListItemIcon>
                  <ArrowUp />
                </ListItemIcon>
                <ListItemText primary={"Oakly"} />
              </ListItem>
            </Paper>
          </Grid>

          <Grid className={classes.innerGridRight} item xs={6}>
            <Paper className={classes.direction}>
              <ListItem button key={"DownDirection"}>
                <ListItemIcon>
                  <ArrowDown />
                </ListItemIcon>
                <ListItemText primary={"Livermore"} />
              </ListItem>
            </Paper>
          </Grid>
        </Grid>

        <Grid className={classes.outerGrid} container item xs={12} spacing={3}>
          <Grid className={classes.innerGridLeft} item xs={6}>
            <Paper className={classes.direction}>
              <ListItem button key={"LeftDirection"}>
                <ListItemIcon>
                  <ArrowLeft />
                </ListItemIcon>
                <ListItemText primary={"Concord"} />
              </ListItem>
            </Paper>
          </Grid>

          <Grid className={classes.innerGridRight} item xs={6}>
            <Paper className={classes.direction}>
              <ListItem button key={"RightDirection"}>
                <ListItemIcon>
                  <ArrowRight />
                </ListItemIcon>
                <ListItemText primary={"Stockton"} />
              </ListItem>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
