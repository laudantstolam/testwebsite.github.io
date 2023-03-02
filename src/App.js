import './App.css';
import tw from "./twittercon.png";
import yt from "./button_subscribe.png"

function App() {
  const twlink = "https://twitter.com/shu_yamino";
  const y2link = "https://www.youtube.com/@ShuYamino";
  return (
    <div className="App">
      
      <div className="title">
        <h2>demo</h2>
      </div>
      <div className='content'>
        <p>my contentgjirogjreiogierioej
          jrigjoiegoiejri
          jgiirjio
        </p>
      </div>
        <div className='footer'>
          <a href={twlink}><img src={tw} alt="icon" width={70}></img></a>
          <a href={y2link}><img src={yt} alt="icon" width={70}></img></a>
        </div>
    </div>
    
  );
}

export default App;
