import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import updateFootprint from "../../store/actions";
import ActionButtons from "./actionButtons";

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
        <Button
          onClick={() => handleClick("agua")}
          className="wizard-buttons"
          variant="primary"
        >
          Huella Hídrica
        </Button>
        <Button className="wizard-buttons" variant="secondary">
          Huella de Carbono
        </Button>
      </div>
    </div>
  );
}

export default Step;
