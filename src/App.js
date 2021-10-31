import React from "react";
import { ThemeProvider } from "styled-components"; //recebe o como context o theme / encapusla a home e passa para os filhos
import { Reset } from "styled-reset";

import { Home } from "./Home";
import theme from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}
