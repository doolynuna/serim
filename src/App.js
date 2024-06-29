import logo from './logo.svg';
import './App.css';
import { BrowserTypes, BrowserView, MobileView } from 'react-device-detect';

function App() {
  return (
    <div className="App">

      <BrowserView>
        desk!serim </BrowserView>
      <MobileView>
        mobile!
      </MobileView>

    </div>
  );
}

export default App;
