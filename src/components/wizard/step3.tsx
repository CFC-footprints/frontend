import React from "react";
import { useDispatch } from "react-redux";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import ActionButtons from "./actionButtons";
import updateFootprint from "../../store/actions";
import Map from "../map";
import { useTypedSelector } from "../../store/reducers";

import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";

function Step3(props: any) {
  const dispatch = useDispatch();
  const initState = useTypedSelector((state) => state);
  const { nextStep, previousStep, showButtons = true } = props;
  const { lat, lng } = initState;
  let buttons;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  // default position Chile - Santiago
  const position: [number, number] = [-33.47269, -70.64724];

  function handleSubmit() {
    dispatch(
      updateFootprint({
        markers: {
          lat: lat ? parseFloat(lat) : position[0],
          lng: lng ? parseFloat(lng) : position[1],
        },
      })
    );
  }

  return (
    <div>
      <div className="wizard-step">
        <h3>Please, select your harvest location</h3>
        <div className="wizard-maps">
          <Map />
        </div>
        <div className="wizard-coordinates">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">
                Latitude
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-sm"
              value={lat || undefined}
              onChange={(e) => {
                dispatch(
                  updateFootprint({
                    lat: e.target.value,
                  })
                );
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-lg">
                Longitude
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-sm"
              value={lng || undefined}
              onChange={(e) => {
                dispatch(
                  updateFootprint({
                    lng: e.target.value,
                  })
                );
              }}
            />
          </InputGroup>
        </div>
        <div className="wizard-coordinates-buttons">
          <Button onClick={handleSubmit}>Get Address</Button>
        </div>
      </div>
      {lat && lng ? buttons : null}
    </div>
  );
}

export default Step3;
