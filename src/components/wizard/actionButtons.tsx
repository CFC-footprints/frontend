import React from "react";
import Button from "react-bootstrap/Button";

interface ActionButtons {
  nextStep(): any;
  previousStep(): any;
}

export default function ActionsButtons(props: ActionButtons) {
  const { nextStep, previousStep } = props;

  return (
    <div className="wizard-steps-buttons">
      <Button onClick={previousStep} variant="danger">
        Atrás
      </Button>
      <Button onClick={nextStep}>Siguiente</Button>
    </div>
  );
}
