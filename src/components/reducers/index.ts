const defaultState = {
  wizardType: "",
};

export default function (state = defaultState, action: { type: String }) {
  const { type } = action;
  switch (type) {
    default:
      return { ...defaultState, ...state };
  }
}
