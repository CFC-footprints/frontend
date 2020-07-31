import { WizardState, UPDATE_FOOTPRINT, WizardActionTypes } from "../types";
import EToLib from "../../lib/crops-eto";

export default function updateFootprint(
  footprint: WizardState
): WizardActionTypes {
  return {
    type: UPDATE_FOOTPRINT,
    payload: footprint,
  };
}

export function getCrops() {
  return EToLib.getCrops();
}

export function postETc(payload: any) {
  return EToLib.postETc(payload);
}
