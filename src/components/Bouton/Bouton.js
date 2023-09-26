import React from "react";
import classes from "./Bouton.module.css";

const bouton = (props) => {
  const btnCss = `btn ${props.typeBtn} ${props.css} ${classes.font_family}`;

  return (
    <button className={btnCss} onClick={props.clic}>
      {props.children}
    </button>
  );
};

export default bouton;
