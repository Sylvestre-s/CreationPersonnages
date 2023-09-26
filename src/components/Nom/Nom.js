import React from "react";
import Classes from "./Nom.module.css";

const Nom = (props) => {
  const classLabel = `${Classes.label}`;
  const classInput = `${Classes.input}`;

  return (
    <div className="mb-3">
      <label htmlFor="inputName" className={classLabel}>
        Le nom de votre personnage :{" "}
      </label>
      <input
        type="text"
        id="inputName"
        className={classInput}
        value={props.nom}
        onChange={props.changeNom}
      />
    </div>
  );
};

export default Nom;
