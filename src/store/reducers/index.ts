import { combineReducers } from "redux";

import { WizardState, UPDATE_FOOTPRINT, WizardActionTypes } from "../types";

const initialState: WizardState = {
  footprintType: "",
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

export type RootState = ReturnType<typeof rootReducer>;
