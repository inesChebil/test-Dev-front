import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ShowCase from "../../components/ShowCase/Showcase";

import classes from "./Accueil.module.css";
const Accueil = () => {
  return (
    <div className={classes.accueil}>
      <ShowCase />
    </div>
  );
};
export default Accueil;
