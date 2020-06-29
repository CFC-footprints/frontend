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

function Wizard() {
  const Second = (props: any) => {
    const { previousStep, nextStep } = props;

    return (
      <Container fluid>
        <Col>
          <Row>
            <h3>Seleccionar ubicación del Cultivo</h3>
          </Row>
          <Row>
            {/* <div className="wizard-dropdwon">
              <DropdownButton id="dropdown-basic-button" title="Ciudad">
                <Dropdown.Item href="#/action-1">Buenos Aires</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bariloche</Dropdown.Item>
              </DropdownButton>
            </div> */}
          </Row>
          <Row>
            <Col>
              <Button onClick={previousStep} variant="danger">
                Atrás
              </Button>
            </Col>
            <Col>
              <Button onClick={nextStep}>Siguiente</Button>
            </Col>
          </Row>
          {/* <Row>
            <div className="wizard-progress-bar">
              <ProgressBar now={10} label={`${10}%`} />
            </div>
          </Row> */}
        </Col>
      </Container>
    );
  };
  const Third = (props: any) => {
    const { previousStep, nextStep } = props;

    return (
      <Container fluid>
        <Col>
          <Row>
            <h3>Seleccione tipo de Suelo</h3>
          </Row>
          <Row>
            {/* <div className="wizard-dropdwon">
              <DropdownButton id="dropdown-basic-button" title="Ciudad">
                <Dropdown.Item href="#/action-1">Buenos Aires</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bariloche</Dropdown.Item>
              </DropdownButton>
            </div> */}
          </Row>
          <Row>
            <Col>
              <Button onClick={previousStep} variant="danger">
                Atrás
              </Button>
            </Col>
            <Col>
              <Button onClick={nextStep}>Siguiente</Button>
            </Col>
          </Row>
          {/* <Row>
            <div className="wizard-progress-bar">
              <ProgressBar now={10} label={`${10}%`} />
            </div>
          </Row> */}
        </Col>
      </Container>
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
        <Button
          onClick={() => handleClick("carbono")}
          className="wizard-buttons"
          variant="secondary"
        >
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
          <div />
        </StepWizard>
      </div>
    </div>
  );
}

export default Wizard;
