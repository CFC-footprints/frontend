import React from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { InputGroup, FormControl } from "react-bootstrap";
import ActionButtons from "./actionButtons";
import updateFootprint from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";

import "react-datepicker/dist/react-datepicker.css";

function Step3(props: any) {
  const dispatch = useDispatch();
  const { nextStep, previousStep, showButtons = true } = props;

  const initState = useTypedSelector((state) => state);

  const { initDateTime, endDateTime } = initState;

  const handleChange = (value: Date | null, type: string) => {
    if (!value) return;
    dispatch(updateFootprint({ [type]: value }));
    // nextStep();
  };

  let buttons;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  return (
    <div className="wizard-step">
      <h3>Latitud</h3>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Latitud</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <h3>Longitud</h3>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Longitud</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      {buttons}
    </div>
  );
}

export default Step3;
