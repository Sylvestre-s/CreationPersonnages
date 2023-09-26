import React from "react";
import Classes from "./TitreH1.module.css";

const titreH1 = (props) => {
  const classCss = `${Classes.font_family} border border-dark bg-primary p-2 m-2 rounded text-white text-center`;
  return <h1 className={classCss}>{props.children}</h1>;
};

export default titreH1;
