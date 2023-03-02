import './App.css';
import tw from "./twittercon.png";// silly bird
//import tw from "./twitter_button.png" //normal bird
import yt from "./button_subscribe.png"


function App() {
  const twlink = "https://twitter.com/shu_yamino";
  const y2link = "https://www.youtube.com/@ShuYamino";
  return (
    <div className="App">
      
      <div className="title">
        <h2>what does Shu say</h2>
      </div>
      <div className='content'>
        <p>demo content</p>
      </div>
        <div className='footer'>
          <a href={twlink}><img src={tw} alt="icon" width={70}></img></a>
          <a href={y2link}><img src={yt} alt="icon" width={70}></img></a>
        </div>
    </div>
    
  );
}

export default App;
