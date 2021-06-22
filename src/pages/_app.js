import * as React from "react";
import { initialState, reducer } from "../context";
import Head from "next/head";
import { ThemeProvider, useTheme } from "@emotion/react";
import { stateContext } from "../context";
import { lightTheme } from "../theme/light";
import { darkTheme } from "../theme/dark";
import { MainHoC } from "../Components/Layout/HoC/main";

function Application({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log("state", state);
  return (
    <>
      <Head>
        <title>{state.pageTitle}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <stateContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
          <MainHoC>
            <Component {...pageProps} />
          </MainHoC>
      </stateContext.Provider>
    </>
  );
}

export default Application;
