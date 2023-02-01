import MenuHeader from "./components/MenuHeader";
import About from "./components/ExtraPages/About/About";
import PlotHelp from "./components/ExtraPages/Help/PlotHelp";
import DataHelp from "./components/ExtraPages/Help/DataHelp";
import IndicesHelp from "./components/ExtraPages/Help/IndicesHelp";
import { Route, Routes, useLocation } from "react-router-dom";
import PlotExplorerContainer from "./components/PlotExplorerContainer";
import MissingPlots from "./components/ExtraPages/Help/MissingPlots";
import TimeHelp from "./components/ExtraPages/Help/TimeHelp";
import Acknowledgements from "./components/ExtraPages/About/Acknowledgements";
import Usage from "./components/ExtraPages/Help/Usage";
import AboutExplorer from "./components/ExtraPages/About/AboutExplorer";
import IndicesCalculation from "./components/ExtraPages/About/IndicesCalculation";
import DownloadHelp from "./components/ExtraPages/Help/DownloadHelp";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  // // ReactGA.initialize("G-Z3CPW8C13P"); // might need to change to this but the UA seems ok
  // prod g tag is G-9Z94K0H3DM
  ReactGA.initialize("UA-228675619-1");

  const location = useLocation();

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search + location.hash,
      page_search: location.search,
      page_hash: location.hash,
    });
  }, [location]);

  return (
    // rendering just the menu header means it'll display on every page, each route is different
    // Everything should be wrapped in a div
    <div>
      <MenuHeader />
      {/* Need to have Routes here and not in a separate file for them to be accessed properly */}
      <Routes>
        <Route exact path="/" element={<PlotExplorerContainer />} />
        <Route path="index" element={<PlotExplorerContainer />} />
        <Route path="about" element={<About />} />
        <Route path="plot-help" element={<PlotHelp />} />
        <Route path="data-help" element={<DataHelp />} />
        <Route path="missing-plots" element={<MissingPlots />} />
        <Route path="time-help" element={<TimeHelp />} />
        <Route path="indices-help" element={<IndicesHelp />} />
        <Route path="acknowledgements" element={<Acknowledgements />} />
        <Route path="about-explorer" element={<AboutExplorer />} />
        <Route path="how-to-use" element={<Usage />} />
        <Route path="indices-calculation" element={<IndicesCalculation />} />
        <Route path="download-help" element={<DownloadHelp />} />
      </Routes>
    </div>
  );
}

export default App;
