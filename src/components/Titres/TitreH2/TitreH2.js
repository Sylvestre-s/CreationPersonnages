import React from "react";
import classes from "./TitreH2.module.css";

const TitreH2 = (props) => {
  const classCss = `${classes.font_family} border border-thin border-dark bg-primary p-3 m-3 rounded text-white text-center`;
  return <h5 className={classCss}>{props.children}</h5>;
};

export default TitreH2;
