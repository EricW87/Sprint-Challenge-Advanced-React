import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import { waitForElement } from "@testing-library/react";
import App from './App';
import PlayerList from './components/PlayerList.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Find Hedvig Lindahl", async () => {
    const wrapper = rtl.render(<App />);
    const player = await waitForElement(() =>
      wrapper.queryByText(/hedvig lindahl/i)
  );
  expect(player).toBeTruthy();
});

test("loads component playerlist and find hotdoy", () => {
  const app = rtl.render(<PlayerList players={[{name: "hotdog", country: "Maryland", searches: 0, key: "fake"}]}/>);
  const name = app.getByText(/hotdog/i);
  expect(name).toBeTruthy();
});
