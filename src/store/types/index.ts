export const UPDATE_FOOTPRINT = "UPDATE_FOOTPRINT";

export interface WizardState {
  footprintType?: string;
  initDateTime?: Date;
  endDateTime?: Date;
  tokens?: any;
  error?: boolean;
  markers?: {
    lat: number;
    lng: number;
  };
  lat?: string;
  lng?: string;
  crops?: { [key: string]: any };
  firstLvlSelection?: string;
  secondLvlSelection?: string;
}

interface UpdateFootprintAction {
  type: typeof UPDATE_FOOTPRINT;
  payload: WizardState;
}

export type WizardActionTypes = UpdateFootprintAction;
