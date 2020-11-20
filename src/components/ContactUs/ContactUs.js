import React from "react";

import bg from "../../images/bg.png";
import classes from "./ContactUs.module.css";
const ContactUs = ({ onHide }) => {
  return (
    // <h1 onMouseLeave={onHide}>Hello</h1>
    <form onMouseLeave={onHide} className={classes.contactUs}>
      <div className={classes.imageContainer}>
        <img src={bg} alt="bgImage" />
        <h1>Coordonnées & Map</h1>
      </div>

      <div className={classes.subForm}>
        <h3>
          Hey! Pout toute information ou suggestion, merci de remplir le
          formulaire suivant.
        </h3>
        <div class={classes.formControl}>
          <input type="text" name="name" placeholder="Nom et prénom" required />
        </div>

        <div class={classes.formControl}>
          <input type="email" name="email" placeholder="email" required />
        </div>

        <div class={classes.formControl}>
          <label for="message">Message</label>

          <textarea id="message" name="message" rows="5" cols="33"></textarea>
        </div>
        <input type="submit" value="Envoyer" className={classes.submit} />
      </div>
    </form>
  );
};
export default ContactUs;
