import React from "react";
import ImagePersonnage from "./ImagePersonnage/ImagePersonnage";
import CaractPersonnage from "./CaractPersonnage/CaractPersonnage";
import Classes from "./Personnage.module.css";

const Personnage = (props) => {
  const ClassCss = Classes.points;

  return (
    <div className={ClassCss}>
      <div className="row align-items-center ">
        <div className="col-6">
          <div>
            <ImagePersonnage
              numImage={props.image}
              flecheGauche={props.precedente}
              flecheDroite={props.suivante}
            />
          </div>
        </div>

        <div className="col-6 ">
          <CaractPersonnage
            nbPointsDisponibles={props.nbPointsDisponibles}
            force={props.force}
            agilite={props.agilite}
            intelligence={props.intelligence}
            enleverPoint={props.enleverPoint}
            ajouterPoint={props.ajouterPoint}
          />
        </div>
      </div>
    </div>
  );
};

export default Personnage;
