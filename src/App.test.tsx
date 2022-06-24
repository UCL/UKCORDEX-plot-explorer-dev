import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import ReactGA from "react-ga";

test("Renders Title", () => {
  ReactGA.initialize("UA-228675619-1", { testMode: true });
  ReactGA.pageview(window.location.pathname + window.location.search);
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const linkElement = screen.getByText("UKCORDEX Plot Explorer");
  expect(linkElement).toBeInTheDocument();
});
