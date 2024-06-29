import logo from './logo.svg';
import './App.css';
import { BrowserTypes, BrowserView, MobileView } from 'react-device-detect';

function App() {
  return (

    <div>
      <BrowserView>
        <div className='flex1'>
          <div className='Header'>
            <div className='hi'>ㅎ하염</div>
            <div className='hi-des'>세림이 홈피</div>
          </div>

          <div className='q1'>페이지 이동은 어떠케 해?</div>
        </div>
      </BrowserView >

      <MobileView>
        <div className='hi'>ㅎ하e염</div>
      </MobileView>

    </div >
  );
}

export default App;
