import React from "react";
import StepWizard from "react-step-wizard";
import ProgressBar from "react-bootstrap/ProgressBar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./styles.scss";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      actionButtons: any;
    }
  }
}

function Wizard() {
  const ActionButtons = (props: {
    nextStep: () => {};
    previousStep: () => {};
  }) => {
    const { nextStep, previousStep } = props;
    return (
      <div className="wizard-steps-buttons">
        <Button onClick={previousStep} variant="danger">
          Atrás
        </Button>
        <Button onClick={nextStep}>Siguiente</Button>
      </div>
    );
  };

  const Second = (props: any) => {
    const { nextStep, previousStep } = props;

    return (
      <div className="wizard-step">
        <h3>Seleccionar ubicación del Cultivo</h3>
        <ActionButtons nextStep={nextStep} previousStep={previousStep} />
        {/* <Row>
            <div className="wizard-progress-bar">
              <ProgressBar now={10} label={`${10}%`} />
            </div>
          </Row> */}
      </div>
    );
  };
  const Third = (props: any) => {
    const { previousStep, nextStep } = props;

    return (
      <div className="wizard-step">
        <h3>Seleccionar Tipo de suelo</h3>
        <ActionButtons nextStep={nextStep} previousStep={previousStep} />
        {/* <Row>
          <div className="wizard-progress-bar">
            <ProgressBar now={10} label={`${10}%`} />
          </div>
        </Row> */}
      </div>
    );
  };

  const First = (props: any) => {
    const { nextStep } = props;
    function handleClick(value: String) {
      nextStep();
    }
    return (
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
    );
  };

  return (
    <div className="wizard-container">
      <div className="wizard-steppers-container">
        <StepWizard>
          <First />
          <Second />
          <Third />
        </StepWizard>
      </div>
    </div>
  );
}

export default Wizard;
