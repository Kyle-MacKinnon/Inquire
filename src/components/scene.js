import React from "react";

import Description from "./scene/description";
import Directions from "./scene/directions";
import TravelMessage from "./scene/travel-message";

export default function View() {
  return (
    <>
      <Description />
      <TravelMessage />
      <Directions />
    </>
  );
}
