//imports
import './App.css';
import { Layout } from './components/layout/Layout';
import { NavButtons } from './components/NavButtons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InboundInventory } from './components/InboundInventory';
import { OutboundInventory } from './components/OutboundInventory';
import { InventoryCheck } from './components/InventoryCheck';
import { OutOfStock } from './components/OutOfStock';
import { StockList } from './components/StockList';
import { Logs } from './components/Logs';
import ItemState from './context/itemContext/ItemState';
import LogicState from './context/logicContext/LogicStates';





function App() {
  //router envoles the app, giving the functionality of navigation
  
  return (
    <Router>
      {/*States envoles the app, providing STATES and FUNCTIONS that */}
      <ItemState>
        <LogicState>
          <Layout>
            <Routes>
                  <Route  path="/" element={ <NavButtons /> }/>
                  <Route path="/inbound-inventory" element={ <InboundInventory /> }/>
                  <Route path="/outbound-inventory" element={ <OutboundInventory /> }/>
                  <Route path="/inventory-check" element={ <InventoryCheck /> }/>
                  <Route path="/stock-list" element={ <StockList /> }/>
                  <Route path="/logs" element={ <Logs /> }/>
                  <Route path="/out-of-stock" element={ <OutOfStock /> }/>
            </Routes>
          </Layout>
        </LogicState>
      </ItemState>
    </Router>
  );
}

export default App;
