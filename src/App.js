import MenuHeader from './components/MenuHeader';
// import Routing from './Routing';
import PlotExplorerRow from './components/PlotExplorerContainer';
import About from './components/ExtraPages/About';
import PlotHelp from './components/ExtraPages/PlotHelp';
import DataHelp from './components/ExtraPages/DataHelp';
import IndicesHelp from './components/ExtraPages/IndicesHelp';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    // rendering just the menu header means it'll display on every page, each route is different
    <div>
    <MenuHeader />
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