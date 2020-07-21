import React from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { InputGroup, FormControl } from "react-bootstrap";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import ActionButtons from "./actionButtons";
import updateFootprint from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";
import "react-datepicker/dist/react-datepicker.css";

import "leaflet/dist/leaflet.css";

function Step3(props: any) {
  const dispatch = useDispatch();
  const { nextStep, previousStep, showButtons = true } = props;

  const initState = useTypedSelector((state) => state);

  const { initDateTime, endDateTime } = initState;

  const handleChange = (value: any) => {
    console.log(value);
    if (!value) return;
    // dispatch(updateFootprint({ [type]: value }));
    // nextStep();
  };

  let buttons;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  const position: [number, number] = [51.505, -0.09];
  const map = (
    <Map center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );

  return (
    <div>
      <div className="wizard-step">
        <div className="wizard-maps">{map}</div>
      </div>
      {buttons}
    </div>
  );
}

export default Step3;
