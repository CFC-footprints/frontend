/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dateFormat from "date-format";
import { postETc } from "../../store/actions";
import { useTypedSelector } from "../../store/reducers";
import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";

import Drops from "../../images/drops.png";
import RRSS from "../../images/rrss.png";

function Step5(props: any) {
  const dispatch = useDispatch();
  const initState = useTypedSelector((state) => state);
  const { crops = [] } = initState;
  const { isActive } = props;

  const [result, setResult] = useState(undefined);

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
        postETc(payload).then((response) => {
          const { HH } = response.data;
          setResult(HH);
        });
      }
    }
  }, [crops, dispatch, initState, isActive, result]);

  return (
    <div>
      <div className="wizard-step">
        {result ? (
          <div>
            <div className="wizard-final-step">
              <div className="wizard-final-step-image">
                <img
                  src={Drops}
                  width="100"
                  height="100"
                  alt="Water footprint logo"
                />{" "}
              </div>
              Your Evapotranspiration is
              <div className="wizard-final-step-result">{`${result} mm`}</div>
              <div>
                <img
                  src={RRSS}
                  width="300"
                  height="30"
                  alt="Social Media logo"
                />{" "}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Step5;
