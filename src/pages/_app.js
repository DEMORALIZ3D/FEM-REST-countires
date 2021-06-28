import * as React from "react";
import { initialState, reducer } from "../context";
import Head from "next/head";
import { stateContext } from "../context";
import { MainHoC } from "../Components/Layout/HoC/main";

function Application({ Component, pageProps }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <Head>
        <html lang="en" />
        <title>{state.pageTitle}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" lang="en" href="https://fonts.gstatic.com" />
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
