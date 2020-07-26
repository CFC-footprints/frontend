/* eslint-disable global-require */
import React, { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { InputGroup, FormControl } from "react-bootstrap";
import { Map, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import ActionButtons from "./actionButtons";
import updateFootprint from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";

import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";

function Step3(props: any) {
  const dispatch = useDispatch();
  const initState = useTypedSelector((state) => state);

  const { nextStep, previousStep, showButtons = true } = props;

  const refmarker = createRef<Marker>();

  const { markers } = initState;

  // own component state
  const [lat, setLat] = useState("-33.47269");
  const [lng, setLng] = useState("-70.64724");

  let buttons;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  function updatePosition() {
    const marker = refmarker.current;
    if (marker != null) {
      const newMarkers = marker.leafletElement.getLatLng();
      dispatch(updateFootprint({ markers: newMarkers }));
      setLat(newMarkers.lat.toString());
      setLng(newMarkers.lng.toString());
    }
  }

  // default position Chile - Santiago
  const position: [number, number] = [-33.47269, -70.64724];

  const icon = L.icon({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [30, 45],
  });

  const map = (
    <Map center={markers ? [markers.lat, markers.lng] : position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        icon={icon}
        draggable
        ondragend={updatePosition}
        position={markers ? [markers.lat, markers.lng] : position}
        ref={refmarker}
      />
    </Map>
  );

  return (
    <div>
      <div className="wizard-step">
        <div className="wizard-maps">{map}</div>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Latitud</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-sm"
            value={lat}
            onChange={(e) => {
              setLat(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">
              Longitud
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-sm"
            value={lng}
            onChange={(e) => {
              setLng(e.target.value);
            }}
          />
        </InputGroup>
      </div>
      {buttons}
    </div>
  );
}

export default Step3;
