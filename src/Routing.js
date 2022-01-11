import { BrowserRouter, HashRouter as Router, Route, Routes } from "react-router-dom";

import PlotExplorerRow from './components/PlotExplorerContainer';
import About from './components/ExtraPages/About';
import PlotHelp from './components/ExtraPages/PlotHelp';
import DataHelp from './components/ExtraPages/DataHelp';
import IndicesHelp from './components/ExtraPages/IndicesHelp';




function Routing (){
    return(
        // <BrowserRouter>
        <Router 
       basename={process.env.PUBLIC_URL} >
          
        {/* <Routes>
            <Route exact path="/"  element={<PlotExplorerRow />} />
            <Route  path="/index" element={<PlotExplorerRow />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/plot-help" element={<PlotHelp />} />
            <Route  path="/UKCORDEX-plot-explorer-dev/data-help" element={<DataHelp />} />    
            <Route  path="/UKCORDEX-plot-explorer-dev/indices-help" element={<IndicesHelp />} />
            </Routes> */}

            {/* <Routes>
            <Route exact path="/#/"  element={<PlotExplorerRow />} />
            <Route exact path="/#/index" element={<PlotExplorerRow />} />
            <Route exact path="/#/about" element={<About />} />
            <Route exact path="/#/plot-help" element={<PlotHelp />} />
            <Route exact path="/#/UKCORDEX-plot-explorer-dev/data-help" element={<DataHelp />} />    
            <Route exact path="/#/UKCORDEX-plot-explorer-dev/indices-help" element={<IndicesHelp />} />
            </Routes> */}

            {/* <Routes>
            <Route exact path="/#/"  render={props => <PlotExplorerRow {...props} />} />
            <Route exact path="/#/index" element={<PlotExplorerRow />} />
            <Route exact path="/#/about" render={props => <About {...props} />} />
            <Route exact path="/#/plot-help" render={props => <PlotHelp {...props} />} />
            <Route exact path="/#/UKCORDEX-plot-explorer-dev/data-help" render={props => <DataHelp {...props} />} />    
            <Route exact path="/#/UKCORDEX-plot-explorer-dev/indices-help" render={props => <IndicesHelp {...props} />} />
            </Routes> */}


        <Routes>
            <Route exact path={process.env.PUBLIC_URL + '/#/'} ><PlotExplorerRow /></Route>
            <Route path="/about" element={<PlotExplorerRow />} />
            <Route path={process.env.PUBLIC_URL + '/#/about'}><About /> </Route>
            <Route path={process.env.PUBLIC_URL + '/#/plot-help'}><PlotHelp /></Route>
            <Route path={process.env.PUBLIC_URL + '/#/data-help'}><DataHelp /></Route>
            <Route path={process.env.PUBLIC_URL + '/#/indices-help'}><IndicesHelp /></Route>
        </Routes>
        </Router>
        // </BrowserRouter>
    )
};

export default Routing;