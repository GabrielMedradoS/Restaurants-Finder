import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components"; //recebe o como context o theme / encapusla a home e passa para os filhos
import { Reset } from "styled-reset";

import { Home } from "./Home";
import theme from "./theme";

import { store } from "./redux/store";

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}
