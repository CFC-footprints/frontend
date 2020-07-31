/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import dateFormat from "date-format";
import ActionButtons from "./actionButtons";
import updateFootprint, { postETc } from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";
import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";

function Step5(props: any) {
  const dispatch = useDispatch();
  const initState = useTypedSelector((state) => state);
  const { crops = [] } = initState;
  const { nextStep, previousStep, showButtons = true, isActive } = props;
  let buttons;

  if (showButtons) {
    buttons = <ActionButtons nextStep={nextStep} previousStep={previousStep} />;
  } else {
    buttons = null;
  }

  useEffect(() => {
    if (isActive) {
      const {
        lat = "-33.47269",
        lng = "-70.64724",
        initDateTime,
        endDateTime,
        firstLvlSelection = "cereals",
        secondLvlSelection = "barley: november - central india",
        tons,
        hectares,
      } = initState;

      const firstLvlCrop = crops[firstLvlSelection];
      const name = secondLvlSelection.split(":")[0];
      const description = secondLvlSelection.split(":")[1].trim();
      const selectedCrop = firstLvlCrop.find(
        (crop: any) => crop.Name === name && crop.Description === description
      );
      if (selectedCrop) {
        const { Dev, Init, Late, Mid } = selectedCrop;
        const payload = {
          georef: {
            lat: parseFloat(lat),
            lon: parseFloat(lng),
          },
          crop: {
            Category: selectedCrop.Category,
            Name: selectedCrop.Name,
            start: dateFormat("yyyy-MM-dd", initDateTime),
            end: dateFormat("yyyy-MM-dd", endDateTime),
          },
          crop_stages: {
            Dev,
            Init,
            Late,
            Mid,
          },
          tons,
          hectares,
        };
        postETc(payload);
      }
    }
  }, [crops, dispatch, initState, isActive]);

  return (
    <div>
      <div className="wizard-step" />
    </div>
  );
}

export default Step5;
