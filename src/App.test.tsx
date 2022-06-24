import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import ReactGA from 'react-ga';

ReactGA.initialize('dummy', { testMode: true });


test("Renders Title", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const linkElement = screen.getByText("UKCORDEX Plot Explorer");
  expect(linkElement).toBeInTheDocument();
});
