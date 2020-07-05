import { WizardState, UPDATE_FOOTPRINT, WizardActionTypes } from "../types";

export default function updateFootprint(
  footprint: WizardState
): WizardActionTypes {
  return {
    type: UPDATE_FOOTPRINT,
    payload: footprint,
  };
}
