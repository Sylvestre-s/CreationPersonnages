import React from "react";
import imagePlayer1 from "../../../assets/images/persos/player1.png";
import imagePlayer2 from "../../../assets/images/persos/player2.png";
import imagePlayer3 from "../../../assets/images/persos/player3.png";
import imageDragon from "../../../assets/images/familiers/dragon.png";
import imageChat from "../../../assets/images/familiers/chat.png";
import imageGelatine from "../../../assets/images/familiers/gelatine.png";
import imageSanglier from "../../../assets/images/familiers/phoenix.png";
import Classes from "./PersonnageAffiché.module.css";

const PersonnageAffiché = (props) => {
  const classImgPerso = `${Classes.imgPerso}`;
  const classImgFamilier = `${Classes.imgFamilier}`;
  const ClassPoint = `${Classes.font_family}`;
  const ClassAlign = `${Classes.align}`;

  let imgPerso = "";
  if (props.image === 1) imgPerso = imagePlayer1;
  else if (props.image === 2) imgPerso = imagePlayer2;
  else if (props.image === 3) imgPerso = imagePlayer3;

  let imgFamilier = "";
  if (props.familier === "Le dragon") imgFamilier = imageDragon;
  else if (props.familier === "Le chat") imgFamilier = imageChat;
  else if (props.familier === "Le phoenix") imgFamilier = imageSanglier;
  else if (props.familier === "La gélatine") imgFamilier = imageGelatine;

  return (
    <div className={`${ClassAlign} container`}>
      <div>
        <img src={imgPerso} alt="personnage" className={classImgPerso} />
      </div>

      <div className={`${ClassPoint}`}>
        Force : {props.force} <br />
        Agilité : {props.agilite} <br />
        Intélligence : {props.intelligence} <br />
      </div>

      <div className="">
        <img src={imgFamilier} alt="personnage" className={classImgFamilier} />
      </div>
    </div>
  );
};

export default PersonnageAffiché;
