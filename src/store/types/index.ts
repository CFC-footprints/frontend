export const UPDATE_FOOTPRINT = "UPDATE_FOOTPRINT";

export interface WizardState {
  footprintType?: string;
  initDateTime?: Date;
  endDateTime?: Date;
  tokens?: any;
  error?: boolean;
}

interface UpdateFootprintAction {
  type: typeof UPDATE_FOOTPRINT;
  payload: WizardState;
}

export type WizardActionTypes = UpdateFootprintAction;
