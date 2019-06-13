import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// Icons
import ArrowIcon from "@material-ui/icons/ChevronRight";
import BagIcon from "@material-ui/icons/Work";
import ApparelIcon from "@material-ui/icons/Visibility";

// Styles
const useStyles = makeStyles(theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

// React Component
export default function SideMenu(props) {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggle(false)}
      onKeyDown={props.toggle(false)}
    >
      <List>
        <ListItem key={"Apperance"}>
          <ListItemIcon>{<ApparelIcon />}</ListItemIcon>
          <ListItemText primary={"Apperance"} />
        </ListItem>
        <ListItem button key={"Letter"}>
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
          <ListItemText primary={"Bussiness Suit"} />
        </ListItem>
      </List>
      <List>
        <ListItem key={"Inventory"}>
          <ListItemIcon>{<BagIcon />}</ListItemIcon>
          <ListItemText primary={"Inventory"} />
        </ListItem>
        <ListItem button key={"Letter"}>
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
          <ListItemText primary={"Letter"} />
        </ListItem>
        <ListItem button key={"Postage Stamp"}>
          <ListItemIcon>
            <ArrowIcon />
          </ListItemIcon>
          <ListItemText primary={"Postage Stamp"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Drawer open={props.open} onClose={props.toggle(false)}>
      {sideList()}
    </Drawer>
  );
}
