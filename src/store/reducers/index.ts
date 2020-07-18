import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { WizardState, UPDATE_FOOTPRINT, WizardActionTypes } from "../types";

const initialState: WizardState = {
  footprintType: "",
  initDateTime: undefined,
  endDateTime: new Date(),
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