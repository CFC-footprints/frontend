/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import updateFootprint from "../../store/actions";

import Drop from "../../images/drop.png";
import CarbonFootprint from "../../images/carbonfootprint.png";

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
        <div className="wizard-step-1-icon">
          <img
            src={Drop}
            width="100"
            height="100"
            className="footer-image"
            alt="Water footprint logo"
            onClick={() => handleClick("water")}
          />
          Evapotranspiration
        </div>
        <div className="wizard-step-1-icon">
          <img
            src={CarbonFootprint}
            width="100"
            height="100"
            className="footer-image"
            alt="Carbon Footprint logo"
          />
          <div>Carbon Footprint</div>
          <div>
            <small>(Coming Soon)</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step;
