/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import ActionButtons from "./actionButtons";
import updateFootprint, { getCrops } from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";

import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";

function Step3(props: any) {
  const dispatch = useDispatch();
  const initState = useTypedSelector((state) => state);
  const {
    crops = [],
    firstLvlSelection = undefined,
    secondLvlSelection = undefined,
    tons,
    hectares,
  } = initState;
  const { nextStep, previousStep, showButtons = true, isActive } = props;
  let buttons;
  let secondLvlCrops;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  useEffect(() => {
    if (isActive) {
      getCrops().then((response) => {
        dispatch(
          updateFootprint({
            crops: response,
          })
        );
      });
    }
  }, [dispatch, isActive]);

  function onChange(event: any, level: string) {
    dispatch(
      updateFootprint({
        [level]: event.target.value,
      })
    );
  }

  const firstLvlCrops = Object.keys(crops).map((crop, index) => (
    <option key={`${crop}-${index}`}>{crop}</option>
  ));

  if (firstLvlSelection) {
    secondLvlCrops = crops[firstLvlSelection].map((crop: any, index: any) => (
      <option
        key={`${crop}-${index}`}
      >{`${crop.Name}: ${crop.Description}`}</option>
    ));
  }

  return (
    <div>
      <div className="wizard-step">
        <h3>Please, select your harvest type</h3>
        <div className="wizard-dropdown-buttons">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            defaultValue="Select one option"
            onChange={(event) => onChange(event, "firstLvlSelection")}
          >
            <option key="default">Select one option</option>
            {firstLvlCrops}
          </Form.Control>
          {secondLvlCrops && secondLvlCrops.length ? (
            <div>
              <Form.Label>Crop Dataset</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Select one option"
                onChange={(event) => onChange(event, "secondLvlSelection")}
              >
                <option key="default">Select one option</option>
                {secondLvlCrops}
              </Form.Control>
              <h3>Please, select your tons and hectares</h3>
              <div className="wizard-dropdown-tons-buttons">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      Tons
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                      dispatch(
                        updateFootprint({
                          tons: e.target.value,
                        })
                      );
                    }}
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">
                      Hectares
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => {
                      dispatch(
                        updateFootprint({
                          hectares: e.target.value,
                        })
                      );
                    }}
                  />
                </InputGroup>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {tons && hectares && firstLvlSelection && secondLvlSelection
        ? buttons
        : null}
    </div>
  );
}

export default Step3;
