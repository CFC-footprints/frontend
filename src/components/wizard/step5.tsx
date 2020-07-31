/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import ActionButtons from "./actionButtons";
import updateFootprint, { postETc } from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";

import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";

function Step5(props: any) {
  const dispatch = useDispatch();
  const initState = useTypedSelector((state) => state);
  const { crops = [], firstLvlSelection = undefined } = initState;
  const { nextStep, previousStep, showButtons = true, isActive } = props;
  let buttons;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  useEffect(() => {
    if (isActive) {
      console.log(initState);
      const { lat = "-33.47269", lng = "-70.64724" } = initState;

      const payload = {
        georef: {
          lat: parseFloat(lat),
          lon: parseFloat(lng),
        },
        crop: {
          Category: "cereals",
          Name: "winter wheat (with non-frozen soils)",
          start: "2020-07-01",
          end: "2020-07-15",
        },
        crop_stages: {
          Dev: "140.0",
          Init: "30.0",
          Late: "30.0",
          Mid: "40.0",
        },
      };
      postETc(payload).then((response) => {
        console.log(response);
      });
    }
  }, [dispatch, initState, isActive]);

  return (
    <div>
      <div className="wizard-step" />
    </div>
  );
}

export default Step5;
