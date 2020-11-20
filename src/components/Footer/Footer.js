import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import classes from "./Footer.module.css";
import Logo from "../../images/Logo.png";
import { horaire, contactUs } from "../../api/data";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footer}>
        <div>
          <img src={Logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.infos}>
          <h1>Lien Utiles</h1>
          <h3>Configurateur</h3>
          <h3>Notre magasin</h3>
          <h3>Notice et installation</h3>
          <h3>Livraison Transport</h3>
        </div>
        <div className={classes.infos}>
          <h1>Nous Contacter</h1>
          <h3>Address</h3>
          <h3> {contactUs.address}</h3>
          <h3>telephone</h3>
          <h3> {contactUs.telephone}</h3>
        </div>
        <div className={classes.infos}>
          <h1>Horaire</h1>
          <h3>Lundi à Vendredi</h3>
          <div className={classes.dates}>
            <FontAwesomeIcon icon={faClock} color="#e2e2e2" />
            <h3>{horaire.matin}</h3>
          </div>
          <div className={classes.dates}>
            <FontAwesomeIcon icon={faClock} color="#e2e2e2" />
            <h3>{horaire.soir}</h3>
          </div>

          <h3>Samedi</h3>
          <h3>(Fermé les Samedis de janvier à Février)</h3>
          <h3>{horaire.samedi}</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
