import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import classes from "./Boutique.module.css";
import bg from "../../images/bg.png";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
  },
}));
const ListItem = withStyles({
  root: {
    "&$selected": {
      background: `${bg}`,
      //   backgroundColor: "#fff",
      //   backgroundColor: "#fff",
      color: "#fff",
    },
    "&$selected:hover": {
      backgroundColor: "#4d302b",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#4d302b",
      color: "#fff",
    },
  },
  selected: {},
})(MuiListItem);
export default function BoutiqueList({ onHide }) {
  const classesStyles = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List
      className={`${classes.boutiqueList} ${classesStyles.root}`}
      component="nav"
      aria-label="main mailbox folders"
      onMouseLeave={onHide}
    >
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemText primary="Lame Bois" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemText primary="Lame Composite" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ListItemText primary="Grille Rigide" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      >
        <ListItemText primary="Panneau Bois" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(event, 4)}
      >
        <ListItemText primary="Gabillon" />
      </ListItem>
      <Router>
        <a href="/boutique" className={classes.btn}>
          Boutique
        </a>
      </Router>
    </List>
  );
}
