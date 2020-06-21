import React from "react"
import StepWizard from "react-step-wizard"
import ProgressBar from "react-bootstrap/ProgressBar"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import "./styles.css"

function Wizard() {
  const First = () => {
    return (
      <Container fluid>
        <Col>
          <Row>
            <h3 className="text-center">Seleccionar ubicación del Cultivo</h3>
          </Row>
          <Row>
            <div className="wizard-dropdwon">
              <DropdownButton id="dropdown-basic-button" title="Ciudad">
                <Dropdown.Item href="#/action-1">Buenos Aires</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bariloche</Dropdown.Item>
              </DropdownButton>
            </div>
          </Row>
          <Row>
            <Col>
              <Button variant="danger">Atrás</Button>
            </Col>
            <Col>
              <Button>Siguiente</Button>
            </Col>
          </Row>
          <Row>
            <div className="wizard-progress-bar">
              <ProgressBar now={10} label={`${10}%`} />
            </div>
          </Row>
        </Col>
      </Container>
    )
  }
  return (
    <StepWizard>
      <First />
      <div />
    </StepWizard>
  )
}

export default Wizard
