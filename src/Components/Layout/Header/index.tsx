import * as React from "react";
import { HeaderWrapper } from "./styles";
import { stateContext, updateTheme } from "../../../context";

const Header: React.FC = () => {
  const { state, dispatch } = React.useContext(stateContext);

  const themeToggle = () => {
    return dispatch(updateTheme(state.theme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <HeaderWrapper className="d-flex align-items-center w-100">
        <div className="d-flex align-items-center w-50">
          <span className="material-icons me-3">travel_explore</span>
          <h3 className="mb-0">Where in the world?</h3>
        </div>
        <div
          className="d-flex flex-grow-1 align-items-center justify-content-end"
          onClick={themeToggle}
        >
          <h5 className="mb-0">
            {state.theme !== "light" ? "Light Mode" : "Dark Mode"}
          </h5>
          <span
            className="material-icons pointer ms-2 ms-lg-3"
            title={`Set ${state.theme !== "light" ? "Light" : "Dark"} Mode`}
          >
            {state.theme !== "light" ? "light_mode" : "dark_mode"}
          </span>
        </div>
      </HeaderWrapper>
    </div>
  );
};

export default Header;
