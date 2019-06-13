import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },

  title: { marginTop: "0px", marginBottom: "3px" },

  toolbar: { marginTop: "5px", marginBottom: "10px" },

  breadcrumbs: { padding: theme.spacing(1, 2) },

  breadcrumbLink: {
    display: "flex"
  },

  breadcrumbIcon: {
    marginRight: theme.spacing(0.5)
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  function handleClick(event) {
    event.preventDefault();
    alert("You clicked a breadcrumb.");
  }

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>

        <Grid container direction="column">
          <Box className={classes.titleContainer}>
            <Typography variant="h6" className={classes.title}>
              Texas, United States of America
            </Typography>
          </Box>

          <Paper elevation={0} className={classes.paper}>
            <Breadcrumbs
              aria-label="Breadcrumb"
              className={classes.breadcrumbs}
            >
              <Link
                color="inherit"
                href="/"
                onClick={handleClick}
                className={classes.breadcrumbLink}
              >
                <HomeIcon className={classes.breadcrumbIcon} />
                Dalworthington
              </Link>

              <Typography
                color="textPrimary"
                className={classes.breadcrumbLink}
              >
                <GrainIcon className={classes.breadcrumbIcon} />
                Park bench
              </Typography>
            </Breadcrumbs>
          </Paper>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
