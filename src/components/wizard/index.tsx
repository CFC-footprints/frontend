import React from "react";
import StepWizard from "react-step-wizard";

import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

import "./styles.scss";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      actionButtons: any;
    }
  }
}

function Wizard() {
  return (
    <div className="wizard-container">
      <div className="wizard-steppers-container">
        <StepWizard>
          <Step1 />
          <Step2 />
          <Step3 />
        </StepWizard>
      </div>
    </div>
  );
}

export default Wizard;
