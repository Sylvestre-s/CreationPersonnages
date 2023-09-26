import React from "react";
import ImagePersonnage1 from "../../../../assets/images/persos/player1.png";
import ImagePersonnage2 from "../../../../assets/images/persos/player2.png";
import ImagePersonnage3 from "../../../../assets/images/persos/player3.png";
import Classes from "./ImagePersonnage.module.css";

const ImagePersonnage = (props) => {
  const classCss = Classes.css;

  let imageToPrint = "";
  if (props.numImage === 1) imageToPrint = ImagePersonnage1;
  else if (props.numImage === 2) imageToPrint = ImagePersonnage2;
  else if (props.numImage === 3) imageToPrint = ImagePersonnage3;

  return (
    <div className="row no-gutters text-center align-items-center">
      <div
        className={["col-1", Classes.fleche, Classes.gauche].join(" ")}
        onClick={props.flecheGauche}
      ></div>
      <div className="col">
        <img className={classCss} src={imageToPrint} alt="Personnage" />
      </div>
      <div
        className={["col-1", Classes.fleche, Classes.droite].join(" ")}
        onClick={props.flecheDroite}
      ></div>
    </div>
  );
};

export default ImagePersonnage;
