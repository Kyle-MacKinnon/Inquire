import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ArrowUp from "@material-ui/icons/ArrowUpward";
import ArrowDown from "@material-ui/icons/ArrowDownward";
import ArrowLeft from "@material-ui/icons/ArrowBack";
import ArrowRight from "@material-ui/icons/ArrowForward";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  container: {
    paddingLeft: "0px",
    paddingRight: "0px"
  },
  outerGrid: { margin: "0px" },
  innerGrid: {
    padding: "10px !important",
    paddingBottom: "0px !important"
  }
}));

export default function Directions() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid>
        <Grid className={classes.outerGrid} container item xs={12} spacing={3}>
          <Grid className={classes.innerGrid} item xs={6}>
            <Paper className={classes.direction}>
              <ListItem button key={"UpDirection"}>
                <ListItemIcon>
                  <ArrowUp />
                </ListItemIcon>
                <ListItemText primary={"Oakly"} />
              </ListItem>
            </Paper>
          </Grid>

          <Grid className={classes.innerGrid} item xs={6}>
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
          <Grid className={classes.innerGrid} item xs={6}>
            <Paper className={classes.direction}>
              <ListItem button key={"LeftDirection"}>
                <ListItemIcon>
                  <ArrowLeft />
                </ListItemIcon>
                <ListItemText primary={"Concord"} />
              </ListItem>
            </Paper>
          </Grid>

          <Grid className={classes.innerGrid} item xs={6}>
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
