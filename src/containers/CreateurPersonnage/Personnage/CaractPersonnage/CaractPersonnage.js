import React from "react";
import Caract from "./Caract/Caract";
import Classes from "./CaractPersonnage.module.css";

const CaractPersonnage = (props) => {
  const ClassCss = Classes.points;

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>

        <h3 className="col-9 ">
          <h2>
            Points restants :
            <span className="">{props.nbPointsDisponibles}</span>
          </h2>
          <div className={ClassCss}>
            <div className="mt-3">
              <Caract
                nbPoints={props.force}
                moins={() => props.enleverPoint("force")}
                plus={() => props.ajouterPoint("force")}
              >
                {" "}
                Puissance{" "}
              </Caract>
            </div>
            <div className="mt-3 ">
              <Caract
                nbPoints={props.agilite}
                moins={() => props.enleverPoint("agilite")}
                plus={() => props.ajouterPoint("agilite")}
              >
                {" "}
                Agilite{" "}
              </Caract>
            </div>
            <div className="mt-3">
              <Caract
                nbPoints={props.intelligence}
                moins={() => props.enleverPoint("intelligence")}
                plus={() => props.ajouterPoint("intelligence")}
              >
                {" "}
                Intelligence{" "}
              </Caract>
            </div>
          </div>
        </h3>

        <div className="col"></div>
      </div>
    </div>
  );
};

export default CaractPersonnage;
