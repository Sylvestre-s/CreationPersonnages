import React from "react";
import Classes from "./familiers.module.css";

const Familier = (props) => {
  const classImage = Classes.image;
  const classTexte = Classes.texte;

  return (
    <div>
      <div>
        <img
          style={{
            opacity: props.isCurrentFamilier ? "1" : "0.5",
            cursor: "pointer",
            transform: props.isZoomed ? "scale(1.5)" : "scale(1)",
          }}
          src={props.imageFamilier}
          className={`${classImage} image:hover mb-5`}
          alt={props.children}
          onClick={() => {
            props.clic();
          }}
        />
      </div>
      <div>
        <p
          style={{
            opacity: props.isCurrentFamilier ? "1" : "0.5",
            cursor: "pointer",
          }}
          className={classTexte}
        >
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Familier;
