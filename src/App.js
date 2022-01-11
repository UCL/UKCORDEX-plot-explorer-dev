import MenuHeader from './components/MenuHeader';
import Routing from './Routing';


function App() {
  return (
    // rendering just the menu header means it'll display on every page, each route is different
    <MenuHeader >
      <Routing />
       </MenuHeader>
  );
}

export default App;