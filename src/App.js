import './App.css';
import HelmetExport from 'react-helmet';
import { useState } from 'react';
//import firebase from 'firebase/compat/app';
import TEST_PAGE from './firestore';
import 'firebase/database';
// import { useEffect } from 'react';
// import { toast } from 'react-toastify';
import Popup from './popup';

function App() {
  const twlink = "https://twitter.com/shu_yamino";
  const y2link = "https://www.youtube.com/@ShuYamino";
  // useEffect(() => {
  //   toast.info('Eyyyyyy welcome to what-does-Shu-say, have fun');
  // }, []);
  // popup stting
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="App">
      <div>
        <HelmetExport>
          <link rel="icon" href="%PUBLIC_URL%/yaminerd.png" />
          {/* 使用https://favicon.io/favicon-converter/ 轉換 路徑必須放在public 下 */}
          <title>What-does-shu-say</title>
        </HelmetExport>

      </div>

      <div className='content'>
        {/* <button>
          <img src="./image/t1.png" width={170} id="target_1" alt='stage1_1' />
        </button>
        <button>
          <img src="./image/t1_flip.png" width={190} id="target_2" alt='stage1_1' />
        </button>
        <button>
          <img src="./image/t2.png" width={140} id="target_3" alt='stage1_1' />
        </button>
        <button>
          <img src="./image/t3.png" width={270} id="target_4" alt='stage1_1' />
        </button>
        <button>
          <img src="./image/t4.png" width={190} id="target_5" alt='stage1_1' />
        </button> */}
        <TEST_PAGE />
        <div className='popuppage'>
          <div className='popupcontent'>
            <button onClick={handleShowPopup}><img src="./image/usb.png" width={70} id="collect" alt='collector' /></button>
            {showPopup && (
              <Popup onClose={handleClosePopup} />
            )}
          </div>
        </div>
      </div>
      {/* <MyComponent /> */}


      <footer>
        <a href={twlink}><img src='./image/twittercon.png' alt="icon" width={90}></img></a>
        <a href={y2link}><img src='./image/button_subscribe.png' alt="icon" width={90}></img></a>
      </footer>
    </div>
  );
}

export default App;
