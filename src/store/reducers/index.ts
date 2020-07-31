import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { WizardState, UPDATE_FOOTPRINT, WizardActionTypes } from "../types";

const initialState: WizardState = {
  footprintType: "",
  initDateTime: undefined,
  endDateTime: new Date(),
  tokens: undefined,
  error: false,
  markers: {
    lat: -33.47269,
    lng: -70.64724,
  },
  lat: "-33.47269",
  lng: "-70.64724",
  crops: [],
  firstLvlSelection: undefined,
  secondLvlSelection: undefined,
  firstLvlArray: [],
  finalResponse: {},
};

export default function wizardReducer(
  state = initialState,
  action: WizardActionTypes
): WizardState {
  switch (action.type) {
    case UPDATE_FOOTPRINT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  wizardState: wizardReducer,
});

export const useTypedSelector: TypedUseSelectorHook<WizardState> = useSelector;
