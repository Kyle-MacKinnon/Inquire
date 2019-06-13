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

// Styles
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

// React Component
export default function Path(props) {
  const classes = useStyles();

  function handleClick(event) {
    event.preventDefault();
    alert("You clicked a breadcrumb.");
  }

  // Side menu
  const menu = (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="Menu"
    >
      <MenuIcon />
    </IconButton>
  );

  // Name of the project
  const title = (
    <Box className={classes.titleContainer}>
      <Typography variant="h6" className={classes.title}>
        {props.project}
      </Typography>
    </Box>
  );

  // Generate links for all breadcrumb entries before combining
  let breadCrumbEntries = [];

  // Where the user is currently located in the game
  if (props.entries.home) {
    breadCrumbEntries.push(
      <Link
        color="inherit"
        href="/"
        onClick={handleClick}
        className={classes.breadcrumbLink}
      >
        <HomeIcon className={classes.breadcrumbIcon} />
        {props.entries.home.text}
      </Link>
    );
  }

  // What the user is currently focused on
  if (props.entries.focus) {
    breadCrumbEntries.push(
      <Typography color="textPrimary" className={classes.breadcrumbLink}>
        <GrainIcon className={classes.breadcrumbIcon} />
        {props.entries.focus.text}
      </Typography>
    );
  }

  // Merge all found breadcrumbs together
  const breadCrumbs = (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs aria-label="Breadcrumb" className={classes.breadcrumbs}>
        {breadCrumbEntries}
      </Breadcrumbs>
    </Paper>
  );

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {menu}
        <Grid container direction="column">
          {title}
          {breadCrumbs}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
