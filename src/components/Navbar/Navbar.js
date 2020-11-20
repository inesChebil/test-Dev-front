import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Transition, CSSTransition } from "react-transition-group";

import classes from "./Navbar.module.css";
import Logo from "../../images/Logo.png";
import ContactUs from "../ContactUs/ContactUs";
import BoutiqueList from "../BoutiqueList/BoutiqueList";

const Navbar = () => {
  const [showContactUs, setShowContactUs] = useState(false);
  const [showBoutique, setShowBoutique] = useState(false);

  const contact = showContactUs ? (
    <ContactUs
      className={classes.contactUsForm}
      onHide={() => setShowContactUs(false)}
    />
  ) : (
    <div onMouseEnter={() => setShowContactUs(true)}>
      <a href="#contact">Contacter Nous</a>
    </div>
  );
  const boutique = showBoutique ? (
    <BoutiqueList
      onHide={() => setShowBoutique(false)}
      className={classes.boutiqueList}
    />
  ) : (
    <div onMouseEnter={() => setShowBoutique(true)}>Boutique</div>
  );

  return (
    <div className={classes.NavbarContainer}>
      <div className={classes.Navbar}>
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div className={classes.navbarElIcon}>
          <input
            className={classes.search}
            type="text"
            placeholder="Recherche"
          />
          <FontAwesomeIcon
            icon={faSearch}
            color="#e2e2e2"
            size="lg"
            style={{ transform: "translateX(50%)" }}
          />
        </div>

        <div className={`${classes.navbarElIcon} ${classes.magasin} `}>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            color="#e2e2e2"
            size="lg"
            className={`${classes.mxright} ${classes.mgIcon1}`}
          />

          <input type="text" placeholder="Notre Magasin" />
          <FontAwesomeIcon
            size="lg"
            icon={faMapMarkerAlt}
            color="#e2e2e2"
            className={`${classes.mxleft} ${classes.mgIcon2}`}
          />
        </div>
        <div className={classes.config}>Configurateur</div>
        <div></div>
      </div>
      <div className={classes.subNav}>
        <div>
          <a href="/">Accueil</a>
        </div>
        {boutique}
        <div>
          <a href="/">Nos Realisations</a>
        </div>
        {contact}
      </div>
    </div>
  );
};
export default Navbar;
