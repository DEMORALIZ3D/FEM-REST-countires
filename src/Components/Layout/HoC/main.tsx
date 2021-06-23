import * as React from "react";
import { css, Global, ThemeProvider, useTheme } from "@emotion/react";
import Header from "../Header";
import { lightTheme } from "../../../theme/light";
import { darkTheme } from "../../../theme/dark";
import { stateContext, updateTheme } from "../../../context";

declare module "@emotion/react" {
  export interface Theme {
    layout: {
      background: {
        primary: string;
        secondary: string;
      };
      placeholder: string;
      color: string;
      border: string;
    };
  }
}

export const MainHoC: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { state, dispatch } = React.useContext(stateContext);

  const GlobalStyles = () => {
    const theme = useTheme();
    return (
      <Global
        styles={css`
          body {
            background: ${theme.layout.background.primary};
            color: ${theme.layout.color};
          }

          .pointer {
            cursor: pointer;
          }
        `}
      />
    );
  };

  React.useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(updateTheme("dark"));
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
        <Header />
        <div className="mx-3 px-1 px-lg-5">{children}</div>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
