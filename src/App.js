import MenuHeader from "./components/MenuHeader";
import About from "./components/ExtraPages/About/About";
import PlotHelp from "./components/ExtraPages/Help/PlotHelp";
import DataHelp from "./components/ExtraPages/Help/DataHelp";
import IndicesHelp from "./components/ExtraPages/Help/IndicesHelp";
import { Route, Routes } from "react-router-dom";
import PlotExplorerContainer from "./components/PlotExplorerContainer";
import MissingPlots from "./components/ExtraPages/Help/MissingPlots";
import TimeHelp from "./components/ExtraPages/Help/TimeHelp";
import Acknowledgements from "./components/ExtraPages/About/Acknowledgements";
import Usage from "./components/ExtraPages/Help/Usage";
import AboutExplorer from "./components/ExtraPages/About/AboutExplorer";
import IndicesCalculation from "./components/ExtraPages/About/IndicesCalculation";
import DownloadHelp from "./components/ExtraPages/Help/DownloadHelp";

function App() {
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
