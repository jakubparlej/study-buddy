import React from "react";
import { StyledAverage } from "./Average.styles";

const Average = ({ average }) => {
  return <StyledAverage value={average}>{average}</StyledAverage>;
};

export default Average;
