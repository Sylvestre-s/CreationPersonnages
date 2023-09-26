import React from "react";
import Familier from "./familier/familier";
import imgDragon from "../../../src/assets/images/familiers/dragon.png";
import imgChat from "../../../src/assets/images/familiers/chat.png";
import imgPhoenix from "../../../src/assets/images/familiers/phoenix.png";
import imgSanglier from "../../../src/assets/images/familiers/gelatine.png";

const familiers = (props) => (
  <div className="row no-gutters text center">
    {props.listeFamiliers.map((familier) => {
      let imgFamilier;
      switch (familier) {
        case "Le chat":
          imgFamilier = imgChat;
          break;
        case "Le dragon":
          imgFamilier = imgDragon;
          break;
        case "Le phoenix":
          imgFamilier = imgPhoenix;
          break;
        default:
          imgFamilier = imgSanglier;
          break;
      }

      return (
        <div className="col-3" key={familier}>
          <Familier
            imageFamilier={imgFamilier}
            isCurrentFamilier={props.currentFamilier === familier}
            clic={() => {
              props.changeFamilier(familier);
              props.zoomFamilier(familier); // Ajoutez cette ligne
            }}
            isZoomed={props.zoomedFamilier === familier}
          >
            {familier}
          </Familier>
        </div>
      );
    })}
  </div>
);

export default familiers;
