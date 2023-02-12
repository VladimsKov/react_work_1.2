import './css/main.css';
import ShopItemFunc from './components/ShopItem';
import {items} from './items';


function App() {
  const item = items[1];  
  //const item = items[2];
  
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
    <div className='highlight-overlay'></div>
    </div>
    <div className="window">
    <ShopItemFunc item = { item } />
    </div>
    </div>
    );
  }
  
  export default App;
  