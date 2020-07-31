import React from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { Image } from "react-bootstrap";
import ActionButtons from "./actionButtons";
import updateFootprint from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";

import "react-datepicker/dist/react-datepicker.css";
import Arrow from "../../images/arrow.png";

function Step2(props: any) {
  const dispatch = useDispatch();
  const { nextStep, previousStep, showButtons = true, isActive } = props;

  const initState = useTypedSelector((state) => state);

  const { initDateTime, endDateTime } = initState;

  const handleChange = (value: Date | null, type: string) => {
    if (!value) return;
    dispatch(updateFootprint({ [type]: value }));
  };

  let buttons;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  const step = (
    <div>
      <div className="wizard-step">
        <h3>Please, select your harvest start and end date</h3>
        <div className="datepicker-container">
          <DatePicker
            selected={initDateTime}
            locale="en"
            onChange={(date) => handleChange(date, "initDateTime")}
            placeholderText="initial harvest date"
          />
          <div className="datepicker-arrow">
            <Image src={Arrow} fluid />
          </div>
          <DatePicker
            selected={endDateTime}
            locale="en"
            onChange={(date) => handleChange(date, "endDateTime")}
            placeholderText="end harvest date"
          />
        </div>
      </div>
      {buttons}
    </div>
  );

  return step || null;
}

export default Step2;
