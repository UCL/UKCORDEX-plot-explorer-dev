import MenuHeader from './components/MenuHeader';
import PlotExplorerRow from './components/PlotExplorerContainer';
import About from './components/ExtraPages/About';
import PlotHelp from './components/ExtraPages/PlotHelp';
import DataHelp from './components/ExtraPages/DataHelp';
import IndicesHelp from './components/ExtraPages/IndicesHelp';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    // rendering just the menu header means it'll display on every page, each route is different
    // Everything should be wrapped in a div 
    <div>
      <MenuHeader />
      {/* Need to have Routes here and not in a separate file for them to be accessed properly */}
      <Routes>
              <Route exact path="/"  element={<PlotExplorerRow />} />
              <Route  path="index" element={<PlotExplorerRow />} />
              <Route  path="about" element={<About />} />
              <Route  path="plot-help" element={<PlotHelp />} />
              <Route  path="data-help" element={<DataHelp />} />    
              <Route  path="indices-help" element={<IndicesHelp />} />
      </Routes>      
     </div>
  );
}

export default App;