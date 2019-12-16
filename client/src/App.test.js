import React from "react";
import * as rtl from '@testing-library/react';
import App from './App';
import PlayerClass from './components/PlayerClass';

test("renders without crashing", () => {
  const container = rtl.render(<App />);
  container.getByText(/Reset/i);

  container.getByText(/Filter by Name/i);

  container.getByTestId(/Name/i);
});

test("Name Search", () => {
  const container = rtl.render(<PlayerClass country={Brazil} name={Formiga}/>)
  container.getByText(/Formiga/i);
  container.getByText(/Brazil/i);
});
