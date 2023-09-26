import React from "react";
import classes from "./Caract.module.css";

const caract = (props) => {
  let pointCaract = [];
  for (let i = 0; i < props.nbPoints; i++) {
    pointCaract.push(<div key={i} className={classes.points}></div>);
  }

  return (
    <div className="d-flex">
      <div
        className={[classes.signe, classes.moins].join(" ")}
        onClick={props.moins}
      ></div>
      <div> {props.children}</div> {pointCaract}
      <div
        className={[classes.signe, classes.plus].join(" ")}
        onClick={props.plus}
      ></div>
    </div>
  );
};

export default caract;
