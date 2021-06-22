import * as React from "react";

export const initialState = {
  theme: "dark",
  pageTitle: "Country checker",
};

export const updateTheme = (theme: "light" | "dark") => {
  return {
    type: "UPDATE_THEME",
    payload: theme,
  };
};

export const stateContext = React.createContext({
  dispatch: (action: { payload: unknown; type: string }) => {},
  state: initialState,
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_THEME":
      return {
        ...state,
        theme: action.payload,
        pageTitle: action.payload,
      };
    default:
      return state;
  }
};
