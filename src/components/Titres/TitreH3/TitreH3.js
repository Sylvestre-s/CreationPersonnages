import React from "react";
import classes from "./TitreH3.module.css";

const TitreH3 = (props) => {
  const classCss = `${classes.font_family}   p-3 m-3 rounded text-white text-center`;
  return <h5 className={classCss}>{props.children}</h5>;
};

export default TitreH3;
