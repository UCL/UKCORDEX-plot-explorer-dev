import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import App from "./App";

test("Renders Title", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const linkElement = screen.getByText("EuroCORDEX-UK Plot Explorer");
  expect(linkElement).toBeInTheDocument();
});
