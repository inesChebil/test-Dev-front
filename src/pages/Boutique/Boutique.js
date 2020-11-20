import React, { useEffect, useState } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import classes from "./Boutique.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.default,
  },
}));
const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#7daf3f",
      color: "#fff",
    },
    "&$selected:hover": {
      backgroundColor: "#7daf3f",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: "#7daf3f",
      color: "#fff",
    },
  },
  selected: {},
})(MuiListItem);
const Boutique = () => {
  const classesStyles = useStyles();
  const [products, setProducts] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    event.preventDefault();
    setSelectedIndex(index);
  };
  useEffect(() => {
    const apiUrl = "https://api.mocki.io/v1/af37df01";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
      });
    // console.log(products);
  }, []);
  const productCards = products.map((p) => {
    return (
      <div className={classes.card} key={p.id}>
        <img src={p.picture} />
        <p>{p.product_name}</p>
        <h3>{p.price}</h3>
      </div>
    );
  });
  return (
    <div className={classes.boutique}>
      <div className={classes.OurProd}>
        <h1>Nos Produits</h1>
      </div>
      <div className={classes.container}>
        <div className={`${classes.categories} ${classesStyles.root}`}>
          <h1> Categories</h1>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemText primary="Lame Bois" />
            </ListItem>

            <Divider />
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Lame Composite" />
            </ListItem>

            <Divider />
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Grille Rigide" />
            </ListItem>

            <Divider />
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Panneau Bois" />
            </ListItem>

            <Divider />
            <ListItem
              button
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemText primary="Gabillon" />
            </ListItem>

            <Divider />
          </List>
        </div>
        <div className={`${classes.products} `}>
          <ul>
            <li>
              <a href="/">Nouveauté</a>
            </li>
            <li>
              <a href="/">Populaire</a>
            </li>
            <li>
              <a href="/">Nouveauté</a>
            </li>
          </ul>

          {productCards}
          <input type="submit" value="Afficher Plus" className={classes.btn} />
        </div>
      </div>
    </div>
  );
};
export default Boutique;
