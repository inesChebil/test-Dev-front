import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import first from "../../images/showcase/first.png";
import classes from "./Showcase.module.css";
import photo1 from "../../images/showcase/photo1.png";
import photo2 from "../../images/showcase/photo2.png";
import photo3 from "../../images/showcase/photo3.png";
import photo4 from "../../images/showcase/photo4.png";
import lastImg from "../../images/showcase/last-img.png";
import pisc from "../../images/showcase/pisc.png";

const Showcase = () => {
  return (
    <div className={classes.showcase}>
      <img src={first} className={classes.first} alt="firstexample" />
      <div className={classes.container}>
        <div>
          <img src={photo1} alt="example1" />
          <div>Lame </div>
          <div>en Bois </div>
        </div>
        <div>
          <img src={photo2} alt="example2" />
          <div>Gabillon</div>
        </div>
        <div>
          <img src={photo3} alt="example3" />
          <div>Grille </div>
          <div>rigide </div>
        </div>
        <div>
          <img src={photo4} alt="example4" />
          <div>Panneau</div>
          <div>bois</div>
        </div>
        <div>
          <img src={photo1} alt="example5" />
          <div>Lame </div>
          <div>composite </div>
        </div>
        <div>
          <img src={lastImg} alt="lastImg" />
          <h1>Configurer Votre espace</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ullamcorper, velit at porta molestie, tortor metus consectetur
              tortor
            </p>
          </div>
        </div>
      </div>
      <div className={classes.realisationContainer}>
        <div className={classes.card}>
          <h1>Panneau bois</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rutrum purus ac magna hendrerit, lacinia lobortis felis pulvinar. In
            blandit sem in lobortis dapibus. In consequat ex efficitur erat
            dignissim viverra. Mauris dignissim quam arcu, sed pretium est
            viverra ac. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Suspendisse consequat enim
          </p>
          <div>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className={classes.arrowLeft}
              size="2x"
            />
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </div>
        </div>
        <img src={pisc} alt="pisc" />
      </div>
    </div>
  );
};

export default Showcase;
