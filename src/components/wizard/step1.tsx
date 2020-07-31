import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import updateFootprint from "../../store/actions";

import Drop from "../../images/drop.png";

function Step(props: any) {
  const dispatch = useDispatch();
  const { nextStep } = props;

  const handleClick = (value: string) => {
    dispatch(updateFootprint({ footprintType: value }));
    nextStep();
  };

  return (
    <div>
      <div className="wizard-step-1">
        <img
          src={Drop}
          width="100"
          height="100"
          className="footer-image"
          alt="React Bootstrap logo"
          onClick={() => handleClick("water")}
        />
        Water Footprint
      </div>
    </div>
  );
}

export default Step;
