import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

// Icons
import AreaIcon from "@material-ui/icons/AccountBalance";
import LocationIcon from "@material-ui/icons/LocationOn";

// Styles
const useStyles = makeStyles(theme => ({
  breadcrumbs: { padding: theme.spacing(1, 2) },
  breadcrumbLink: {
    display: "flex"
  },
  breadcrumbIcon: {
    marginRight: theme.spacing(0.5)
  }
}));

// React Component
export default function NavBreadcrumbs(props) {
  const classes = useStyles();

  function handleClick(event) {
    event.preventDefault();
    alert("You clicked a breadcrumb.");
  }

  // Generate links for all breadcrumb entries before combining
  let breadcrumbEntries = [];

  // Where the user is currently located in the game
  if (props.entries.area) {
    breadcrumbEntries.push(
      <Link
        color="inherit"
        href="/"
        onClick={handleClick}
        className={classes.breadcrumbLink}
      >
        <AreaIcon className={classes.breadcrumbIcon} />
        {props.entries.area.text}
      </Link>
    );
  }

  // What the user is currently focused on
  if (props.entries.location) {
    breadcrumbEntries.push(
      <Typography color="textPrimary" className={classes.breadcrumbLink}>
        <LocationIcon className={classes.breadcrumbIcon} />
        {props.entries.location.text}
      </Typography>
    );
  }

  return (
    <Paper elevation={0} className={classes.paper}>
      <Breadcrumbs aria-label="Breadcrumb" className={classes.breadcrumbs}>
        {breadcrumbEntries}
      </Breadcrumbs>
    </Paper>
  );
}
