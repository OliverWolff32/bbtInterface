import './App.css';
import EpisodeList from './EpisodeList';
import EpisodeInfo from './EpisodeInfo';
import Ad from './Ad'
import React, {useState, useEffect} from 'react';



function App() {
  const [data, setData] = useState({});
  const [currentEp, setCurrentEp] = useState(3);

  const episodeClicked = (num) => {
    setCurrentEp(num);
  }

  useEffect(() => {
    async function getEpisodes() {
      const response = await fetch("https://us-central1-big-bang-theory-25fd5.cloudfunctions.net/bbt33797/bbt/episodes");
      const json = await response.json(); 
      return json;
    }
    const episodes = getEpisodes(); 
    episodes.then((e) => {
      setData(e);
    })
  }, [])
  
  
  return (
    <div className="Container">
      <div className="Header">
        <h1>Big Bang Theory Episode Directory</h1>
      </div>
      <div className="episodes">
        <EpisodeList onClick={episodeClicked} episodes={data}/>
        <EpisodeInfo episodes={data} episode={currentEp}/>
      </div>
      <Ad/>
    </div>
  );
}

export default App;
